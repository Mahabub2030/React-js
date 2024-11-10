import { Link } from "react-router-dom";


const Category = ({categorys}) => {

  return (
    <div>
      {
        categorys.map(category => <Link key={category.category} to ='/cards'>
          {category.category}
          </Link>)
      }
    </div>
  );
};

export default Category;