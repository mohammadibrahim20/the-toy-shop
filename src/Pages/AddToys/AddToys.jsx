import { useContext, useState } from "react";
import { toast } from "react-toastify";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const [subcategory, setSubcategory] = useState("Teddy Bear");
  const [rating, setRating] = useState("5");

  useTitle("Add Product");
  const handleCategory = (even) => {
    setSubcategory(even.target.value);
  };
  const handleRating = (event) => {
    setRating(event.target.value);
  };

  const addProducts = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const pictureUrl = form.photoUrl.value;
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const data = {
      productName,
      pictureUrl,
      sellerName,
      sellerEmail,
      price,
      quantity,
      description,
      subcategory,
      rating,
    };

    fetch("https://assignment-11-server-lac.vercel.app/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Add product successfully");
          form.reset();
        }
        // console.log(data);
      });

    // const toy = {
    //   pictureUrl: "https://example.com/toy-image.jpg",
    //   name: "Toy Name",
    //   sellerName: "Seller Name",
    //   sellerEmail: "seller@example.com",
    //   subcategory: "Math Toys",
    //   price: 19.99,
    //   rating: 4.5,
    //   quantity: 10,
    //   description: "Detailed description of the toy",
    // };
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto">
        <form onSubmit={addProducts}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Add a new Products
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Sellar Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center  text-gray-500 sm:text-sm"></span>
                      <input
                        type="text"
                        name="username"
                        value={user?.displayName}
                        id="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="janesmith"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Product Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Must be fill-up all input section
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="product-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Product name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="productName"
                      id="product-name"
                      placeholder="product name"
                      required
                      className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="price"
                      name="price"
                      required
                      placeholder={` $ 00.00`}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-5">
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Product Photo URL
                  </label>
                  <div className="mt-2">
                    <input
                      id="url"
                      placeholder="Product Photo URL"
                      name="photoUrl"
                      type="photoUrl"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Product Quntity
                  </label>
                  <div className="mt-2">
                    <input
                      id="quantity"
                      placeholder="Product Qunatity"
                      name="quantity"
                      type="number"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Category
                  </label>
                  <div className="mt-2">
                    <select
                      id="category"
                      onChange={handleCategory}
                      name="category"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="Teddy Bear">Teddy Bear</option>
                      <option>Horse</option>
                      <option>Dinosaur</option>
                      <option>Dogs</option>
                      <option>Cats</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="rating"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Rating
                  </label>
                  <div className="mt-2">
                    <select
                      name="rating"
                      onChange={handleRating}
                      id="rating"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="1">1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Details Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="submit"
            className="btn btn-info btn-block my-5"
          />
        </form>
      </section>
    </div>
  );
};

export default AddToys;
