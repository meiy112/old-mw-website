import { Fira_Code, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

export default function CodeSnippet({
  code,
  lang,
  title,
}: {
  code: any;
  lang?: string;
  title?: string;
}) {
  const getIcon = (lang: string | undefined) => {
    if (lang === "sql") {
      return (
        <img
          src="images/Code/sql-icon.png"
          alt="sql"
          className="h-[1rem] w-[1rem] mr-[0.4rem] ml-[-0.3rem]"
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="bg-[#2F333B] w-[100%] rounded-[15px]">
      <section className={`${inter.className} h-[54px] flex flex-row`}>
        <div className="flex flex-row items-center h-[100%] gap-x-[7px] px-[22px]">
          <div className="rounded-[50%] size-[13.5px] bg-[#FF4E4D]" />
          <div className="rounded-[50%] size-[13.5px] bg-[#FFBA00]" />
          <div className="rounded-[50%] size-[13.5px] bg-[#00CB19]" />
        </div>
        <div className="text-white opacity-[0.7] bg-[#22272E] rounded-t-[15px] flex items-center justify-center px-[25px] mt-[5px]">
          {getIcon(lang)}
          {title}.{lang}
        </div>
      </section>
      <section
        className={`${firaCode.className} font-light text-[0.9rem] bg-[#22272E] rounded-b-[15px] px-[3em] py-[1.9em]`}
      >
        {code}
      </section>
    </div>
  );
}
