import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Tab = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10 md:my-40 ">
        <h2 className="text-3xl md:text-4xl text-center font-bold uppercase">
          Browse Our Category
        </h2>
        <p className="text-center text-gray-600 font-medium my-3">
          Our delicious, limited-edition collection
        </p>
      </div>

      {/* React Tab */}
      <div>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Tab;
