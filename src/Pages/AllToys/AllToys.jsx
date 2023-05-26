import { useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import ToysCard from "./ToysCard";

const AllToys = () => {
  const [data, setData] = useState([]);
  const [search, setSerch] = useState("");
  useTitle("All Toys");
  const limit = 100;
  useEffect(() => {
    fetch(`https://assignment-11-server-lac.vercel.app/allToys?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`https://assignment-11-server-lac.vercel.app/search/${search}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div className="my-32">
      <h2 className="text-center font-bold md:text-5xl sm:text-3xl text-sky-700 mb-10">
        All Toys Collection
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="font-sans text-black mb-5 bg-white flex items-center justify-center">
          <div className="border rounded overflow-hidden flex">
            <input
              type="text"
              onChange={() => setSerch(event.target.value)}
              className="px-5 py-2"
              placeholder="Search..."
            />
            <button
              onClick={handleSearch}
              className="flex btn btn-outline items-center justify-center px-4 border-l"
            >
              <svg
                className="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            {data.map((singleCard, index) => (
              <ToysCard
                key={singleCard._id}
                singleCard={singleCard}
                index={index}
              ></ToysCard>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
