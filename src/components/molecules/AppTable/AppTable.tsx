interface Ticket {
  imagenHeader?: string;
  tituloHeader: string;
  numeroTicket: number;
  precio: number;
  fechaCompra: string;
  fechaSorteo: string;
  horaSorteo: string;

  tituloBody: string;
}

export const AppTable = () => {
  const tickets: Ticket[] = [
    {
      imagenHeader:
        "https://www.lg.com/cac/images/tv-barra-de-sonido/md07601761/gallery/DZ-1.jpg",
      tituloHeader:
        "Acer 126 cm (50 inches) V Series 4K Ultra HD Smart QLED Google TV AR50GR2851VQD (Black)",
      numeroTicket: 802,
      precio: 10.99,
      fechaCompra: "10/03/2024",
      fechaSorteo: "20/03/2024",
      horaSorteo: "8:00PM",

      tituloBody: "802",
    },
    {
      imagenHeader:
        "https://www.lg.com/cac/images/tv-barra-de-sonido/md07601761/gallery/DZ-1.jpg",
      tituloHeader:
        "Acer 126 cm (50 inches) V Series 4K Ultra HD Smart QLED Google TV AR50GR2851VQD (Black)",
      numeroTicket: 870,
      precio: 10.99,
      fechaCompra: "10/03/2024",
      fechaSorteo: "20/03/2024",
      horaSorteo: "8:00PM",

      tituloBody: "803",
    },
  ];

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
                  Nº Ticket
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
              {tickets.map((ticket) => (
                <tr
                  key={ticket.numeroTicket}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-3 py-4">
                    <div className="relative w-16 h-16">
                      <img
                        src={ticket.imagenHeader}
                        className="object-cover rounded-md"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {ticket.tituloHeader.substring(0, 25)}
                    {ticket.tituloHeader.length > 25 && "..."}
                  </td>
                  <td className="px-6 py-4">{ticket.numeroTicket}</td>
                  <td className="px-6 py-4">${ticket.precio.toFixed(2)}</td>
                  <td className="px-6 py-4">{ticket.fechaCompra}</td>
                  <td className="px-6 py-4">{ticket.fechaSorteo}</td>
                  <td className="px-6 py-4">{ticket.horaSorteo}</td>

                  <div
                    className={`border mt-6 rounded-full font-bold ${
                      ticket.numeroTicket === parseInt(ticket.tituloBody)
                        ? "bg-info text-white"
                        : "bg-light text-dark"
                    }`}
                  >
                    <td className="px-2 py-3 flex justify-center">
                      {ticket.tituloBody}
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
        {tickets.map((ticket) => (
          <div
            key={ticket.numeroTicket}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-2"
          >
            <img
              src={ticket.imagenHeader}
              alt={ticket.tituloHeader}
              className="w-full h-55 object-cover"
            />
            <div className="p-6">
              <h3 className="text-sm font-semibold mb-2">
                {ticket.tituloHeader.substring(0, 35)}
                {ticket.tituloHeader.length > 35 && "..."}
              </h3>
              <p className="mb-2 text-dark">
                Nº Ticket: <strong>{ticket.numeroTicket}</strong>
              </p>
              <p className="mb-2 text-dark">
                Precio: <strong>${ticket.precio.toFixed(2)}</strong>
              </p>
              <p className="text-dark">
                Fecha de Compra: <strong>{ticket.fechaCompra}</strong>
              </p>
              <p className="text-dark">
                Fecha del Sorteo: <strong>{ticket.fechaSorteo}</strong>
              </p>
              <p className="text-dark">
                Hora del Sorteo: <strong>{ticket.horaSorteo}</strong>
              </p>
              <div
                className={`border mt-6 rounded-full  ${
                  ticket.numeroTicket === parseInt(ticket.tituloBody)
                    ? "bg-info text-white"
                    : "bg-light text-dark"
                }`}
              >
                <span className="px-4 py-2 flex justify-center text-dark">
                  <strong>{ticket.tituloBody}</strong>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
