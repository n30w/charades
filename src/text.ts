// All of the text for components

enum Speaker {
  NEO,
  GPT_4,
  GPT_3_5,
}

const NEO = 0;
const GPT_4 = 1;
const GPT_3_5 = 2;

// Convenience function that creates a line of a speaker in a dialogue.
const line = (speaker: Speaker, text: string) => {
  let s: string;
  switch (speaker) {
    case Speaker.NEO: {
      s = "Neo";
      break;
    }
    case Speaker.GPT_4: {
      s = "GPT-4";
      break;
    }
    case Speaker.GPT_3_5: {
      s = "GPT-3.5";
      break;
    }
  }
  return { speaker: s, text: text };
};

export const conversation1: Array<{ speaker: string; text: string }> = [
  line(NEO, "What is a charade?"),
  line(
    GPT_4,
    `"Charade" refers to an act or event that is clearly false, intended to create a deceptive appearance. It's often used to describe a situation or a behavior that is meant to deceive others or is not genuine. For example, if someone says, "Their cooperation was a charade," it means that the cooperation was not real or sincere, but just a pretense. Additionally, "charade" can also refer to a game in which players guess a word or phrase acted out silently by another player.`
  ),
  line(NEO, "Alright. What are synonyms for charade?"),
  line(
    GPT_4,
    `Synonyms for "charade" include: Pretense, Sham, Facade, Act, Masquerade, Deception, Subterfuge, Mockery, Farce, Feint. These words convey a similar sense of something being put on or feigned, often to deceive or give a false impression.`
  ),
  line(NEO, "Are you a charade?"),
  line(
    GPT_4,
    "No, I am not a charade. I am an AI developed by OpenAI, designed to provide information and answer questions based on the programming and data I have been trained on. My responses are generated based on patterns in data and are intended to be informative and helpful, not deceptive."
  ),
];

export const introParagraph: Array<string> = [
  `Best-of-Breed (BoB) and End-to-End (E2E) are both lingo used in business financial contexts to  categorize technology solutions to determine whether they are viable options for the business’ business. Does it make the most money? A BoB solution means choosing the best tool for the job and implementing them individually. An E2E solution means choosing a single tool, a multi-tool, that helps the business develop a product from its conception to its delivery.`,

  `Artificial intelligence (AI) is not yet E2E. Current AI tools are very specialized in their approach and purpose: ChatGPT, a cutting-edge Large Language Model (LLM) that speaks with a voice unmistakably human; Midjourney and DALL-E, two advanced stable diffusion models capable of transmuting precise words into accurate images; ElevenLabs, an elaborate parrot that can mimic, through voice recordings, someone of ours long lost.`,
];
