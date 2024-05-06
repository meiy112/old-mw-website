export default function FormModal() {
  return (
    <div className="rounded-[25px] w-[16em] h-[26em] p-[24px] glass-container">
      <Profile />
      <Forms />
    </div>
  );
}

function Profile() {
  return (
    <div className="flex flex-row gap-x-[1rem]">
      <img src="/guest-pfp.jpg" className="size-[45px] rounded-[50%]" />
      <div className="flex flex-col justify-between">
        <p className="font-bold text-[0.97rem]">You</p>
        <p className="font-light text-[0.8rem] opacity-[0.8]">@GuestUser</p>
      </div>
    </div>
  );
}

function Forms() {
  return (
    <div className="mt-[20px] gap-y-[1.5em] flex flex-col">
      <div className="flex flex-col gap-y-[0.2em]">
        <p className="font-bold text-[0.83rem]">Your Name</p>
        <input
          className="glass-input rounded-[25px] p-[10px] text-[0.9rem] w-[100%]"
          type="text"
          placeholder="What should I call you?"
        />
      </div>
      <div className="flex flex-col gap-y-[0.2em]">
        <p className="font-bold text-[0.83rem]">Your Email</p>
        <input
          className="glass-input rounded-[25px] p-[10px] text-[0.9rem] w-[100%]"
          type="email"
          placeholder="Where should I reply back?"
        />
      </div>
      <div>
        <p className="font-bold text-[0.83rem]">Your Reaction</p>
      </div>
    </div>
  );
}
