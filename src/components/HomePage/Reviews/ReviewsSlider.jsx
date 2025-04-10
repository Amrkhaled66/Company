import Review from "./Review";
import SliderPoints from "./SliderPoints";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import team4 from "src/assets/team/team4.webp";

const SLIDES_PER_VIEW = 3;

export default function ReviewsSlider() {
  const swiperRefDesktop = useRef(null);
  const swiperRefTablet = useRef(null);
  const swiperRefMobile = useRef(null);
  const [activeSlider, setActiveSlider] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getGroupSize = () => {
    if (windowWidth >= 768) return 3;
    if (windowWidth >= 640) return 4;
    return 3;
  };

  const groupSize = getGroupSize();
  const groupCount = Math.ceil(Reviews.length / groupSize);

  const handleDotClick = (groupIndex) => {
    if (windowWidth >= 768) {
      swiperRefDesktop.current.slideTo(groupIndex);
    }
    if (windowWidth >= 640) {
      swiperRefTablet.current.slideTo(groupIndex);
    } else {
      swiperRefMobile.current.slideTo(groupIndex);
    }
  };

  const handleSlideChange = (swiper) => {
    let currentGroup;
    currentGroup = swiper.realIndex;
    setActiveSlider(currentGroup);
  };

  return (
    <div className="flex justify-center gap-x-6">
      <div className="group relative flex h-fit w-full flex-col items-center gap-y-[40px] lg:gap-y-[50px]">
        {/* Desktop Swiper */}
        <div className="hidden w-full lg:block">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={24}
            className="w-full"
            modules={[Navigation]}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRefDesktop.current = swiper;
            }}
          >
            {Array.from({ length: Math.ceil(Reviews.length / 3) }).map(
              (_, i) => (
                <SwiperSlide key={i}>
                  <div className="grid h-full grid-cols-3 grid-rows-1 gap-6">
                    {Reviews.slice(i * 3, i * 3 + 3).map((review, index) => (
                      <Review key={index} {...review} />
                    ))}
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>

        {/* Tablet Swiper */}
        <div className="hidden w-full sm:block lg:hidden">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={24}
            className="w-full"
            modules={[Navigation]}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRefTablet.current = swiper;
            }}
          >
            {Array.from({ length: Math.ceil(Reviews.length / 4) }).map(
              (_, i) => (
                <SwiperSlide key={i}>
                  <div className="grid h-full grid-cols-2 gap-4">
                    {Reviews.slice(i * 4, i * 4 + 4).map((review, index) => (
                      <Review key={index} {...review} />
                    ))}
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>

        {/* Mobile Swiper */}
        <div className="block w-full sm:hidden">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={24}
            className="w-full"
            modules={[Navigation]}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRefMobile.current = swiper;
            }}
          >
            {Reviews.reduce((slides, _, i) => {
              if (i % 3 === 0) {
                slides.push(
                  <SwiperSlide className="h-full" key={i}>
                    <div className="flex h-full flex-col gap-y-5">
                      {Reviews.slice(i, i + 3).map((p, ReviewIndex) => (
                        <Review key={ReviewIndex} {...p} />
                      ))}
                    </div>
                  </SwiperSlide>,
                );
              }
              return slides;
            }, [])}
          </Swiper>
        </div>

        {/* Custom Dots */}
        <SliderPoints
          length={groupCount}
          onDotClick={handleDotClick}
          currentIndex={activeSlider}
          activeBg="black"
        />
      </div>
    </div>
  );
}

const Reviews = [
  {
    content:
      '"Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverra ornare."',
    name: "Alvantan Khan",
    position: "Lead Developer",
    img: team4,
  },
  {
    content:
      '"Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverra ornare."',
    name: "Alvantan Khan",
    position: "Lead Developer",
    img: team4,
  },
  {
    content:
      '"Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverra ornare."',
    name: "Alvantan Khan",
    position: "Lead Developer",
    img: team4,
  },
  {
    content:
      '"Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverra ornare."',
    name: "Alvantan Khan",
    position: "Lead Developer",
    img: team4,
  },
  {
    content:
      '"Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverra ornare."',
    name: "Alvantan Khan",
    position: "Lead Developer",
    img: team4,
  },
  {
    content:
      '"Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverra ornare."',
    name: "Alvantan Khan",
    position: "Lead Developer",
    img: team4,
  },
  {
    content:
      '"Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverra ornare."',
    name: "Alvantan Khan",
    position: "Lead Developer",
    img: team4,
  },
  {
    content:
      '"Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverra ornare."',
    name: "Alvantan Khan",
    position: "Lead Developer",
    img: team4,
  },
];
