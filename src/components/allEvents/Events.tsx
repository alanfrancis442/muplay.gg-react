import Carousel from "./carousel";

const images = [
  "/allEvents/img1.webp",
  "/allEvents/img2.webp",
  "/allEvents/img3.webp",
  "/allEvents/img4.webp",
  "/allEvents/img5.webp",
  "/allEvents/img6.webp",
];

export default function Events(): JSX.Element {
  return (
    <>
      <div className=" mb-64 flex flex-col justify-center items-center gap-5 text-center">
        <h1 className="font-paladins text-4xl">Our Previous Events</h1>
        <p className="text-base">
          Explore the highlights and key moments from our past events
        </p>
        <div className="md:px-32 md:pt-12 relative z-[999] w-full h-full">
          <Carousel slides={images} />
        </div>
      </div>
    </>
  );
}
