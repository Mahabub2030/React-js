import { useLoaderData } from "react-router-dom";
import Card from "../Component/Card";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData();
    const [coffees,setCoffess] = useState(data)
    const handelSort =(sortby)=>
        if(sortby ==='popularaty'){

        }else if (sortby ==='rating'){

        }
    return (
        <>
            <div className="flex justify-between items-center">
            <div>Text</div>
            <div><button>More</button></div>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(coffee => <Card key={coffee.id} coffee={coffee} ></Card>)
                }
            </div>
        </>
    );
};

export default Coffees;