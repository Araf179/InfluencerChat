import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import "../styles/App.css";

const UserList: React.FC = () => {
  const [qrCode, setQrcode] = useState(
    "https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&prefix=on&fiat=USD&amount=250&address=1NR8ojcetNq2Lab2UTABR6E8YBiisyBYEf"
  );
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [minutes, seconds]);

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-3xl">Pay to address:</h1>
          <br />
          <p className="bg-slate-200">1NR8ojcetNq2Lab2UTABR6E8YBiisyBYEf</p>
          <img src={qrCode} alt="" />
          <p className="relative left-[45%]">{`${minutes} : ${seconds}`}</p>
          <br />
          <div className="relative left-[25%]">
            <p>Found Transaction please </p>
            <p>wait 10 - 60m for</p>
            <p>transaction to confirm</p>
          </div>
          <br />
          {minutes === 0 && seconds === 0 ? (
            <button className="relative left-[33%]" disabled={true}>
              Time ran out
            </button>
          ) : (
            <button className="relative left-[25%] bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Finished Paying
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
