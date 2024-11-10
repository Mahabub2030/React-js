
const Heading = ({title, subtitle}) => {
    return (
        <div className="flex flex-col items-center justify-center my-10">
            <h2 className="text-4xl mb-1" >{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};

export default Heading;