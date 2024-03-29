import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = ({ items }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Carousel
            responsive={responsive}
            className="h-full w-full p-10 mb-4"
            centerMode
            infinite
            showDots
            swipeable
            draggable
            renderButtonGroupOutside
        >
            {items}
        </Carousel>
    );
};

export default MultiCarousel;
