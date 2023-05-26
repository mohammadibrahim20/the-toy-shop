import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import ToysRow from "./ToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  const [data, setData] = useState([]);
  const [sort, setSort] = useState("all");

 useTitle("My Toys")

  const handleDelete = (id) => {
    // console.log(id, "delete");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-lac.vercel.app/toy/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.deletedCount > 0) {
              const remaining = data.filter((d) => d._id !== id);
              setData(remaining);
              Swal.fire("Deleted!", "Your Item has been deleted.", "success");
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`https://assignment-11-server-lac.vercel.app/myToys?email=${user.email}&sort=${sort}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, [user.email, sort]);

  return (
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
            <Link to="/myToys">
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
              My Toys
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <div className="flex justify-between">
        <h2 className="card-title font-bold my-5">All My Products</h2>
        <span>
          Sort by:
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-active m-1">
              Price
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => setSort("low")}>
                <a>Low Price </a>
              </li>

              <li onClick={() => setSort("high")}>
                <a>High Price</a>
              </li>
            </ul>
          </div>
        </span>
      </div>
      <div>
        <div className="">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th>SL</th>
                <th >Toy Name</th>
                <th>Seller Information</th>
                <th>Category</th>
                <th>Price & Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            {data?.map((singleCard, index) => (
              <ToysRow
                singleCard={singleCard}
                index={index}
                key={singleCard._id}
                handleDelete={handleDelete}
              ></ToysRow>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
