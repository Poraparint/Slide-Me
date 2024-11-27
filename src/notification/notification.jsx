/* eslint-disable react/prop-types */

import './notification.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
          <NotificationItem
            icon="car"
            title="รถถึงปลายทาง สำเร็จ!"
            message="ตรวจสอบรายการ เช็ครถได้ที่..."
            time="10 minutes ago"
            status="success"
          />
        </Link>

        <NotificationItem
          icon="car"
          title="รถของคุณใกล้ถึง ปลายทาง..."
          message="ติดตามรถ เช็ครถได้ที่..."
          time="5 minutes ago"
          status="in-progress"
        />

        <Link to="/screen" className="link">
          <NotificationItem
            icon="payment"
            title="คุณยังไม่ได้ชำระเงิน"
            message="ชำระเงินไม่ผ่าน โปรดลองอีกครั้ง เพื่อไม่พลาด..."
            time="35 minutes ago"
            status="error"
          />
        </Link>
        <Link to="/coupon" className="link">
          <NotificationItem
            icon="discount"
            title="ใส่ code slidem100 ลดสูงสุด..."
            message="ต้อนรับลูกค้าใหม่ ใส่โค้ดลดทันทีสูงสุด 100 บาท..."
            time="1 hour ago"
            status="promo"
          />
        </Link>
      </div>

      <Navbar />
    </div>
  );
}

function NotificationItem({ icon, title, message, time, status }) {
  return (
    <div className={`notification-item ${status}`}>
      
        <div className="icon">
        <img src={`/${icon}.png`} alt={icon} />
      </div>

      
      <div className="content">
        <h3>{title}</h3>
        <p>{message}</p>
        <span className="time">{time}</span>
      </div>
    </div>
  );
}

export default Notification;
