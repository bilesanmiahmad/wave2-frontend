import "../styles/JoinPanel.css";

type PanelProps = {
    email: string;
  };

const Panel = ({email}:PanelProps) => {
    
return (
    <div className="panel">
        <form>
            <div className="panel-form">
            <input type="email address" placeholder="Enter your email address" required />
            </div>
            <button type="submit" className="panel-btn">Join the Panel</button>
        </form>

        <p>Join over 1.2m talking panelist across the world. By entering your email address,
            you agree to receive marketing emails from talk panel </p>
    </div>
)
};

export default Panel;