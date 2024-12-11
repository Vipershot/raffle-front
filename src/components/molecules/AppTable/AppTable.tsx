import { Link } from "react-router-dom";
import { IDetailBuyTicket } from "../../../interface/awards";
import { getDayComplete, getHour } from "../../../utils/date";
import { Loader } from "../../atoms/Loader/Loader";

interface Props {
  tickets: IDetailBuyTicket[]
  loading:boolean
}

export const AppTable = ({tickets, loading}:Props) => {

  return (
    <>
      <div className=" p-2 hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left  text-gray-500">
            <thead className=" text-info font-bold  bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Imagen
                </th>
                <th scope="col" className="px-6 py-3">
                  Título
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha de Compra
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha del Sorteo
                </th>
                <th scope="col" className="px-6 py-3">
                  Hora del Sorteo
                </th>
                <th scope="col" className="px-6 py-3">
                  Ticket Ganador
                </th>
              </tr>
            </thead>
            <tbody>
           {loading ? <tr > <td ></td> <td ></td>  <td ></td>   <td className="flex w-full justify-center" colSpan={2}><Loader/></td></tr>  : <>
              {tickets.map((ticket, i) => (
                <tr
                  key={i}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-3 py-4">
                    <div className="relative w-16 h-16">
                      <img
                        src={ticket.cover}
                        className="object-cover rounded-md"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <Link to={`/award/${ticket.id}`} className="hover:text-primary">
                    {ticket.title.substring(0, 25)}
                    {ticket.title.length > 25 && "..."}
                    </Link>
                  
                  </td>
                  <td className="px-6 py-4">${ticket.ticketPrice}</td>
                  <td className="px-6 py-4">{getDayComplete(ticket.endDate)}</td>
                  <td className="px-6 py-4">{getDayComplete(ticket.endDate)}</td>
                  <td className="px-6 py-4">{getHour(ticket.endDate)}</td>

                  <div>
                    <td className="px-2 py-3">
                      {ticket.description.substring(0, 40)}
                    </td>
                  </div>
                </tr>
              ))}
            </>} 
            </tbody>
          </table>
        </div>
      </div>
      {/* estas card serian para celular */}
      {
        loading ? <Loader/> :  <div className="container p-6 md:hidden">
        {tickets.map((ticket, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-2"
          >
            <img
              src={ticket.cover}
              alt={ticket.title}
              className="w-full h-55 object-cover"
            />
            <div className="p-6">
              <h3 className="text-sm font-semibold mb-2">
                {ticket.title.substring(0, 35)}
                {ticket.title.length > 35 && "..."}
              </h3>

              <p className="mb-2 text-dark">
                Precio: <strong>${ticket.ticketPrice}</strong>
              </p>
              <p className="text-dark">
                Fecha de Compra: <strong>{getDayComplete(ticket.endDate)}</strong>
              </p>
              <p className="text-dark">
                Fecha del Sorteo: <strong>{getDayComplete(ticket.endDate)}</strong>
              </p>
              <p className="text-dark">
                Hora del Sorteo: <strong>{getHour(ticket.endDate)}</strong>
              </p>
              <div>
                <span className="px-4 py-2 flex justify-center text-dark">
                  <strong>{ticket.description.substring(0, 40)}</strong>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      }
    
    </>
  );
};
