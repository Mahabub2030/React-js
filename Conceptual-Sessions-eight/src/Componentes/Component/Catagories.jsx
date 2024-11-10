import { NavLink } from "react-router-dom";
const Catagories = ({catagories}) => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
               {
                catagories.map(catagory =><NavLink 
                key={catagory.category} to={`category/${catagory.category}`}
                 role="tab" className={({isActive})=>`tab ${isActive? 'tab-active':''}`}>
                    {catagory.category}
                    </NavLink>
                    )
               }
            </div>
        </div>
    );
};

export default Catagories;  