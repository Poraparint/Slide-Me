
import './status.css';

function Status() {
  return (
    <div className="map-status">
      <div className="header">
        <button className="back-button">&lt;</button>
        <div>
          <span className="title">สถานะรถสไลด์</span>
        </div>
        <button className="close-btn title-close">✖</button>
      </div>

      <div className="map-container">
        {/* Placeholder for the map image */}
        <img src="path/to/map-image.png" alt="Map" className="map-image" />
      </div>
      <div className="info-container">
        <div className="ride-section">
          <div className="ride-info">
            <span className="ride-type">รถสไลด์ขนาดเล็ก</span>
            <div className="ride-details">
              <span>
                <i className="bi bi-clock"></i> 20 minutes
              </span>
              <span>
                <i className="bi bi-signpost-2"></i> 3.4 km
              </span>
            </div>
          </div>
          <div className="vehicle-icon">
            <i className="bi bi-truck-flatbed"></i>
          </div>
        </div>
        <div className="driver-info">
          <div className="driver-name">สมใจ สมดีนคร</div>
          <div className="driver-rating">
            <span>⭐</span> 4.9
          </div>
          <div className="contact-buttons">
            <button className="btn btn-outline-success">
              <i className="bi bi-telephone"></i>
            </button>
            <button className="btn btn-outline-success">
              <i className="bi bi-chat"></i>
            </button>
          </div>
        </div>
        <button className="return-btn btn btn-success">กลับ</button>
      </div>
    </div>
  );
}

export default Status;
