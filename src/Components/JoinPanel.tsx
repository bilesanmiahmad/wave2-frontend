import { useState } from "react";
import "../styles/JoinPanel.css";

const Panel = () => {
    const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

     const handleSubmit=() => {

     };
    
return (
    <div className="panel">
        <form>
            <div className="panel-form">
            <input type="email" placeholder="Enter your email address" required onChange={handleChange} />
            </div>
            <button type="submit" className="panel-btn" onClick={handleSubmit}>Join the Panel</button>
        </form>

        <p>Join over 1.2m talking panelist across the world. By entering your email address,
            you agree to receive marketing emails from talk panel </p>
    </div>
)
};

export default Panel;