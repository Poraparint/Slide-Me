import "./recipt.css";
import Profile from '../assets/profile.png'

function Recipt() {
  return (
    <div className="app-container">
      <div className="main-container">
        <div className="status-container">
          {/* Checkmark Icon */}
          <div className="status-box">
            <div className="status-check-circle">✓</div>
            <h3 className="text-dark">ขอบคุณคำสั่งเรียกรถสไลด์</h3>
            <h2 className="text-dark">Order status</h2>

            {/* Price Summary Box */}
            <div className="white-box">
              <div className="section-item">
                <span>ทั้งหมด</span>
                <span>2,230</span>
              </div>
              <div className="section-item">
                <span>ส่วนลด</span>
                <span className="recipt-discount">100</span>
              </div>
              <div className="section-item" style={{ borderBottom: "none" }}>
                <span>รวมทั้งหมด</span>
                <span>2,130</span>
              </div>
            </div>

            {/* Driver Information Box */}
            <div className="white-box">
              <div className="contact-profile">
                <div className="recipt-profile">
                  <img src={Profile} alt="" className="icon" />
                </div>
                <h3 className="">สมใจ สมฉันคร</h3>
                <p className="contact-stars">★★★★★</p>
              </div>

              <div className="driver-stats">
                <div className="text-center">
                  <i className="fa-solid fa-star"></i>
                  <p>5 ดาว</p>
                </div>
                <div className="text-center">
                  <i className="fa-solid fa-truck-moving"></i>
                  <p>15รอบเที่ยว</p>
                </div>
                <div className="text-center">
                  <i className="fa-solid fa-suitcase"></i>
                  <p>1 ปี</p>
                </div>
              </div>

              <div className="contact-box">
                <button className="contact-btn">
                  <i className="fa-solid fa-phone"></i>
                </button>
                <button className="contact-btn">
                  <i className="fa-solid fa-comment"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="white-btn">ติดตามสถานะ</div>
        </div>
      </div>
    </div>
  );
}

export default Recipt;
