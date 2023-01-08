import { Input } from "@mantine/core";
import { useState } from "react";
import * as Svg from "./Svgpack";
import { SearchNormal1 } from "iconsax-react";

const SideBar = () => {
  const [active, setActive] = useState(iconList[1].name);
  const [activeSub, setActiveSub] = useState(subList[1].name);

  return (
    <section className="h-full w-fit flex justify-center">
      <aside className="bg-white">
        <ul>
          {iconList.map(({ name, Icon }) => (
            <li
              key={Math.random()}
              className="flex flex-col items-center cursor-pointer my-10 mx-1 py-1 px-3 hover:bg-[#F8FAFB]"
              onClick={() => setActive(name)}
            >
              {<Icon active={active === name} />}
              <p
                className={`text-xs font-medium mt-3 ${
                  active === name ? "text-[red]" : "text-[#1E1E1E]"
                }`}
              >
                {name}
              </p>
            </li>
          ))}
        </ul>
      </aside>
      <div className="h-fit bg-white mt-1 ml-2">
        <div className="m-2 bg-[#F8FAFB]">
          <Input
            placeholder="Search"
            icon={<SearchNormal1 size="12" color="#92929D" />}
            className="bg-[#F8FAFB] rounded-sm border border-[#D6D6D6] "
          />
        </div>
        <ul>
          {subList.map(({ name, Icon }) => (
            <li
              key={Math.random()}
              className="flex items-center cursor-pointer my-4 mx-1 py-[10.5px] px-6 hover:bg-[#F8FAFB]"
              onClick={() => setActiveSub(name)}
            >
              {<Icon />}
              <p
                className={`text-sm font-medium ml-3 ${
                  activeSub === name ? "text-[red]" : "text-[#1E1E1E]"
                }`}
              >
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const iconList = [
  {
    name: "Overview",
    Icon: Svg.OverviewIcon,
  },
  {
    name: "Market",
    Icon: Svg.MarketIcon,
  },
  {
    name: "Portfolio",
    Icon: Svg.PortfolioIcon,
  },
  {
    name: "Community",
    Icon: Svg.CommunityIcon,
  },
  {
    name: "Reports",
    Icon: Svg.ReportIcon,
  },
  {
    name: "Settings",
    Icon: Svg.SettingsIcon,
  },
];
const subList = [
  {
    name: "Product View",
    Icon: Svg.ProductViewIcon,
  },
  {
    name: "Order Book",
    Icon: Svg.OrderBookIcon,
  },
  {
    name: "Price History",
    Icon: Svg.PriceHistoryIcon,
  },
  {
    name: "Open Orders",
    Icon: Svg.OpenOrdersIcon,
  },
  {
    name: "Closed Trades",
    Icon: Svg.ClosedTradesIcon,
  },
  {
    name: "Cancelled Trades",
    Icon: Svg.CancelledTradesIcon,
  },
];

export default SideBar;
