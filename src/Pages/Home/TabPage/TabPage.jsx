import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCardNew from "./TabCardNew";
const TabPage = () => {
  const [category, setCategory] = useState("Teddy Bear");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-server-lac.vercel.app/category?category=${category}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [category]);

  return (
    <div>
      <div className="max-w-7xl mx-auto my-10 md:mt-40 mb-14 ">
        <h2 className="text-3xl md:text-4xl text-center font-bold uppercase">
          Browse Our Category
        </h2>
        <p className="text-center text-gray-600 font-medium my-3">
          Browse by Sub-category
        </p>
        <div className="max-w-7xl mx-auto w-full">
          <Tabs>
            <TabList className="flex justify-center ">
              <Tab onClick={() => setCategory("Teddy Bear")}>
                <span
                  className={`text-xl  font-semibold hover:text-indigo-600`}
                >
                  Teddy bear
                </span>
              </Tab>
              <Tab onClick={() => setCategory("Horse")}>
                <span
                  className={`text-xl  font-semibold hover:text-indigo-600`}
                >
                  Horse
                </span>
              </Tab>
              <Tab onClick={() => setCategory("Dinosaur")}>
                <span
                  className={`text-xl  font-semibold hover:text-indigo-600`}
                >
                  Dinosaur
                </span>
              </Tab>
              <Tab onClick={() => setCategory("Dogs")}>
                <span
                  className={`text-xl  font-semibold hover:text-indigo-600`}
                >
                  Dogs
                </span>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="divider"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-0 gap-5">
                {data.map((card) => (
                  <TabCardNew key={card._id} card={card}></TabCardNew>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="divider"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-0 gap-5">
                {data.map((card) => (
                  <TabCardNew key={card._id} card={card}></TabCardNew>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="divider"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-0 gap-5">
                {data.map((card) => (
                  <TabCardNew key={card._id} card={card}></TabCardNew>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="divider"></div>
              <div className="grid grid-cols-1  md:grid-cols-3 px-5 md:px-0 gap-5">
                {data.map((card) => (
                  <TabCardNew key={card._id} card={card}></TabCardNew>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {/* React Tabs */}
    </div>
  );
};

export default TabPage;
