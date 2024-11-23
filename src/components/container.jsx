import CustButton from "./CustButton";
function Container({ options, onColorChange }) {
  const backgroundColor = "rgb(34, 193, 195)";
  return (
    <>
      <div style={{ backgroundColor }} className="">
        {options.map((option) => (
          <CustButton
            color={option.color}
            value={option.value}
            onclick={() => {
              onColorChange(option.value);
            }}
          />
        ))}
      </div>
    </>
  );
}
export default Container;
