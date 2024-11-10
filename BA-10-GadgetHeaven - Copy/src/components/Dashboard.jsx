import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-[#9538E2] text-white text-center mt-[5px] p-12 rounded-xl">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p>
          Explore the latest gadgets that will take your experience to <br />{" "}
          the next level. From smart devices to the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center gap-10 mt-10">
          <Tabs>
            <TabList>
              <Tab classID="text-xl font-bold">Cart List Here</Tab>
              <Tab>Wish List Here</Tab>
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

      <div className="flex  px-20 text-center items-center justify-between m-10 ">
        <h2 className="text-2xl font-bold">Cart</h2>
        <div className="flex gap-10 items-center justify-center">
          <h2 className="text-xl font-bold">Total cost:</h2>
          <div className=" flex gap-10">
            <button className="btn btn-outline rounded-full">
              Sort by Price
            </button>
            <button className="btn btn-outline rounded-full">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
