import { Link } from "react-router-dom";
import gift from "../../../assets/bg/gift.png";

const Gift = () => {
  return (
    <div className="bg-[#FCF1F5] max-w-7xl mx-auto ">
      <div className="flex flex-col md:flex-row  justify-between items-center my-5">
        <div className="mx-20 my-5 ">
          <h2 className="font-semibold text-2xl md:text-4xl mb-5">
            GET GIFT VOUCHER
          </h2>
          <Link
            to="/toys"
            className="btn btn-outline px-7 rounded-none font-semibold "
          >
            Go Shop
          </Link>
        </div>
        <img src={gift} alt="" />
      </div>
    </div>
  );
};

export default Gift;
