import { getCurrentTimeString, normalizeString } from "@/app/utility/utility";
import { useTheme } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect, SetStateAction } from "react";
import { LuPartyPopper, LuSend, LuSmilePlus } from "react-icons/lu";
import { MessageFromMe, MessageFromUser } from "./Messages";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";

interface Message {
  message: any;
  date: string;
  fromMe: boolean;
}

export default function ChatModal() {
  const [messages, setMessages] = useState<Message[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const add = (newMessage: Message) => {
    const newMessages = [...messages, newMessage];

    if (!newMessage.fromMe) {
      let userMessage: Message = {
        message: "Thanks for the message, I'll talk to you soon :)",
        fromMe: true,
        date: getCurrentTimeString(),
      };
      if (normalizeString(newMessage.message) == "why not") {
        userMessage = {
          message: "We're waiting for godot 🕴🌳🕴",
          fromMe: true,
          date: getCurrentTimeString(),
        };
      } else if (normalizeString(newMessage.message) == "lets go") {
        userMessage = {
          message: "We can't",
          fromMe: true,
          date: getCurrentTimeString(),
        };
      } else if (normalizeString(newMessage.message) == "") {
        userMessage = {
          message: "I think you forgot to write something :0 wanna try again?",
          fromMe: true,
          date: getCurrentTimeString(),
        };
      }
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, userMessage]);
      }, 1000);
    }

    setMessages(newMessages);
  };

  useEffect(() => {
    const initialMessage: Message = {
      message: "Send me a message, it'll go straight to my inbox!",
      fromMe: true,
      date: getCurrentTimeString(),
    };

    setTimeout(() => {
      add(initialMessage);
    }, 1500);
  }, []);

  return (
    <div className="flex flex-col rounded-[25px] w-[37.5em] h-[31em] glass-container">
      <ChatHeader />
      <Chat messages={messages} />
      <ChatMessage add={add} />
    </div>
  );

  function ChatHeader() {
    const theme = useTheme();
    return (
      <div className="items-center px-[20px] py-[12px] flex flex-row text-[1rem] font-bold">
        <div
          className="flex flex-row rounded-[10em] px-[1em] gap-x-[10px] py-[0.6em]"
          style={{ background: theme.palette.primary.main }}
        >
          <LuPartyPopper size={24} />
          <p>New Chat</p>
        </div>
      </div>
    );
  }

  function Chat({ messages }: { messages: Message[] }) {
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (divRef.current) {
        // Scrolls to the bottom of the div when a new message is added
        divRef.current.scrollTop = divRef.current.scrollHeight;
      }
    }, [messages]);

    return (
      <div
        className="overflow-y-scroll hidescrollbar rounded-[20px] flex-1 p-[20px]"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
        ref={divRef}
      >
        <div>
          <Profile />
        </div>
        <ul className="flex flex-col justify-end flex-1">
          <AnimatePresence>
            {messages.map((item, index) => {
              // Determine if the current message is newly added
              const isNewItem = index + 1 == messages.length;

              return item.fromMe ? (
                <motion.li
                  initial={
                    isNewItem
                      ? { opacity: 0, y: 50, x: -150, scale: 0.3 }
                      : false
                  }
                  animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.2 },
                  }}
                  layout
                  key={index}
                >
                  <MessageFromMe message={item.message} date={item.date} />
                </motion.li>
              ) : (
                <motion.li
                  initial={
                    isNewItem
                      ? { opacity: 0, y: 50, x: 200, scale: 0.3 }
                      : false
                  }
                  animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.2 },
                  }}
                  layout
                  key={index}
                >
                  <MessageFromUser message={item.message} date={item.date} />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>
    );

    function Profile() {
      return (
        <div className="flex flex-col items-center">
          <img src="/pfp.jpg" className="size-[45px] rounded-[50%]" />
          <p className="font-bold text-[0.97rem]">Maggie Weng</p>
          <p className="font-light text-[0.8rem] opacity-[0.8]">
            maggie.weng112@gmail.com
          </p>
          <p className="mb-[2em] mt-[0.7em] font-light text-[0.77rem] opacity-[0.8]">
            Joined May 2024
          </p>
        </div>
      );
    }
  }

  function ChatMessage({ add }: { add: (newMessage: Message) => void }) {
    const [text, setText] = useState<string>("");
    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick: (
      emojiData: EmojiClickData,
      event: MouseEvent
    ) => void = (emojiObject: EmojiClickData, event: MouseEvent) => {
      setText((prevInput) => prevInput + emojiObject.emoji);
      setShowPicker(false);
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    };

    // This function adjusts the height of the textarea to fit the content
    const adjustTextareaHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    // Use effect to adjust the height when the text changes
    useEffect(() => {
      adjustTextareaHeight();
    }, [text]);

    // Handle change in the textarea
    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
      setText(e.target.value);
    };

    const onClick = () => {
      const newMessage: Message = {
        message: text,
        fromMe: false,
        date: getCurrentTimeString(),
      };
      add(newMessage);
    };

    return (
      <div className="px-[24px] py-[13px]">
        <div className="glass-input rounded-[27px] p-[9px] flex justify-between items-end">
          <button
            className="mb-[10px] pl-[15px]"
            onClick={() => setShowPicker((val) => !val)}
          >
            <LuSmilePlus size={25} />
          </button>
          {showPicker && (
            <div className="relative">
              <EmojiPicker
                style={{ position: "absolute", bottom: 0, right: 60 }}
                onEmojiClick={onEmojiClick}
              />
            </div>
          )}
          <textarea
            rows={1}
            value={text}
            onChange={handleChange}
            ref={textareaRef}
            className="placeholderColor overflow-y-auto max-h-[10em] mb-[11px] bg-transparent outline-none flex-1 mx-[10px] min-h-[1.5rem] resize-none"
            placeholder="What do you want to chat about?"
          />
          <button
            onClick={onClick}
            className="flex justify-center items-center size-[46px] bg-white rounded-[27px]"
          >
            <LuSend color={"#1ABBA8"} size={22} />
          </button>
        </div>
      </div>
    );
  }
}
