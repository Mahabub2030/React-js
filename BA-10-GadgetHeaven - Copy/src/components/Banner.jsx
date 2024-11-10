
import bannerImg from '../assets/banner.jpg'
const Banner = () => {
  return (
    <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
       src={bannerImg}
      className=" w-[1050px] rounded-xl shadow-2xl -mt-[150px] border-2 p-4" />
  </div>
</div>
  );
};

export default Banner;