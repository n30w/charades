import { PROMPT, requestOAI } from "./openai";

const GPT_MODEL = "gpt-3.5-turbo";

export type xyPair = {
  x: number;
  y: number;
};

// purge removes coordinates that are already in the array
export function purge(arr: Array<string>) {
  const m = new Map();
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!m.has(arr[i])) {
      m.set(arr[i], true);
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// packData turns the coordinate objects into an array that can be sent to GPT
export function packData(arr: Array<xyPair>): Array<string> {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push("(" + arr[i].x + ", " + arr[i].y + ")");
  }
  return newArr;
}

export function sendMessage(coords: Array<xyPair>, api_proxy: string): any {
  const data = purge(packData(coords));
  let response;
  // so we can start a new messages array for every input
  let messages = [
    {
      role: "user",
      content: PROMPT + data,
    },
  ];

  // send the request
  let params = {
    model: GPT_MODEL,
    messages: messages,
    temperature: 0.8,
  };
  requestOAI(
    "POST",
    "/v1/chat/completions",
    params,
    (results: any) => {
      response = results.choices[0].message.content;
    },
    api_proxy
  );

  return response;
  // Note: there are additional parameters available, see
  // https://platform.openai.com/docs/api-reference/chat
}

function gotResults(results: any): any {
  let message = results.choices[0].message.content;
  return message;
}
