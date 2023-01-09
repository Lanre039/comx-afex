import { useEffect, useState } from "react";
import { encryption } from "../services/httpService";

const useSocket = () => {
  const [clientPositions, setClientPositions] = useState<Record<string, any>>(
    {}
  );
  const [orders, setOrders] = useState<Record<string, any>>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const clientPositionSocket = new WebSocket(
      process.env.NEXT_PUBLIC_WS_CLIENT ?? ""
    );
    const tradeOrderSocket = new WebSocket(
      process.env.NEXT_PUBLIC_WS_TRADES ?? ""
    );
    clientPositionSocket.onclose = (res) => {
      alert("Connection closed by webscoket");
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
      securityBalance: 0.0,
    },
    orders,
  };
};

export default useSocket;
