// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from '../../../assets/banner3.png'
// interface Props {
//     data: {imgUrl:string}[]
// }
const AppCarousel = () => {
    // const responsive = {
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 1,
    //       slidesToSlide: 1 // optional, default to 1.
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 1,
    //       slidesToSlide: 1 // optional, default to 1.
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1,
    //       slidesToSlide: 1 // optional, default to 1.
    //     }
    //   };
      return <>
         {/* <Carousel
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
        containerClass="carousel-container md:h-[30%] sm:h-[10%]"
        removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
        dotListClass="custom-dot-list-style bg-white "
      >
        {data.map(({imgUrl}, index:number)=> (
           <div key={index} className="w-full md:h-[500px] object-cover bg-bottom aspect-[64/27] overflow-hidden">
              <img src={imgUrl} alt="" className="w-full bg-bottom md:h-[500px] object-cover"/>
            </div>
        )
        )}
      </Carousel> */}
      <div className="w-full md:h-[500px] object-cover bg-bottom aspect-[64/27] overflow-hidden">
              <img src={img} alt="" className="w-full bg-bottom md:h-[500px] object-cover"/>
            </div>
      </>
   
}



export default AppCarousel