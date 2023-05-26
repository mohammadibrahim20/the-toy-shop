import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Background from "../../../assets/bg/bg.png";

const Discount = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="max-w-7xl mx-auto my-12 bg-[#fcd0cc] flex justify-end"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <img src={Background} alt="" className="object-cover" />
    </div>
  );
};

export default Discount;
