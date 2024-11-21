import { useState } from "react";
import createNumbersArray from "../../../utils/testTickets";

const Tickets = () => {
  const numbers = createNumbersArray();
  const numbersState = numbers.map(item=> ({state:false,number:item}))
  const [numberss, setNumberss] = useState(numbersState)

  const handleChecked = (selectedNumber: number) => {
    // Actualizar el estado del checkbox seleccionado
    const updatedNumbers = numberss.map((item) =>
      item.number === selectedNumber
        ? { ...item, state: !item.state } // Cambiar el estado del checkbox
        : item
    );
    setNumberss(updatedNumbers); // Actualizar el estado
  };
  return (
    <div className="flex flex-wrap gap-2" >
      {numberss.map((data) => (
     <label htmlFor={`ticket-${data.number}`} style={{ position: "relative", display: "inline-block", width: "50px", height: "50px" }}>
     <input 
checked={data.state}
onChange={()=> handleChecked(data.number)}
     id={`ticket-${data}`}    
     style={{
        appearance:"none",
        backgroundColor: data.state ? "#007bff" : "#fff",
          width: "100%",
          height: "100%",
          border: "2px solid #000",
          borderRadius: "4px",
          cursor: "pointer",
        }} type="checkbox" value={data.number} />
     <span     style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "14px",
          pointerEvents: "none", // El texto no debe interferir con el clic
        }}>{data.number}</span>
   </label>
      ))}
    </div>
  );
};

export default Tickets;
