import { FaStar } from "react-icons/fa";

const Couunt = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 hidden  lg:flex items-center justify-center">
      <div className="stats shadow ">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Customer</div>
          <div className="stat-value text-primary">30k+</div>
          <div className="stat-desc">10% more than Growth Yearly</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Brand</div>
          <div className="stat-value text-secondary">50+</div>
          <div className="stat-desc">Top rated Brand</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar ">
              <FaStar className="text-xl text-yellow-400" />
            </div>
          </div>
          <div className="stat-value">5 Star</div>
          <div className="stat-title">1000+ 5 star Review</div>
          <div className="stat-desc text-yellow-600">
            Customer Satisfaction Review
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couunt;
