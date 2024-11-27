

import "./notification.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Notification() {
  return (
    <div className="notification-container">
      <div className="header">
        <button className="back-button">&lt;</button>
        <span className="title">Notification</span>
        <button className="close-button">&times;</button>
      </div>
      <div className="notifications">
        <Link to="/review" className="link">
          <div className="notification-item success">
            <div className="noti-icon">
              <i className="bi bi-car-front"></i>
              <i className="noti-circle bi bi-check2-circle" id="checked"></i>
            </div>
            <div className="content">
              <h3>รถถึงปลายทาง สำเร็จ!</h3>
              <p>ตรวจสอบรายการ เช็ครถได้ที่...</p>
              <span className="time">10 minutes ago</span>
            </div>
          </div>
        </Link>

        <div className="notification-item in-progress">
          <div className="noti-icon">
            <i className="bi bi-car-front"></i>
            <i className="noti-circle bi bi-clock" id="clock"></i>
          </div>
          <div className="content">
            <h3>รถของคุณใกล้ถึง ปลายทาง...</h3>
            <p>ติดตามรถ เช็ครถได้ที่...</p>
            <span className="time">5 minutes ago</span>
          </div>
        </div>

        <Link to="/screen" className="link">
          <div className="notification-item error">
            <div className="noti-icon">
              <i className="bi bi-credit-card"></i>
              <i className="noti-circle bi bi-x-circle" id="cross"></i>
            </div>
            <div className="content">
              <h3>คุณยังไม่ได้ชำระเงิน</h3>
              <p>ชำระเงินไม่ผ่าน โปรดลองอีกครั้ง เพื่อไม่พลาด...</p>
              <span className="time">35 minutes ago</span>
            </div>
          </div>
        </Link>

        <Link to="/coupon" className="link">
          <div className="notification-item promo">
            <div className="noti-icon">
              <i className="fa-solid fa-ticket-simple"></i>
            </div>
            <div className="content">
              <h3>ใส่ code slidem100 ลดสูงสุด...</h3>
              <p>ต้อนรับลูกค้าใหม่ ใส่โค้ดลดทันทีสูงสุด 100 บาท...</p>
              <span className="time">1 hour ago</span>
            </div>
          </div>
        </Link>
      </div>

      <Navbar />
    </div>
  );
}

export default Notification;
