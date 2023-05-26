import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Gellery = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/data.json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // <script>AOS.init();</script>;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-10 md:py-32 bg-gray-400">
      <h2 className="text-3xl md:text-4xl text-center font-bold uppercase">
        Shop Our COLLECTION
      </h2>
      <p className="text-center text-gray-600 font-medium my-3">
        Our delicious, limited-edition collection
      </p>
      <div className="flex flex-row justify-center items-center mb-7 ">
        <Link
          to="/toys"
          className="btn btn-outline px-10 rounded-none text-xl font-semibold "
        >
          Go Shop
        </Link>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {data.slice(0, 8).map((img, index) => (
          //   <div key={index} className="h-[320px] border ">
          //     <img className="bg-contain" src={img} alt="" />
          //   </div>

          <div
            className="relative animation h-80 drop-shadow-md mx-5 md:mx-0"
            key={index}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div
              className="bg-cover  h-80 rounded-xl p-10 shadow-md hover:border-indigo-300"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
            <div className="absolute  inset-0 bg-gradient-to-b from-transparent to-indigo-300 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-50 rounded-xl">
              <Link className="btn btn-link " to="/toys">
                Shop Now
                <FaArrowRight className="ml-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gellery;
