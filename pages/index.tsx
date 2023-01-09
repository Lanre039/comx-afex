import { useState } from "react";
import { nanoid } from "nanoid";
import { useMantineColorScheme } from "@mantine/core";
import styles from "../styles/Home.module.css";
import Head from "../components/Head";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import Table from "../components/Table";
import Footer from "../components/Footer";
import useSocket from "../hooks/useSocket";
import * as model from "../utils/model";

export default function Home() {
  const theme = useMantineColorScheme();
  const [checked, setChecked] = useState(true);
  const { clientPositions, orders } = useSocket();
  const [activeBoard, setActiveBoard] = useState(model.board[0]);
  const [activeProduct, setActiveProduct] = useState(model.products[0]);
  console.log({ clientPositions, orders });

  const buyOrderColumn = [
    ...model.orderColumn,
    {
      id: nanoid(),
      name: "Bid Price",
      accessor: "position",
      Cell: (data: any) => (
        <div className="w-fit flex items-center">
          <p className="mr-5 text-[#52965E]">{data?.position}</p>
          <p className={styles.buyBtn}>Buy</p>
        </div>
      ),
    },
  ];
  const sellOrderColumn = [
    ...model.orderColumn,
    {
      id: nanoid(),
      name: "Bid Price",
      accessor: "order_price",
      Cell: (data: any) => (
        <div className="w-fit flex  items-center">
          <p className="mr-5 text-[#E55541]">{data?.position}</p>
          <p className={styles.sellBtn}>Sell</p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head title="ComX" />
      <main className={styles.main}>
        <Nav
          {...{ checked, setChecked, theme, data: clientPositions as any }}
        />
        <div className="flex h-full w-full">
          <SideBar />
          <div className="flex-grow">
            <div className="bg-white mt-1 mx-2 p-4">
              <div className="h-fit flex items-center mb-3">
                <h3 className="text-sm font-medium text-[#1E1E1E] ml-4">
                  Board
                </h3>
                {model.board.map((item) => (
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
                {model.products.map((item) => (
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
                  <Table data={model.newData} column={buyOrderColumn} />
                </div>
                <div className="bg-white w-full">
                  <Table data={model.newData} column={sellOrderColumn} />
                </div>
              </div>
            </div>
            <div className="mt-2 mx-2">
              <div className="bg-white w-full mr-2">
                <p className="p-3 text-xs text-[#778CA2] font-medium">
                  TRADE LOG
                </p>
                <Table data={model.newData2} column={model.tradeLogsColumn} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
