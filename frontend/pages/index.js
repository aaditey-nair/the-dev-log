import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState("server is not running");

  const getData = () => {
    axios.get(`http://localhost:5000/`).then((res) => {
      const response = res.data;
      setData(response.response);
    });
  };

  return (
    <main className="bg-dark min-h-screen">
      <h1 className="text-3xl text-primary">{data}</h1>
      <button className="p-2 bg-secondary" onClick={() => getData()}>
        Check Server Status
      </button>
    </main>
  );
}
