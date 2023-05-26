import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Modal = ({ singleCard }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { productName, pictureUrl, price, quantity, _id, description } =
    singleCard;
  const [subcategory, setSubcategory] = useState("Horse");
  console.log(subcategory);
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const pictureUrl = form.photoUrl.value;
    const quantity = form.quantity.value;
    const productName = form.productName.value;
    const description = form.description.value;
    const doc = {
      price,
      pictureUrl,
      quantity,
      productName,
      description,
      subcategory,
    };
    fetch(`https://assignment-11-server-lac.vercel.app/updates/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully updated your product.");
        }
        console.log(data);
      });
  };

  return (
    <div>
      <div>
        {/* Add a button to trigger the modal */}
        <button
          className="btn btn-outline btn-primary btn-sm"
          onClick={() => setIsOpen(true)}
        >
          <FaEdit className="text-blue-600 hover:text-white "></FaEdit>
        </button>

        {/* Add the modal overlay and content */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50  border-4">
            <div className=" w-1/2 p-4 border-4 rounded-lg bg-white">
              {/* new add */}

              <div>
                <section className="max-w-7xl mx-auto">
                  <form onSubmit={handleUpdate}>
                    <div className="space-y-5">
                      <div className="border-b border-gray-900/10 pb-3">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                          Edit Product
                        </h2>
                      </div>
                      <div className="border-b border-gray-900/10 pb-3">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                          Product Information
                        </h2>

                        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
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
                                defaultValue={productName}
                                className="block pl-3 w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                defaultValue={price}
                                placeholder={` $ 00.00`}
                                className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                defaultValue={pictureUrl}
                                className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                defaultValue={quantity}
                                className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                onChange={() =>
                                  setSubcategory(event.target.value)
                                }
                                name="category"
                                className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                <option value="Teddy Bear">Teddy Bear</option>
                                <option>Horse</option>
                                <option>Dinosaur</option>
                                <option>Dogs</option>
                                <option>Cats</option>
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
                                defaultValue={description}
                                cols="30"
                                className="block  w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                      <input
                        type="submit"
                        value="Update"
                        className="btn btn-primary  my-5"
                      />
                      <button
                        className="btn btn-error "
                        onClick={() => setIsOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </section>
              </div>

              {/* Add a button to close the modal */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
