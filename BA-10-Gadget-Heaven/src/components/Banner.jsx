import bannerImg from '../assets/banner.jpg'
const Banner = () => {
  return (
    <div className="hero">
  <div className="hero-content flex-col ">
    <img
      src={bannerImg}
      className="max-w-2xl shadow-2xl broder-2 p-5 rounded-xl -mt-[200px]" />
 
  </div>
</div>
  );
};

export default Banner;
