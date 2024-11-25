import { useState } from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
  let [bgcolor, setBgColor] = useState("#FF0000");
  const options = [
    {
      color: "red",
      value: "#FF0000",
    },
    {
      color: "yellow",
      value: "#FFFF00",
    },
    {
      color: "pink",
      value: "#FFC0CB",
    },
    {
      color: "blue",
      value: "#0000FF",
    },
    {
      color: "green",
      value: "#00FF00",
    },
    {
      color: "orange",
      value: "#FFA500",
    },
    {
      color: "purple",
      value: "#800080",
    },
    {
      color: "cyan",
      value: "#00FFFF",
    },
    {
      color: "magenta",
      value: "#FF00FF",
    },
    {
      color: "lime",
      value: "#BFFF00",
    },
    {
      color: "teal",
      value: "#008080",
    },
    {
      color: "brown",
      value: "#A52A2A",
    },
    {
      color: "black",
      value: "#000000",
    },
    {
      color: "white",
      value: "#FFFFFF",
    },
    {
      color: "gray",
      value: "#808080",
    },
  ];

  return (
    <>
      <div
        style={{ backgroundColor: bgcolor }}
        className="w-screen h-screen flex items-center justify-center m-0"
      >
        <Container
          options={options}
          onColorChange={(value) => {
            setBgColor(value);
          }}
        />
      </div>
    </>
  );
}

export default App;
