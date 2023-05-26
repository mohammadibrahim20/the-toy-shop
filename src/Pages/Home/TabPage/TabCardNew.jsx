import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const TabCardNew = ({ card }) => {
  const { productName, pictureUrl, sellerName, price, rating, _id } = card;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-out-left"
      className="card card-compact bg-base-100 shadow-xl"
    >
      <figure className="p-2">
        <img
          className="h-64 ml-auto mr-auto rounded"
          src={pictureUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center flex flex-col">
        <h2 className="text-3xl font-semibold">{productName}</h2>
        <div className="mt-auto space-y-3">
          <span>
            by <strong>{sellerName}</strong>
          </span>
          <br />
          <span className="text-gray-600">
            from
            <strong className="text-xl"> ${price}</strong>
          </span>
          <span className="text-lg flex items-center justify-center">
            <ReactStars
              count={5}
              onChange={rating}
              size={24}
              isHalf={true}
              value={rating}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            ({rating}) Rating
          </span>

          <div className="card-actions justify-end items-center px-5 pb-5">
            <Link
              to={`toys/${_id}`}
              className="btn btn-outline px-10 rounded-none btn-block font-semibold "
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCardNew;
