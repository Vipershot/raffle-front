import { IDetailBuyTicket } from "../../../interface/awards";
import { getDayComplete, getHour } from "../../../utils/date";

interface Props {
  tickets: IDetailBuyTicket[]
}

export const AppTable = ({tickets}:Props) => {

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
                    {ticket.title.substring(0, 25)}
                    {ticket.title.length > 25 && "..."}
                  </td>
                  <td className="px-6 py-4">${ticket.ticketPrice}</td>
                  <td className="px-6 py-4">{getDayComplete(ticket.endDate)}</td>
                  <td className="px-6 py-4">{getDayComplete(ticket.endDate)}</td>
                  <td className="px-6 py-4">{getHour(ticket.endDate)}</td>

                  <div
                    // className={`border mt-6 rounded-full font-bold ${
                    //   ticket.numeroTicket === parseInt(ticket.tituloBody)
                    //     ? "bg-info text-white"
                    //     : "bg-light text-dark"
                    // }`}
                  >
                    <td className="px-2 py-3">
                      {ticket.description.substring(0, 40)}
                    </td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* estas card serian para celular */}
      <div className="container p-6 md:hidden">
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
              <div
                // className={`border mt-6 rounded-full  ${
                //   ticket.numeroTicket === parseInt(ticket.tituloBody)
                //     ? "bg-info text-white"
                //     : "bg-light text-dark"
                // }`}
              >
                <span className="px-4 py-2 flex justify-center text-dark">
                  <strong>{ticket.description.substring(0, 40)}</strong>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
