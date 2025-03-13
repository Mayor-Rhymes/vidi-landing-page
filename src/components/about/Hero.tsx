export default function Hero() {
  return (
    <div className="h-[900px] bg-heroImage3 relative bg-no-repeat bg-cover flex flex-col text-white justify-center">
      <div className="h-full w-full absolute left-0 top-0 bg-black opacity-75 z-0"></div>
      <div className="flex flex-col gap-16 z-10 justify-around px-10">
        <div className="flex flex-col gap-4 text-2xl text-center self-start">
          <p>We are on a mission</p>
          <p className="text-4xl font-semibold">
            Inspire, Empower, <span className="text-2xl font-normal">&</span>{" "}
            Educate
          </p>
          <p className="text-4xl font-semibold">
            Every Woman <span className="text-2xl font-normal">&</span> Child{" "}
            <span className="text-2xl font-normal">in</span> Africa.
          </p>
        </div>

        <div className="flex flex-col gap-4 self-end text-2xl text-center">
          <p>
            Founded in <span className="text-4xl font-semibold">2013</span> by{" "}
            <span className="text-4xl font-semibold">
              Onyinyechi J. Nwosu-OJN,
            </span>
          </p>
          <p>
            <span className="text-4xl font-semibold">VIDI</span> was born out of
            a deep-seated desire to{" "}
            <span className="text-4xl font-semibold">address</span>
          </p>
          <p>
            the{" "}
            <span className="text-4xl font-semibold">challenges hindering</span>{" "}
            the <span className="text-4xl font-semibold">development</span>
          </p>
          <p>
            & <span className="text-4xl font-semibold">well-being</span> of{" "}
            <span className="text-4xl font-semibold">girls</span> in our
            communities
          </p>
        </div>
      </div>
    </div>
  );
}
