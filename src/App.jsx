import { useState } from "react";
import "./App.css";
import Container from "./components/container";

function App() {
  const styles = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "blue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };

  const options = [
    {
      color: "red",
      value: "",
    },
    {
      color: "yelow",
      value: "#FF0000",
    },
    {
      color: "pink",
      value: "#FF0000",
    },
    {
      color: "blue",
      value: "#FF0000",
    },
  ];
  return (
    <>
      <div className="w-screen h-screen bg-blue-500 flex items-center justify-center m-0">
        <Container options={options} />
      </div>
    </>
  );
}

export default App;
