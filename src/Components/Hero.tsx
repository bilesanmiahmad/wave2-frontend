import React, {useState} from 'react';
import "../styles/Hero.css"
import Home from "./Home";

const Hero:React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handleVideoClick = () => {
        console.log("Video clicked")
        setIsPlaying(!isPlaying);
    }
    return (
        <header className="relative h-2/6">
            <video src={process.env.PUBLIC_URL+"assets/video1.mp4"} autoPlay={isPlaying}  muted onClick={handleVideoClick} style={{ width: "100%", height: "50%", objectFit: "cover" }} ></video>
            <Home />
        </header>
    )
};


export default Hero;