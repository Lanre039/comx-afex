import { useMemo, useState } from "react";
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

  const data = useMemo(() => {
    return {
      buy: Array.isArray(orders?.messages)
        ? orders?.messages.filter((item) => item.order_type === "Buy")
        : [],
      sell: Array.isArray(orders?.messages)
        ? orders?.messages.filter((item) => item.order_type === "Sell")
        : [],
    };
  }, [orders]);

  const [boards, products] = useMemo(() => {
    let tempA: any = {};
    let tempB: any = {};
    const messages = Array.isArray(orders?.messages) ? orders?.messages : [];
    messages.forEach((message) => {
      if (!tempA[message.board_type]) tempA[message.board_type] = true;
      if (!tempB[message.security_code]) tempB[message.security_code] = true;
    });
    tempA = Object.keys(tempA);
    tempB = ["All", ...Object.keys(tempB)];
    setActiveBoard(tempA[0]);
    setActiveProduct(tempB[0]);
    return [tempA, tempB];
  }, [orders]);

  const [buy, sell] = useMemo(() => {
    let newBuy = data.buy;
    let newSell = data.sell;
    newBuy = newBuy.filter((item) => item.board_type === activeBoard);
    newSell = newSell.filter((item) => item.board_type === activeBoard);
    if (activeProduct !== "All") {
      newBuy = newBuy.filter((item) => item.security_code === activeProduct);
      newSell = newSell.filter((item) => item.security_code === activeProduct);
    }
    return [newBuy, newSell];
  }, [data, activeBoard, activeProduct]);

  const buyOrderColumn = [
    ...model.orderColumn,
    {
      id: nanoid(),
      name: "Bid Price",
      accessor: "order_price",
      Cell: (data: any) => (
        <div className="w-full max-w-[160px] flex justify-between items-center">
          <p className=" text-[#52965E]">{data?.order_price}</p>
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
        <div className="w-full max-w-[160px] flex justify-between items-center">
          <p className="text-[#E55541]">{data?.order_price}</p>
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
                {/* {model.board.map((item) => ( */}
                {boards.map((item: any) => (
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
                {/* {model.products.map((item) => ( */}
                {products.map((item: any) => (
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
                  {/* <Table data={data.buy} column={buyOrderColumn} /> */}
                  <Table data={buy} column={buyOrderColumn} />
                </div>
                <div className="bg-white w-full">
                  {/* <Table data={data.sell} column={sellOrderColumn} /> */}
                  <Table data={sell} column={sellOrderColumn} />
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
