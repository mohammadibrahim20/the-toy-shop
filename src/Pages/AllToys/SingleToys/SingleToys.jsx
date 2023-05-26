import { useState } from "react";
import { FaEnvelope, FaTshirt, FaUser } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link, useLoaderData } from "react-router-dom";
const SingleToys = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    description,
    productName,
    pictureUrl,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    subcategory,
    _id,
  } = data;

  const [quantityPlus, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantityPlus + 1);
  };

  const decrementQuantity = () => {
    if (quantityPlus > 0) {
      setQuantity(quantityPlus - 1);
    }
  };

  return (
    <div className="bg-gray-100 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm  breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link to="/toys">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                All Toys
              </Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              {productName}
            </li>
          </ul>
        </div>
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <figure className="p-5">
            <img src={pictureUrl} alt="" />
          </figure>
          <div className="mt-5">
            <h2 className="card-title font-bold">{productName}</h2>
            <div className="flex items-center text-lg">
              <ReactStars
                count={5}
                value={rating}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              <span>({rating}) Rating | Answered Questions </span>
            </div>
            <div>
              <h2 className="flex items-center">
                <FaUser></FaUser> <strong className="ml-2">Seller Name:</strong>{" "}
                {sellerName}
              </h2>
              <h2 className="flex items-center">
                <FaEnvelope></FaEnvelope>{" "}
                <strong className="ml-2">Seller Email:</strong> {sellerEmail}
              </h2>
              <h2 className="flex items-center">
                <FaTshirt></FaTshirt>{" "}
                <strong className="ml-2">Available Quantity:</strong> {quantity}
              </h2>
            </div>
            <p>
              <strong>Description: </strong>
              {description}
            </p>
            <span className="text-xs">
              Brand:No Brand | More Men from No Brand
            </span>
            <div className="divider"></div>
            <div>
              <span className="text-3xl font-bold text-red-500">
                $ {Math.floor((price * (100 - 10)) / 100)}
              </span>
              <br />
              <span>
                <small>
                  {" "}
                  <del>$ {price}</del>{" "}
                </small>{" "}
                -10% Discount
              </span>
            </div>
            <div className="divider mt-0"></div>
            <div className="flex items-center">
              <button
                className="px-2 py-1 bg-gray-200 text-gray-700"
                onClick={decrementQuantity}
              >
                -
              </button>
              <input
                type="text"
                value={quantityPlus}
                className="w-12 text-center mx-2"
                readOnly
              />
              <button
                className="px-2 py-1 bg-gray-200 text-gray-700"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToys;
