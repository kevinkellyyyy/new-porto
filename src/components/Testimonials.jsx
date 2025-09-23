import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TESTIMONIALS } from "../utils/constants";

const Testimonials = () => {
  return (
    <div name="testimonials" className="w-full bg-[#0a192f] text-gray-300">
      <div className="md:max-w-[1000px] mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 my-5">
          <div className="text-center" data-aos="fade-left">
            <p className="text-2xl md:text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Recommendations
            </p>
          </div>
          <div className="text-center my-8">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlay
              autoPlaySpeed={6000}
              centerMode={false}
              containerClass="container-with-dots"
              itemClass="flex items-center"
              draggable
              focusOnSelect={false}
              infinite
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 1,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
              items={1}
            >
              {TESTIMONIALS.map((testimoni) => (
                <div
                  key={testimoni.id}
                  className="bg-[#112240] px-4 md:px-12 py-8 rounded-lg shadow-lg relative"
                  data-aos="fade-up"
                >
                  <a
                    href={testimoni.linkedInProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex sm:items-start min-w-[140px]">
                      <img
                        src={testimoni.image}
                        alt={testimoni.name}
                        className="w-16 h-16 rounded-full mb-3"
                      />
                      <div className="flex flex-col ml-4 sm:ml-6">
                        <h3 className="text-pink-600 font-bold text-center sm:text-left">
                          {testimoni.name}
                        </h3>
                        <p className="text-gray-500 text-sm text-center sm:text-left">
                          {testimoni.role}
                        </p>
                      </div>
                    </div>
                  </a>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-6xl text-pink-600 font-serif leading-none">
                      "
                    </div>
                    <div className="absolute -bottom-4 -right-2 text-6xl text-pink-600 font-serif leading-none rotate-180">
                      "
                    </div>
                    <p className="text-gray-300 text-sm md:text-md my-4 whitespace-pre-line relative z-10 px-4">
                      {testimoni.testimonial}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
