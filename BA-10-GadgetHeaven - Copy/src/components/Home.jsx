
import Banner from "./Banner";
import GagedCard from "./GagedCard";


const Home = () => {
  return (
    <div className="">
        <div className="h-[500px] space-y-6 bg-[#9538E2]">
        <h2 className="text-6xl font-bold text-center text-white">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h2>
        <p className="text-lg fong-bold text-center text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="text-center p-4">
          <button className="btn text-center btn-outline rounded-full text-white">
            Shop Now
          </button>
        </div>
      </div>

      <Banner></Banner>
      <GagedCard></GagedCard>


    </div>
  );
};

export default Home;