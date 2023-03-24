import { useContext } from "react";
import { GlobalContext } from "../App";

type RowProps = {
  label: string;
  value: number;
};
export const Row = ({ label, value }: RowProps) => {
  const { appState, setAppState } = useContext(GlobalContext);
  console.log("ABIR APP STATE", appState);

  const onChange = (checked: boolean) => {
    if (checked)
      setAppState?.([
        ...appState,
        {
          name: label,
          price: value
        }
      ]);
    if (!checked) {
      setAppState(appState.filter((item) => item.name !== label));
    }
  };

  return (
    <div
      style={{
        margin: "8px 2px 8px 2px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <label htmlFor={label}>{label}</label>
      <input
        style={{ height: "20px", width: "20px" }}
        type="checkbox"
        id={label}
        name={label}
        value={value}
        onChange={(e) => {
          onChange(!!e.target.checked);
        }}
      />
    </div>
  );
};
