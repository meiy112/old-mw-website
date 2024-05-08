import { EmailForm } from "./sendEmail";
import { getCurrentTimeString } from "./utility";

export interface Message {
  message: any;
  date: string;
  fromMe: boolean;
}

export function getReactionMessage(emailForm: EmailForm) {
  let emojiMessage = {
    message: "",
    fromMe: false,
    date: getCurrentTimeString(),
  };

  if (emailForm.getReaction == "Nerdy") {
    emojiMessage = {
      message: "#UmAckshually🤓",
      fromMe: false,
      date: getCurrentTimeString(),
    };
  } else if (emailForm.getReaction == "Friendly") {
    emojiMessage = {
      message: "#HeyThere🤗",
      fromMe: false,
      date: getCurrentTimeString(),
    };
  } else if (emailForm.getReaction == "Funny") {
    emojiMessage = {
      message: "#LOL😂",
      fromMe: false,
      date: getCurrentTimeString(),
    };
  } else if (emailForm.getReaction == "Inquiring") {
    emojiMessage = {
      message: "#Hmm...🤔",
      fromMe: false,
      date: getCurrentTimeString(),
    };
  } else if (emailForm.getReaction == "Indifferent") {
    emojiMessage = {
      message: "#Meh🫤",
      fromMe: false,
      date: getCurrentTimeString(),
    };
  } else if (emailForm.getReaction == "Cowboy") {
    emojiMessage = {
      message: "#Yeehaw🤠",
      fromMe: false,
      date: getCurrentTimeString(),
    };
  } else if (emailForm.getReaction == "Cool") {
    emojiMessage = {
      message: "#Cool😎",
      fromMe: false,
      date: getCurrentTimeString(),
    };
  }

  return emojiMessage;
}
