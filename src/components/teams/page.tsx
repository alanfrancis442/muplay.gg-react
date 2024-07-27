import React from "react";

const members = [
  {
    name: "Deepu s nath",
    position: "Director,Gtech Mulearn",
    img: "/team/deepu.webp",
  },
  {
    name: "nikhil chandran",
    position: "CEO, tiltlabs",
    img: "/team/nikhil.webp",
  },
  {
    name: "mukesh dev",
    position: "CEO,banzan studios",
    img: "/team/mukesh.webp",
  },
  {
    name: "Jobin joseph",
    position: "co-founder,norian games",
    img: "/team/jobin.webp",
  },
];

export default function Teams() {
  return (
    <div className="flex justify-center items-center py-16 flex-col gap-12 mb-16">
      <h1 className="text-4xl font-paladins">Our Teams</h1>
      <div className="box-center w-full">
        <div className="w-full box-center h-full">
          <div className="flex max-md:gap-5 max-md:flex-col w-full md:px-36 justify-between 2xl:justify-center 2xl:gap-32">
            {members.map((e, i) => {
              return (
                <div
                  key={i}
                  className="box-center flex-col"
                  style={{ alignItems: "center" }}
                >
                  <img
                    src={e.img}
                    width={200}
                    height={200}
                    className="object-cover"
                    alt="team"
                  />
                  <div
                    className="bg-[#18212A] w-full p-4 h-full clip-b-r"
                    style={{ width: "200px" }}
                  >
                    <h1 className="text-xl font-paladins text-wrap text-ellipsis">
                      {e.name}
                    </h1>
                    <p className="capitalize">{e.position}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
