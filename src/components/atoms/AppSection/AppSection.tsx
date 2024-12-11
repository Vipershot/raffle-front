import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { TitleText } from "../TitleText/TitleText";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AppButton } from "../AppButton/AppButton";
interface Props {
  children: ReactNode;
  title: string;
  link: string;
  loading: boolean;
}
export const AppSection = ({ children, title, link }: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1440, min: 640 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
   
        <div className="md:px-[5%] lg:px-[10%] px-[10px]">
          <div className="flex justify-between items-center mb-2">
            <TitleText text={title} />
            <Link to={link} ><AppButton title="Ver más..." appearance="text" size="sm" bold/></Link>
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
            removeArrowOnDeviceType={['mobile']}
            itemClass="px-1"        
          >
            {children}
          </Carousel>
        </div>

    </>
  );
};
