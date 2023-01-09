import { useEffect, useState } from "react";
import { encryption, postRequest } from "../services/httpService";

const useSocket = () => {
  const [clientPositions, setClientPositions] = useState<Record<string, any>>(
    {}
  );
  const [orders, setOrders] = useState<Record<string, any>>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = {
      //   email: "sa.abdulgafar@gmail.com",
      //   password: "password",
      //   auth_type: "password",
      email: "rajilat1000@gmail.com",
      password: "password",
      first_name: "Lateef",
      last_name: "Raji",
      auth_type: "password",
      referral_code: "",
      phone: "+2348105757339",
      occupation: "Farmer",
    };
    const res = await postRequest({ url: "login", data });
    console.log({ res });

    const clientPositionSocket = new WebSocket(
      process.env.NEXT_PUBLIC_WS_CLIENT ?? ""
    );
    const tradeOrderSocket = new WebSocket(
      process.env.NEXT_PUBLIC_WS_TRADES ?? ""
    );
    clientPositionSocket.onopen = (res) => {
      console.log(res);
    };
    clientPositionSocket.onmessage = (res) => {
      if (res.data) {
        let data = JSON.parse(res.data);
        encryption.decrypt(data);
        encryption.decrypt(data?.wallets);
        setClientPositions(data);
      }
    };
    tradeOrderSocket.onmessage = (res) => {
      if (res.data) {
        let data = JSON.parse(res.data);
        encryption.decrypt(data);
        encryption.decrypt(data?.messages);
        data?.messages.forEach((message: any) => {
          encryption.decrypt(message);
          encryption.decrypt(message?.client);
          encryption.decrypt(message?.client?.client_settings);
        });
        setOrders(data);
      }
    };
  };

  return {
    clientPositions: {
      availableBalance: clientPositions?.wallets?.available_balance ?? 0.0,
      loanBalance: clientPositions?.wallets?.loan_repayment_balance ?? 0.0,
      securityBalance: 58372634.24,
    },
    orders: {
      buy: Array.isArray(orders?.messages)
        ? orders?.messages.filter((item) => item.order_type === "Buy")
        : [],
      sell: Array.isArray(orders?.messages)
        ? orders?.messages.filter((item) => item.order_type === "Sell")
        : [],
    },
  };
};

export default useSocket;
