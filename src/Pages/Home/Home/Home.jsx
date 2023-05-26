import useTitle from "../../../Hooks/useTitle";
import BestSeller from "../BestSeller/BestSeller";
import Couunt from "../Count/Couunt";
import Discount from "../Discount/Discount";
import Gellery from "../Gellary/Gellery";
import Gift from "../Gift/Gift";
import Hero from "../Hero/Hero";
import TabPage from "../TabPage/TabPage";

const Home = () => {

  useTitle("Home");
  return (
    <div>
      <div className="bg-[#FFE8F0] h-10 flex items-center text-center justify-center font-semibold">
        Welcome to Our <strong> The Toy Shop</strong>
      </div>
      <Hero></Hero>
      <Discount></Discount>
      <Gellery></Gellery>
      <TabPage></TabPage>
      <Gift></Gift>
      <Couunt></Couunt>
      <BestSeller></BestSeller>
    </div>
  );
};

export default Home;
