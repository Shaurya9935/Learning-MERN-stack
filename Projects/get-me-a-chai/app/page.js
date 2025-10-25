import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col text-white gap-4 h-[44vh] items-center">
        <div className=" flex gap-2 justify-center items-center font-bold text-5xl">
          Buy Me A Chai! 
          <span><img src="./tea.gif" width={88} alt="tea" /></span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start Now !
        </p>
        <div className="flex gap-3 ">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      <div className="text-white container mx-auto py-32">
        <h2 className="text-2xl  font-bold text-center mb-14">
          Your friends can buy you a chai 
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="./man.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your friends are avaliable to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="./coin.gif" alt="" />
            <p className="font-bold">Fans Want to Help</p>
            <p className="text-center">Your friends are avaliable to help you </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="./group.gif" alt="" />
            <p className="font-bold">Fans Want to help</p>
            <p className="text-center">Your friends are avaliable to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-32">
        <h2 className="text-2xl  font-bold text-center mb-14">Learn More about us</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="./man.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your friends are avaliable to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="./coin.gif" alt="" />
            <p className="font-bold">Fans Want to Help</p>
            <p className="text-center">Your friends are avaliable to help you </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="./group.gif" alt="" />
            <p className="font-bold">Fans Want to help</p>
            <p className="text-center">Your friends are avaliable to help you</p>
          </div>
        </div>
      </div>
    </>
  );
}
