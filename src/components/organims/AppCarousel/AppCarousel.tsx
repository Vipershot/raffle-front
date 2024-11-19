import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Props {
    data: {imgUrl:string}[]
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
        containerClass="carousel-container h-[30%]"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style bg-white "
        className=""
      >
        {data.map(({imgUrl}, index:number)=> (
           <div key={index} className="w-full h-[500px] object-cover bg-bottom aspect-[64/27] overflow-hidden">
              <img src={imgUrl} alt="" className="w-full bg-bottom h-[500px] object-cover"/>
            </div>
        )
        )}
      </Carousel>
      </>
   
}



export default AppCarousel