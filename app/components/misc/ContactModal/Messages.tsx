import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export function MessageFromMe({
  message,
  date,
}: {
  message: string;
  date: string;
}) {
  return (
    <div
      className={`items-start ${raleway.className} text-[0.85rem] flex flex-col`}
    >
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
  );
}

export function MessageFromUser({
  message,
  date,
}: {
  message: string;
  date: string;
}) {
  return (
    <div
      className={`items-end ${raleway.className} text-[0.85rem] flex flex-col`}
    >
      <div
        className={`font-medium rounded-t-[30px] rounded-br-[4px] rounded-bl-[30px] px-[1.6em] py-[1.1em] max-w-[300px]`}
        style={{ background: "#5D956F" }}
      >
        {message}
      </div>
      <p className="font-light opacity-[0.8] text-[0.8rem] mr-[1em] mt-[0.1em]">
        {date}
      </p>
    </div>
  );
}
