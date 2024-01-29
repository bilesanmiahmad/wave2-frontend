import "../styles/Home.css";

const Home:React.FC = () => {
    return (
        <div className="home w-full flex flex-col items-center justify-evenly absolute bottom-0 h-40 lg:h-1/4">
            <p className="play leading-normal mt-0">Talk panel</p>
            <h3>Get paid for sharing<br /> your opinion</h3>
            <p className="leading-normal">Respond to surveys and start earning from $10</p>
        </div>
    )
};


export default Home;