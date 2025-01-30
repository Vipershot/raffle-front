
export const Legend = () => {
  return (
    <div className="w-full pl-2">
    <h4 className="font-bold text-dark text-sm md:text-md">
      Seleccion de tickets:
    </h4>
    <ul className="flex gap-1 mt-1 text-dark text-sm md:text-md">
      <li className="flex items-center gap-1">
        <span
          className="w-4 h-4 bg-gray-300 border rounded-full inline-block"
          style={{ border: "1px solid #ccc" }}
        ></span>
        <span>No disponibles</span>
      </li>
      <li className="flex items-center gap-1">
        <span
          className="w-4 h-4 bg-secondary border rounded-full inline-block"
        ></span>
        <span>Seleccionados</span>
      </li>
      <li className="flex items-center gap-1">
        <span
          className="w-4 h-4 bg-white border rounded-full inline-block"
          style={{ border: "1px solid #ccc" }}
        ></span>
        <span>Disponibles</span>
      </li>
    </ul>
  </div>
  )
}
