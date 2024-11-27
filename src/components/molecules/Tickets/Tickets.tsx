import { useState } from "react";
import createNumbersArray from "../../../utils/testTickets";

interface Props {
  onClick: (number: number) => void;
  ticketsBuy: number[] | undefined;
}

const Tickets = ({ onClick, ticketsBuy }: Props) => {
  const numbers = createNumbersArray();
  const numbersState = numbers.map((item) => ({ state: false, number: item }));
  const [numberss, setNumberss] = useState(numbersState);
  const handleChecked = (selectedNumber: number) => {
    // Actualizar el estado del checkbox seleccionado
    const updatedNumbers = numberss.map((item) =>
      item.number === selectedNumber
        ? { ...item, state: !item.state } // Cambiar el estado del checkbox
        : item
    );
    onClick(selectedNumber);
    setNumberss(updatedNumbers); // Actualizar el estado
  };
  return (
    <div className="flex flex-wrap gap-2">
      {numberss.map((data, i) => {
        if (ticketsBuy?.includes(data.number)) {
          return (
            <label
              key={i}
              htmlFor={`ticket-${data.number}`}
              className={`bg-disabled`}
              style={{
                position: "relative",
                display: "inline-block",
                width: "50px",
                height: "50px",
                borderRadius: "5px",
              }}
            >
              <input
                disabled={true}
                style={{
                  appearance: "none",
                  width: "100%",
                  height: "100%",
                  border: "2px solid #ccc",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                type="checkbox"
              />
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "14px",
                  pointerEvents: "none", // El texto no debe interferir con el clic
                }}
              >
                {data.number}
              </span>
            </label>
          );
        } else {
          return (
            <label
              key={i}
              htmlFor={`ticket-${data.number}`}
              className={`${
                data.state ? "text-white" : "bg-dark"
              } hover:bg-black`}
              style={{
                position: "relative",
                display: "inline-block",
                width: "50px",
                height: "50px",
                borderRadius: "5px",
              }}
            >
              <input
                checked={data.state}
                onChange={() => handleChecked(data.number)}
                className={`${data.state ? "bg-info" : "bg-white"} `}
                id={`ticket-${data}`}
                style={{
                  appearance: "none",
                  width: "100%",
                  height: "100%",
                  border: "2px solid #ccc",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                type="checkbox"
                value={data.number}
              />
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "14px",
                  pointerEvents: "none", // El texto no debe interferir con el clic
                }}
              >
                {data.number}
              </span>
            </label>
          );
        }
      })}
    </div>
  );
};

export default Tickets;
