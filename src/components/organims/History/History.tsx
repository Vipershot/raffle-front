import { TitleText } from "../../atoms/TitleText/TitleText";
import { HiArrowPath } from "react-icons/hi2";
import { AppTable } from "../../molecules/AppTable/AppTable";
import { FilterHistory } from "../../molecules/FilterHistory/FilterHistory";

export default function History() {
  return (
    <div>
        <div className="flex items-center justify-between mt-3 p-2">
        <div className="flex gap-2 items-center cursor-pointer">
          <HiArrowPath
            className="text-lg text-info cursor-pointer hover:text-primary"
            size={25}
            
          />
          <TitleText text="Historial compra de tickets" color="dark" size="sm" />
        </div>
        
       <div>
       <FilterHistory/>
       
       </div>
       
      </div>
      <AppTable/>
    </div>
  )
}
