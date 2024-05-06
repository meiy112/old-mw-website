import { useState, useRef, useEffect, SetStateAction } from "react";
import { LuPartyPopper, LuSend, LuSmilePlus } from "react-icons/lu";

export default function ChatModal({ closeModal }: { closeModal: () => void }) {
  return (
    <div className="flex flex-col rounded-[25px] w-[37.5em] h-[31em] glass-container">
      <CloseButton />
      <ChatHeader />
      <Chat />
      <ChatMessage />
    </div>
  );

  function CloseButton() {
    return (
      <div className="absolute">
        <button onClick={closeModal}>Hi</button>
      </div>
    );
  }

  function ChatHeader() {
    return (
      <div className="items-center px-[30px] pb-[18px] pt-[24px] gap-x-[10px] flex flex-row text-[1.2rem] font-bold">
        <LuPartyPopper size={24} />
        <p>New Chat</p>
      </div>
    );
  }

  function Chat() {
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
          <p className="pt-[10px] font-light text-[0.77rem] opacity-[0.8]">
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
