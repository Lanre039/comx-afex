import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { postRequest, encryption } from "../services/httpService";
import Head from "../components/Head";
import { Button, useMantineTheme } from "@mantine/core";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import Table from "../components/Table";
import Footer from "../components/Footer";

const board = ["X-Traded", "OTC", "FI", "Derivatives"];
const products = [
  "All",
  "SMAZ",
  "SBBS",
  "SPRL",
  "SGNG",
  "SSGM",
  "FETC",
  "SCOC",
];

export default function Home() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);
  const [activeBoard, setActiveBoard] = useState(board[0]);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const clientPositionSocket = new WebSocket(
      "wss://comx-sand-api.afexnigeria.com/stream/client-positions?cid=9900153747"
    );
    const tradeOrderSocket = new WebSocket(
      "wss://comx-sand-api.afexnigeria.com/stream/trades"
    );
    clientPositionSocket.onmessage = (res) => {
      if (res.data) {
        let data = JSON.parse(res.data);
        encryption.dencrypt(data);
        encryption.dencrypt(data?.wallets);
        console.log("client", data);
      }
    };
    tradeOrderSocket.onmessage = (res) => {
      if (res.data) {
        let data = JSON.parse(res.data);
        encryption.dencrypt(data);
        encryption.dencrypt(data?.messages);
        data?.messages.forEach((message: any) => {
          encryption.dencrypt(message);
          encryption.dencrypt(message?.client);
          encryption.dencrypt(message?.client?.client_settings);
        });
        console.log("order", data);
      }
    };
  };

  return (
    <>
      <Head title="ComX" />
      <main className={styles.main}>
        <Nav {...{ checked, setChecked, theme }} />
        <div className="flex h-full w-full">
          <SideBar />
          <div className="flex-grow">
            <div className="bg-white mt-1 mx-2 p-4">
              <div className="h-fit flex items-center mb-3">
                <h3 className="text-sm font-medium text-[#1E1E1E] ml-4">
                  Board
                </h3>
                {board.map((item) => (
                  <h3
                    key={Math.random()}
                    className={`rounded-[18px] text-sm font-medium py-3 px-5 mx-3 cursor-pointer ${
                      activeBoard === item
                        ? "bg-[#D71E0E] text-white"
                        : "bg-[#F8FAFB] text-[#1E1E1E]"
                    } `}
                    onClick={() => setActiveBoard(item)}
                  >
                    {item}
                  </h3>
                ))}
              </div>
              <div className="h-fit flex items-center">
                <h3 className="text-sm font-medium text-[#1E1E1E]">Products</h3>
                {products.map((item) => (
                  <h3
                    key={Math.random()}
                    className={`rounded-[18px] text-sm font-medium  py-3 px-5 mx-3 cursor-pointer ${
                      activeProduct === item
                        ? "bg-[#D71E0E] text-white"
                        : "bg-[#F8FAFB] text-[#1E1E1E]"
                    } `}
                    onClick={() => setActiveProduct(item)}
                  >
                    {item}
                  </h3>
                ))}
              </div>
            </div>
            <div className="mt-2 mx-2">
              <div className="flex">
                <div className="bg-white w-full mr-2">
                  <Table
                    data={newData}
                    column={tableColumn}
                    sortedData={newData}
                  />
                </div>
                <div className="bg-white w-full">
                  <Table
                    data={newData}
                    column={tableColumn}
                    sortedData={newData}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 mx-2">
              <div className="bg-white w-full mr-2">
                <p className="p-3 text-xs text-[#778CA2] font-medium">
                  TRADE LOG
                </p>
                <Table
                  data={newData2}
                  column={tableColumn2}
                  sortedData={newData2}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

const tableColumn = [
  {
    id: 1,
    name: "Products",
    accessor: "mass",
  },
  {
    id: 2,
    name: "Quantity",
    accessor: "atomic",
  },
  {
    id: 3,
    name: "Bid Price",
    accessor: "position",
    Cell: (data: any) => (
      <div className="w-fit flex  items-center">
        <p className="mr-5">{data?.position}</p>
        <p className="border-[0.8px] rounded-sm border-[#52965E] px-4 text-sm font-medium text-[#52965E] cursor-pointer">
          Buy
        </p>
      </div>
    ),
  },
];

const tableColumn2 = [
  {
    id: 1,
    name: "Security",
    accessor: "security",
  },
  {
    id: 2,
    name: "Board",
    accessor: "board",
  },
  {
    id: 3,
    name: "Order Type",
    accessor: "orderType",
  },
  {
    id: 4,
    name: "Matched Price",
    accessor: "matchedPrice",
  },
  {
    id: 5,
    name: "Quantity",
    accessor: "quantity",
  },
  {
    id: 6,
    name: "Date",
    accessor: "date",
  },
  {
    id: 7,
    name: "Time",
    accessor: "time",
  },
];

const newData = Array(15).fill({
  mass: "Soybeans (SSBS)",
  atomic: "2003",
  position: "1736.92",
});

const newData2 = Array(20).fill({
  security: "Soybeans (SSBS)",
  board: "X-Traded",
  orderType: "Buy",
  matchedPrice: "1792.65",
  quantity: "9265",
  date: "17 Oct, 2020",
  time: "07:38",
});
