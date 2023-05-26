import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-11-server-lac.vercel.app/allToys`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 8));
      });
  }, []);

 

  return (
    <div className="max-w-7xl mx-auto my-10 md:my-28">
      <h2 className="text-3xl md:text-4xl text-center font-bold uppercase">
        Shop Our COLLECTION
      </h2>
      <p className="text-center text-gray-600 font-medium my-3">
        Shop our Exclusive Collections
      </p>
      <div className="divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {data.map((card) => (
          <div key={card._id} className="mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure className="mb-2">
                <img
                  src={card.pictureUrl}
                  alt=""
                  className="h-64 ml-auto mr-auto rounded"
                />
              </figure>
              <div className="rounded-lg p-4 bg-gray-600 flex flex-col">
                <div>
                  <h5 className="text-white text-xl font-bold leading-none">
                    {card.productName.substr(0, 50)}
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">
                    Category: {card.subcategory}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white font-light">
                    ${card.price}
                  </div>

                  <Link
                    to={`toys/${card._id}`}
                    className="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1={12} y1={5} x2={12} y2={19} />
                      <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
