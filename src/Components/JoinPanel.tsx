import "../styles/JoinPanel.css";

interface Props {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent)=>void
}

const Panel:React.FC<Props> = ({email, setEmail, handleSubmit}) => {

    
return (
    <div className="panel">
        <form onSubmit={handleSubmit}>
            <div className="panel-form">
            <input type="email" placeholder="Enter your email address" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit" className="panel-btn">Join the Panel</button>
        </form>

        <p>Join over 1.2m talking panelist across the world. By entering your email address,
            you agree to receive marketing emails from talk panel </p>
    </div>
)
};

export default Panel;