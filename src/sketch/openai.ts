const PROMPT: string =
  "We are now playing Charades. I'm going to give you a list of x and y coordinate points, in parentheses pair format, similar to cartesian coordinates. (0,0) is placed at the top left of the canvas and (640, 640) is at the bottom right. Imagine that the order in which the points are given connect to make something. Given those coordinates, please give me your guess of the figure or graphic that the coordinates construct. You have to make a guess, and you can't say that its not possible to determine the shape. Just tell me what it looks like. Don't tell me that you don't know or if its impossible to know. Remember that you have to guess, because its a game! Only tell me your answer with no explanation. Here are the coordinates: ";
const OPENAI_API_PROXY: string | undefined = process.env.OPENAI_API_PROXY;

// This is from the request wrapper from class.
async function requestOAI(
  method: string,
  path: string,
  parametersOrCb: any,
  cb: Function
) {
  if (!OPENAI_API_PROXY) {
    throw "openai_api_proxy is not set";
  }

  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };
  if (parametersOrCb && typeof parametersOrCb != "function") {
    //@ts-ignore
    options.body = JSON.stringify(parametersOrCb);
  }

  let res;
  try {
    //@ts-ignore
    res = await fetch(OPENAI_API_PROXY + path, options);
  } catch (e) {
    console.error(
      "There was an error communicating to the OpenAI API proxy. Is it offline?"
    );
  }

  let data;
  if (res && res.ok) {
    data = await res.json();
  } else if (res && !res.ok) {
    let message =
      "The OpenAI API proxy returned an error with response code " + res.status;
    try {
      let error = await res.json();
      if (error && error.error && error.error.message) {
        message += ": " + error.error.message;
      }
    } catch (e) {}
    console.error(message);
  }

  if (typeof parametersOrCb == "function") {
    parametersOrCb(data);
  } else if (typeof cb == "function") {
    cb(data);
  }
  return data;
}
