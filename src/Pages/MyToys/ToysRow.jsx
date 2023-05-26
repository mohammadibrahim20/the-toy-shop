import { FaRecycle } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import Modal from "./Modal";

const ToysRow = ({ singleCard, index, handleDelete }) => {
  const { productName, pictureUrl, price, quantity, rating, subcategory, _id, sellerEmail, sellerName } =
    singleCard;
  // const [isOpen, setIsOpen] = useState(false);
  console.log(singleCard);
  return (
    <>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>{index + 1}</th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask w-16 rounded-xl ">
                  <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{productName}</div>
                <div className="flex items-center">
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
                  ({rating}) Rating
                </div>
              </div>
            </div>
          </td>
          <td>
            {sellerName}
            <br />
            <span className="badge badge-ghost badge-sm">{sellerEmail}</span>
          </td>
          <td className="text-center">{subcategory} </td>
          <td className="text-center"><strong>Price: ${price}</strong> <br /> Quntity: {quantity}</td>
          <th className="flex justify-around">
            <Modal singleCard={singleCard}></Modal>

            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline btn-error btn-sm"
            >
              <FaRecycle className="text-red-500 hover:text-white "></FaRecycle>
            </button>
          </th>
        </tr>
      </tbody>
    </>
  );
};

export default ToysRow;
