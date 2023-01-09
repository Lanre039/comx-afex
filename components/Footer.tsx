import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <div className="bg-white w-full absolute bottom-0">
      <div className="flex justify-between item-center">
        <p className="whitespace-nowrap text-lg font-medium text-white bg-black px-5 pt-5 mb-[2px]">
          LIVE MARKET
        </p>
        <Marquee>
          {lists.map((list) => (
            <div key={Math.random()} className="my-3 mx-10">
              <p className="text-sm font-medium text-black">{list.name}</p>
              <p className="text-sm font-normal text-black">{list.price}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const lists = [
  {
    name: "Soybean (SBBS)",
    price: "₦30,834.59",
  },
  {
    name: "Sorghum (SSGM)",
    price: "₦30,834.59",
  },
  {
    name: "Soybean (SBBS)",
    price: "₦30,834.59",
  },
  {
    name: "Maize (SMAZ)",
    price: "₦30,834.59",
  },
  {
    name: "Paddy Rice (SPRL)",
    price: "₦30,834.59",
  },
  {
    name: "Cocoa (SCOC)",
    price: "₦30,834.59",
  },
  {
    name: "Soybean (SBBS)",
    price: "₦30,834.59",
  },
];

export default Footer;
