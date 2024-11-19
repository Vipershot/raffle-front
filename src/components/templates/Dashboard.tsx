import { IItemCarousel } from "../../interface/ICarousel"
import dataTest from "../../utils/items"
import AppCarousel from "../organims/AppCarousel/AppCarousel"
import { ContentDashboard } from "../organims/ContentDashboard/ContentDashboard"

export const Dashboard = () => {
  // Asigna el valor de dataTest a una nueva variable con el tipo correcto
  const typedDataTest: IItemCarousel[] = dataTest;

  return (
    <div>
      <AppCarousel data={typedDataTest}/>
      <ContentDashboard/>
    </div>
  )
}
