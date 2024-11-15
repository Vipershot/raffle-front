import { IItemCarousel } from "../../../interface/ICarousel"
import { AppButton } from "../../atoms/AppButton/AppButton"

const ItemCarousel = ({title, description, date, imgUrl}:IItemCarousel) => {
    return (<>
        <section className="flex justify-center">
            <div className="flex relative flex-col bg-center w-[500px]  h-[500px]" style={{backgroundImage:`url(${imgUrl})`, backgroundSize:'100%', backgroundRepeat:'no-repeat'}}>
                <div className="flex flex-col gap-2 my-5 p-3 rounded w-[200px]" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', backgroundBlendMode:'color'}}>
                  <h1 className="text-dark font-bold text-xl">{title}</h1>
                  <h2 className="text-dark">{description}</h2>
                  <h3 className="text-dark">{date}</h3>
               
                </div>
                <div className="flex flex-col  justify-center absolute bottom-10 right-0 p-3 rounded"  style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', backgroundBlendMode:'color'}}>
                    <h1>Precio 15$</h1>
                    <AppButton size='lg' title="Comprar" onClick={()=>{}}/>
                  </div>
            </div>
           
        </section>
    </>)
}

export default ItemCarousel