type xyPair = {
  x: number;
  y: number;
};

let coords: Array<xyPair> = [];
let guess = "";

// purge removes coordinates that are already in the array
function purge(arr: Array<string>) {
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
function packData(arr: Array<xyPair>): Array<string> {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push("(" + arr[i].x + ", " + arr[i].y + ")");
  }
  return newArr;
}

function sendMessage() {
  const data = purge(packData(coords));
  // so we can start a new messages array for every input
  let messages = [
    {
      role: "user",
      content: PROMPT + data,
    },
  ];

  // send the request
  let params = {
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0.8,
  };
  requestOAI("POST", "/v1/chat/completions", params, gotResults);

  // Note: there are additional parameters available, see
  // https://platform.openai.com/docs/api-reference/chat
}

function gotResults(results: any) {
  let message = results.choices[0].message.content;
  guess = message;
}
