import './offer.css';

function Offer() {
    return (
        <div className="offer-page">
            <header className="header">
                <button className="back-button">&lt;</button>
                <h2>เรียกรถสไลด์</h2>
            </header>
            <div className="map">MAP</div>
            <div className="content">
                <div className="tabs">
                    <span className="tab">รายละเอียด</span>
                    <span className="tab active">Offer</span>
                </div>
                <div className="offer-list">
                    <div className="offer-item">
                        <div className="offer-icon">&#128663;</div>
                        <div className="offer-details">
                            <span className="offer-name">ร้านบัวบางแคร์</span>
                            <span className="offer-date">01/11/2567</span>
                        </div>
                        <div className="price-and-button">
                            <span className="offer-price">2130</span>
                            <button className="select-button">เลือก</button>
                        </div>
                    </div>
                    <div className="offer-item">
                        <div className="offer-icon">&#128663;</div>
                        <div className="offer-details">
                            <span className="offer-name">ร้านแอนบางแคร์</span>
                            <span className="offer-date">01/11/2567</span>
                        </div>
                        <div className="price-and-button">
                            <span className="offer-price">2130</span>
                            <button className="select-button">เลือก</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <button className="nav-button">หน้าหลัก</button>
                <button className="nav-button">รายการ</button>
                <button className="nav-button">แจ้งเตือน</button>
                <button className="nav-button">บัญชี</button>
            </footer>
        </div>
    );
}

export default Offer;
