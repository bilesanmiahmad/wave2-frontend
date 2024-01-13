import "../styles/Hero.css"
import heroImage from "../heroImage.jpg";
import Home from "./Home";

const Hero:React.FC = () => {
    return (
        <header className="relative">
            <div className="hero-image">
                {/* <img src={heroImage} alt="a lady smiling at the camera with a laptop in the foreground" /> */}
            </div>
            <Home />
        </header>
    )
    
};


export default Hero;