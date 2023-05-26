import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="max-w-7xl mx-auto"> 
          <SwiperSlide >
            <div className="bg-[#EEDDE3] h-full md:h-[450px] max-w-7xl mx-auto ">
              <div className="grid grid-cols-1 md:grid-cols-2   pb-10">
                <div className="text-center space-y-3 md:space-y-5 my-14 md:mt-36 md:pb-64">
                  <p className="uppercase font-semibold">
                    Find the Perfect Gift in Our
                  </p>
                  <h1 className="text-3xl md:text-7xl mb-3 font-bold">
                    THE TOY
                    <br />
                    SHOP
                  </h1>
                  <div className="pt-5">
                    <Link
                      to="/toys"
                      className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-5 rounded "
                    >
                      SHOP NOW
                    </Link>
                  </div>
                </div>

                <img
                  className="bg-cover bg-right-bottom h-[420px]"
                  src="https://www.pngplay.com/wp-content/uploads/2/Teddy-Bear-PNG-HD-Quality.png"
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </SwiperSlide>
        </div>
        <SwiperSlide>
          <div className="bg-gradient-to-r from-pink-300 to-indigo-200 h-full md:h-[450px] mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto pb-10">
              <div className="text-center space-y-3 md:space-y-5 my-14 md:mt-36 md:pb-64">
                <p className="uppercase font-semibold">
                  Find the Perfect Gift in Our
                </p>
                <h1 className="text-3xl md:text-7xl font-bold">
                  VARIETY GIFT SETS
                </h1>
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded">
                  SHOP NOW
                </button>
              </div>

              <img
                className="bg-cover bg-right-bottom h-[420px]"
                src="https://i.ibb.co/zrxr5NS/pngwing-com.png"
                alt=""
                srcSet=""
              />

              {/* <figure className="m-5 md:none p-5 object-cover border bg-bottom ">
                <img
                  className="bg-cover bg-center"
                  src="https://i.ibb.co/zrxr5NS/pngwing-com.png"
                  alt=""
                  srcSet=""
                />
              </figure> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
