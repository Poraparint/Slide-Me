import './information.css'
function Information() {
    return ( 
        <div className="container">
        <header className="header">
          <button className="back-button">&lt;</button>
          <h1>เรียกรถสไลด์</h1>
        </header>
        <div className="map">MAP</div>
        <div className="details-section">
          <div className="tab-header">
            <span className="tab active">รายละเอียด</span>
            <span className="tab">Offer</span>
          </div>
          <div className="location-details">
            <div className="current-location">ตำแหน่งปัจจุบัน</div>
            <div className="destination">
              บัวรถสไลด์การ์แคร์ 98 ลำลูกกาคลอง1 ปทุมรา....
            </div>
          </div>
          <div className="truck-info">
            <div className="truck-description">
              <h2>รถสไลด์ขนาดเล็ก</h2>
              <p>🕒 20 minutes</p>
              <p>📍 3.4 km</p>
            </div>
            <div className="truck-icon">
              <img src="truck-icon.png" alt="truck icon" />
              <p>กค-9877</p>
              <p>กรุงเทพมหานคร</p>
            </div>
          </div>
          <button className="call-button">เรียกทันที</button>
        </div>
      </div>
    );
  }
export default Information
