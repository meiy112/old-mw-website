import { useTheme } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import { Raleway } from "next/font/google";
import { useState, useRef, useEffect, SetStateAction } from "react";
import { LuPartyPopper, LuSend, LuSmilePlus, LuX } from "react-icons/lu";

interface Message {
  message: string;
  date: string;
  fromMe: boolean;
}

const raleway = Raleway({ subsets: ["latin"] });

export default function ChatModal({ closeModal }: { closeModal: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);

  const add = (newMessage: Message) => {
    const newMessages = messages;
    newMessages.push(newMessage);
    setMessages(newMessages);
  };

  return (
    <div className="flex flex-col rounded-[25px] w-[37.5em] h-[31em] glass-container">
      <CloseButton />
      <ChatHeader />
      <Chat messages={messages} />
      <ChatMessage />
    </div>
  );

  function CloseButton() {
    return (
      <div className="absolute top-[-2em] left-[-2.5em]">
        <motion.button
          className="size-[55px] flex justify-center items-center glass-container rounded-[20px]"
          onClick={closeModal}
          initial={{ y: 0 }}
          animate={{
            y: 10,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            duration: 2.5,
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.3,
            }}
          >
            <LuX size={22} />
          </motion.div>
        </motion.button>
      </div>
    );
  }

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
    console.log(messages);
    return (
      <div
        className="overflow-y-scroll hidescrollbar rounded-[20px] flex-1 p-[20px]"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div>
          <Profile />
        </div>
        <ul>
          <AnimatePresence initial={true}>
            <Message
              message={"Send me a message, it'll go straight to my inbox!"}
              date={"5:01 PM"}
              fromMe={true}
            />
            {messages.map((item, index) => (
              <Message
                message={item.message}
                date={item.date}
                fromMe={item.fromMe}
              />
            ))}
          </AnimatePresence>
        </ul>
      </div>
    );

    function Message({
      message,
      date,
      fromMe,
    }: {
      message: string;
      date: string;
      fromMe: boolean;
    }) {
      return { fromMe } ? (
        <motion.li
          initial={{ opacity: 0, y: 50, x: -150, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          transition={{
            delay: 1,
            type: "spring",
            stiffness: 300,
            damping: 24,
          }}
        >
          <div className={`${raleway.className} text-[0.85rem] flex flex-col`}>
            <div
              className={`rounded-t-[30px] rounded-br-[30px] rounded-bl-[4px] px-[1.6em] py-[1.1em] max-w-[300px]`}
              style={{ background: "rgba(21, 21, 24, 1)" }}
            >
              {message}
            </div>
            <p className="font-light opacity-[0.8] text-[0.8rem] ml-[1em] mt-[0.1em]">
              {date}
            </p>
          </div>
        </motion.li>
      ) : (
        <motion.li
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        >
          <div className={`${raleway.className} text-[0.85rem] flex flex-col`}>
            <div
              className={`rounded-t-[30px] rounded-br-[30px] rounded-bl-[4px] px-[1.6em] py-[1.1em] max-w-[300px]`}
              style={{ background: "rgba(21, 21, 24, 1)" }}
            >
              {message}
            </div>
            <p className="font-light opacity-[0.8] text-[0.8rem] ml-[1em] mt-[0.1em]">
              {date}
            </p>
          </div>
        </motion.li>
      );
    }

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

  function ChatMessage() {
    const [text, setText] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    // This function adjusts the height of the textarea to fit the content
    const adjustTextareaHeight = () => {
      if (textareaRef.current) {
        // Reset the height to allow expansion
        textareaRef.current.style.height = "auto";
        // Set the height based on the scroll height
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

    return (
      <div className="px-[24px] py-[13px]">
        <div className="glass-input rounded-[27px] p-[9px] flex justify-between items-end">
          <button className="mb-[10px] pl-[15px]">
            <LuSmilePlus size={25} />
          </button>
          <textarea
            rows={1}
            value={text}
            onChange={handleChange}
            ref={textareaRef}
            className="overflow-y-auto max-h-[10em] mb-[11px] bg-transparent outline-none flex-1 mx-[10px] min-h-[1.5rem] resize-none"
          />
          <button className="flex justify-center items-center size-[46px] bg-white rounded-[27px]">
            <LuSend color={"#1ABBA8"} size={22} />
          </button>
        </div>
      </div>
    );
  }
}
