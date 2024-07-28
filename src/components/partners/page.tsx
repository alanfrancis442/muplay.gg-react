export default function Page() {
  const logo = [
    {
      icon: "/partners/tiltlabs.webp",
      link: "https://tiltlabs.io/",
    },
    {
      icon: "/partners/banzan.webp",
      link: "https://banzan.co/",
    },
    {
      icon: "/partners/makemypass.webp",
      link: "https://makemypass.com/home",
    },
    {
      icon: "/partners/noriangames.webp",
      link: "https://norian.studio/",
    },
    {
      icon: "/partners/animation-express.webp",
      link: "https://www.animationxpress.com/",
    },
    {
      icon: "/partners/akef.webp",
      link: "https://www.akef.in/",
    },
  ];

  return (
    <div className="text-white w-full flex flex-col justify-center items-center gap-5 pb-12">
      <h1 className="text-4xl font-bold font-paladins">Our Partners</h1>
      <div className="flex justify-center items-center gap-1 md:gap-8 ">
        {logo.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="m-4"
          >
            <img
              src={`${item.icon}`}
              alt="partner"
              width={150}
              height={150}
              className="cursor-pointer"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
