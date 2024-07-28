import { useEffect, useRef, useState } from "react";
const Navbar = ({ isLoading }: { isLoading: boolean }) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState<boolean>(true);
  const [scrollValue, setScrollValue] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (scrollValue > currentScrollPos) {
        setShow(true);
      } else {
        setShow(false);
      }
      setScrollValue(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollValue]);
  useEffect(() => {
    if (isLoading) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [isLoading]);

  const scrollToSection = (sectionId: string) => (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor click behavior
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      style={{
        transform: show ? "translateY(0)" : "translateY(-100%)",
      }}
      className="p-4 bg-transparent w-full md:block hidden fixed top-0 z-[99999999] backdrop-blur-md transition-all duration-500"
    >
      <div className="container mx-auto flex justify-between items-center px-[2vw]">
        <div className="text-white text-[3vw] font-bold font-paladins">
          MUPLAY<span style={{ fontFamily: "arial" }}>.gg</span>
        </div>
        <div>
          {["home", "updates", "resources", "about", "contact us"].map(
            (item, index) => (
              <a href={`#${item}`} key={index}>
                <span
                  onClick={scrollToSection(`#${item}`)}
                  style={{ fontSize: "1.1vw" }}
                  className="text-white text-lg p-2 hover:underline underline-offset-2 transition-all cursor-pointer"
                >
                  {item.toUpperCase()}
                </span>
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
