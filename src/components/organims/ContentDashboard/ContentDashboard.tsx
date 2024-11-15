
import { AppSection } from '../../atoms/AppSection/AppSection'
import { CardProduct } from '../../molecules/CardProduct/CardProduct'

export const ContentDashboard = () => {

  return (
    <div className='flex flex-col gap-y-10 my-10'>
        <AppSection title="Mas Recientes" link="/register">
                {[10,20,30,40,50,60,70].map((item) => <CardProduct 
                    tickets={item} 
                    description={'Aosseiye Caja de almacenamiento de palanca de cambios de consola central'} 
                    price={20} 
                    dateEnd={'dic 9 - 18'} 
                />)}
            
        </AppSection>
        <AppSection title="Por terminar" link="/register">
                {[10,20,30,40,50,60,70].map((item) => <CardProduct 
                    tickets={item} 
                    description={'Aosseiye Caja de almacenamiento de palanca de cambios de consola central'} 
                    price={20} 
                    dateEnd={'dic 9 - 18'} 
                />)}
            
        </AppSection>
    </div>
  )
}
