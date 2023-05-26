import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ToysCard = ({ singleCard, index }) => {


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
  } = singleCard;

  return (
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
                ({rating})
              </div>
            </div>
          </div>
        </td>
        <td>
          {subcategory}
          <br />
          <span className="badge badge-ghost badge-sm">New</span>
        </td>
        <td className="text-center">${price}</td>
        <td className="text-center">{quantity}</td>
        <th>
          <Link to={`${_id}`} className="btn btn-success btn-xs">View Details</Link>
        </th>
      </tr>
    </tbody>
  );
};

export default ToysCard;
