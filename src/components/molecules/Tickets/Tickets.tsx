
interface Props {
  onClick: (number: number) => void;
  ticketsBuy: number[] | undefined;
  totalTickets: {
    number:number
    state: boolean
  }[]
  handleTickets: (item: {
    number: number;
    state: boolean;
}[]) => void
}

const Tickets = ({ onClick, ticketsBuy, totalTickets,handleTickets  }: Props) => {

  const handleChecked = (selectedNumber: number) => {
    const updatedNumbers = totalTickets.map((item) =>
      item.number === selectedNumber
        ? { ...item, state: !item.state } 
        : item
    );
    onClick(selectedNumber);
    handleTickets(updatedNumbers)
  };
  return (
  <>
    <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-18 gap-2">
       
       {totalTickets.map((data, i) => {
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
                   pointerEvents: "none", 
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
                   pointerEvents: "none", 
                 }}
               >
                 {data.number}
               </span>
             </label>
           );
         }
       })}
     </div>
  </>
  );
};

export default Tickets;
