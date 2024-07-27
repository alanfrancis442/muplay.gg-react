const details = [
  {
    title: "Promote μPlay.gg",
    description: "Spread the word about μPlay.gg in their campuses",
  },
  {
    title: "Organize Events",
    description:
      "Host events and activities in their institutions to engage students",
  },
  {
    title: "Build Community",
    description:
      "Build a campus network of gamers and developers, linking to the larger μPlay.gg community.",
  },
];

function Cap() {
  return (
    <div className="py-32 mb-64 box-center w-full bg-[url(/Cap/background.webp)] bg-cover bg-center text-center ">
      <div className=" w-full h-full box-center flex-col gap-5">
        <h1 className="text-4xl font-paladins">Campus Ambassador Program</h1>
        <p>
          Our Campus Ambassador program aims to bring μPlay.gg to educational
          institutions. Ambassadors:
        </p>
        <div className=" w-full grid md:grid-cols-3 max-md:grid-row-3 gap-12 px-8">
          {details.map((e, i) => (
            <div
              key={i}
              className="box-center bg-[#1E1E1E] p-3 flex justify-between clip-box"
            >
              <div className="w-1/2">
                <h1 className="font-bold text-2xl">{e.title}</h1>
                <p className="text-sm text-wrap">{e.description}</p>
              </div>
              <img
                src={"/Cap/icon.webp"}
                width={150}
                height={150}
                alt="ambassador"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cap;
