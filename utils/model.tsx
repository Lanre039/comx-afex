import { nanoid } from "nanoid";

export const board = ["X-Traded", "OTC", "FI", "Derivatives"];
export const products = [
  "All",
  "SMAZ",
  "SBBS",
  "SPRL",
  "SGNG",
  "SSGM",
  "FETC",
  "SCOC",
];

export const orderColumn = [
  {
    id: nanoid(),
    name: "Products",
    accessor: "security_code",
  },
  {
    id: nanoid(),
    name: "Quantity",
    accessor: "matched_qty",
  },
];

export const tradeLogsColumn = [
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

export const newData = Array(15).fill({
  mass: "Soybeans (SSBS)",
  atomic: "2003",
  position: "1736.92",
});

export const newData2 = Array(20).fill({
  security: "Soybeans (SSBS)",
  board: "X-Traded",
  orderType: "Buy",
  matchedPrice: "1792.65",
  quantity: "9265",
  date: "17 Oct, 2020",
  time: "07:38",
});
