import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

interface linktypes {
  label: string;
  href: string;
  icon?: any;
}

const Footer = () => {
  return (
    <footer
      id="contact us"
      className=" text-white px-5 sm:px-20 py-8 flex justify-between w-full flex-col
     md:flex-row md:gap-32 md:py-10
      "
    >
      <div className="flex flex-col gap-4 md:gap:5">
        <h1 className="text-2xl font-bold font-paladins">Muplay</h1>
        <p className="text-sm w-3/4">
          muPlay is a platform for Gamers, Game developers and eSports
          enthusiasts to connect, compete and create.
        </p>
      </div>
      <div className="flex md:gap-20 flex-col md:flex-row gap-4 md:gap:5">
        {[
          {
            title: "OUR PARTNERS",
            links: [
              { label: "TILTLABS", href: "https://tiltlabs.io/" },
              { label: "AKEF", href: "https://www.akef.in/" },
              {
                label: "AnimationXpress",
                href: "https://www.animationxpress.com/",
              },
              { label: "Banzan studios", href: "https://banzan.co/" },
              { label: "Norian games", href: "https://norian.studio/" },
              { label: "MakeMypass", href: "https://makemypass.com/home" },
            ],
          },
          {
            title: "SOCIAL HANDLES",
            links: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/muplay.gg/",
                icon: <FaInstagram />,
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/@muplay-gg",
                icon: <FaYoutube />,
              },
              {
                label: "Twitch",
                href: "https://www.twitch.tv/muplay_gg",
                icon: <FaTwitch />,
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/gtech-mulearn-771670169691881483",
                icon: <FaDiscord />,
              },
            ],
          },
          {
            title: "CONTACT US",
            contact: [
              { label: "MuPlay Connext" },
              { label: "connect@muplay.gg" },
            ],
          },
        ].map((section, index) => (
          <div key={index}>
            <h2 className="font-bold text-lg mb-4 font-paladins">
              {section.title}
            </h2>
            {
              //@ts-ignore
              section.content && <p className="text-sm">{section.content}</p>
            }
            {section.links && (
              <ul className="space-y-2 text-sm">
                {section.links.map((link: linktypes, linkIndex: number) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-1"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {section.contact && (
              <ul className="space-y-2 text-sm">
                {section.contact.map((contact, contactIndex) => (
                  <li key={contactIndex}>{contact.label}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
