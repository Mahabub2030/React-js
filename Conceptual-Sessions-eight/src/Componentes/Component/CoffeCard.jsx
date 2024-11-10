import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeCard = () => {
    const  navigated = useNavigate()

    const data = useLoaderData();
    console.log(data);
    const { category } = useParams()
    const [coffees, setCoffes] = useState([]);
    useEffect(() => {
        if (category) {
            const filtaredByCatagory = [...data].filter(
                coffee => coffee.category === category
            )
            setCoffes(filtaredByCatagory)
        } else {
            setCoffes(data.slice(0, 6))
        }
    }, [category, data])
    console.log(category);
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee} ></Card>)
                }
            </div>
            <button onClick={()=>navigated('/coffees')} className="btn btn-warning">View All</button>
        </>
    );
};

export default CoffeCard;