import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { TitleText } from "../TitleText/TitleText";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
interface Props {
  children: ReactNode;
  title: string;
  link: string;
  loading: boolean;
}
export const AppSection = ({ children, title, link, loading }: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="md:px-[10%] px-[10px]">
          <div className="flex justify-between align-center mb-2">
            <TitleText text={title} />
            <Link to={link}>Ver más...</Link>
          </div>
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType={[]}
            itemClass="px-1"        
          >
            {children}
          </Carousel>
        </div>
      )}
    </>
  );
};
