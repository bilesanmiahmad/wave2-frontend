import "../styles/Opinions.css";

const Opinions = () => {
    return (
        <div className="opinions">
            <p className="opinions-header">Your No1 opinion Marketplace.</p>
            <div className="opinions-container">
            <div className="opinions-content">
                <p className="number">1.2M</p>
                <p>Panelists</p>
            </div>
            <div className="opinions-content">
                <p className="number amount">54M</p>
                <p className="exchange">Opinions
                    Exchanged</p>
            </div>
            <div className="opinions-content">
                <p className="number amount">$54M</p>
                <p className="exchange">Economic
                    Activity</p>
            </div>
            <div className="opinions-content">
                <p className="number">22</p>
                <p>Countries</p>
            </div>
            </div>
            
        </div>
        
    )
    
};


export default Opinions;