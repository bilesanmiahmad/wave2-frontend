import "../styles/Footer.css";

const Footer:React.FC = () => {
    return (
        <div className="footer">
            <div>
                <span>Facebook</span>
                <span>twitter</span>
            </div>
            <div>
            <span>Privacy Policy</span>
                <span>Terms and conditions</span>
                <span>&copy; TalkPanel Inc</span>
            </div>
        </div>
    )
};


export default Footer;