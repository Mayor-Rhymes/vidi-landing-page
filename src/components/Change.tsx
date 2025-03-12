export default function Change() {
  return (
    <div className="relative h-[485px] bg-[url('/images/change-pic.png')] bg-no-repeat bg-cover bg-center text-white flex flex-col justify-center">
      <div className="absolute left-0 top-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="text-2xl flex flex-col gap-4 z-40 pl-10">
        <p>
          <span className="font-semibold text-4xl">Together</span>, We can make
          a <span className="font-semibold text-4xl">Change</span>.
        </p>
        <p>
          Think <span className="font-semibold text-4xl">Prevention!</span>
        </p>
      </div>

      <div className="h-[90px] w-full z-40 absolute bottom-0 lg:flex hidden">
        <div className="flex-grow-[2] bg-black flex items-center justify-center text-2xl">
          <p>Sign up for our newsletter</p>
        </div>
        <div className="flex-grow-[2] bg-white"></div>
        <div className="flex-grow bg-red-600 flex items-center justify-center text-2xl">
          <p>Partner with Us</p>
        </div>
      </div>
    </div>
  );
}
