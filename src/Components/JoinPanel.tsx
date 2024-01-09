import { useState } from "react";
import "../styles/JoinPanel.css";

const Panel:React.FC = () => {
    const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

    const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email})
        };

        try {
            const response = await fetch("http://localhost:8000/", options);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        }
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