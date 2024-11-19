import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IItemCarousel } from "../../../interface/ICarousel";
import ItemCarousel from "../../molecules/ItemCarousel/ItemCarousel";


interface Props {
    data: IItemCarousel[]
}
const AppCarousel = ({data}:Props) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      return <>
         <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container bg-primary max-h-[500px] h-[500px]"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style bg-white "
        className=""
      >
        {data.map(({title,date,description,imgUrl,id,price}, index:number)=> (
            <ItemCarousel 
                title={title} 
                description={description} 
                date={date}
                imgUrl={imgUrl}
                key={index}
                id={id}
                price={price}
            />
        )
        )}
      </Carousel>
      </>
   
}



export default AppCarousel