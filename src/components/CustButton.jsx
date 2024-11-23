function CustButton({ color, value="100", onclick }) {
  return (
    <>
    <button className="text-white font-bold py-2 px-4 rounded hover:bg-blue-700 m-2" style={{ backgroundColor: value }} onClick={()=>onclick(value)}>
      {color}
    </button></>
    
  );
}
export default CustButton;
