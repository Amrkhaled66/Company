import team1 from "src/assets/team/team1.webp";
import team2 from "src/assets/team/team2.webp";
import team3 from "src/assets/team/team3.webp";
import team4 from "src/assets/team/team4.webp";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Cards = [
  {
    name: "Alvantan Khan",
    position: "Lead Developer",
    img: team1,
  },
  {
    name: "Alvantan Khan",
    position: "Lead Developer",
    img: team2,
  },
  {
    name: "Alvantan Khan",
    position: "Lead Developer",
    img: team3,
  },
  {
    name: "Alvantan Khan",
    position: "Lead Developer",
    img: team4,
  },
];

const SocialIcon = ({ icon }) => {
  return (
    <div className="text-main hover:bg-main cursor-pointer rounded-2xl bg-white p-2.5 transition-all duration-300 hover:text-white">
      {icon}
    </div>
  );
};

const Card = ({ name, position, img }) => {
  return (
    <div className="group border-stroke relative h-fit w-full overflow-hidden rounded-2xl sm:w-[330px] border bg-white drop-shadow-lg md:w-[292px]">
      <div className="h-[363px] w-full cursor-pointer overflow-hidden">
        <img
          src={img}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
          alt={name}
        />
      </div>
      <div className="text-main-900 flex flex-col gap-y-3 p-4 text-xl">
        <h4 className="font-bold">{name}</h4>
        <p className="font-[400]">{position}</p>
      </div>
      <div className="absolute top-3 -left-16 h-fit w-fit space-y-[16px] transition-all duration-300 group-hover:left-3">
        <SocialIcon icon={<FaFacebook className="h-[21px] w-[21px]" />} />
        <SocialIcon icon={<FaInstagram className="h-[21px] w-[21px]" />} />
        <SocialIcon icon={<BsTwitterX className="h-[21px] w-[21px]" />} />
      </div>
    </div>
  );
};

export default function TeamCards() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 w-full flex-col justify-center gap-5 md:flex-row md:gap-x-6">
      {Cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
