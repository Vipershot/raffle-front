interface Props{
    description:string
    tickets: number
    price:number
    dateEnd:string
}
export const CardProduct = ({description, tickets,price,dateEnd}:Props) => {
    const validateAvailable = () =>{
       if(tickets < 20) 
            return 'Full disponible' 
       if(tickets < 50) 
        return 'Disponible' 
       if(tickets < 71) 
        return 'Quedan pocos disponibles' 
    }
    return (
    <div className="">
        <h2 className="text-sm text-primary">{description}</h2>
        <div className="flex flex-col">
            <h3 className="text-xs">Cantidad:<b className="text-lg">{tickets}</b></h3>
            <h3 className="text-xs">USD$<b className="text-lg">{price}</b></h3>
            <h3 className="text-xs">Hasta <b className="text-lg">{dateEnd}</b></h3>
            <h3>{validateAvailable()}</h3>
        </div>
    </div>
  )
}
