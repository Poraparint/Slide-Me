import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./qrcodescreen.css";
import QR from '../assets/qr-user.jpg'
import Navbar from "../components/Navbar";

function QrCodeScreen() {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 นาทีในหน่วยวินาที

  // ใช้ useEffect สำหรับการนับเวลาถอยหลัง
  useEffect(() => {
    if (timeLeft <= 0) return; // หากหมดเวลา หยุดการนับ
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // ล้าง Timer เมื่อ Component ถูก unmount
  }, [timeLeft]);

  // ฟังก์ชันสำหรับแปลงวินาทีเป็นรูปแบบ mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="app-container">
      <div className="main-container">
        <div className="qr-container">
          <div className="header">
            <Link className="link" to="/screen">
              <button className="back-button">&lt;</button>
            </Link>
            <span className="title">QR Code ชำระเงิน</span>
          </div>
          <div className="qr-content">
            {QR ? (
              <>
                <img src={QR} alt="QR Code" className="qr-image" />
                <p className="timer">เวลาคงเหลือ: {formatTime(timeLeft)}</p>
                {timeLeft <= 0 && (
                  <p className="expired">QR Code หมดอายุแล้ว</p>
                )}
              </>
            ) : (
              <p className="qr-placeholder">กำลังสร้าง QR Code...</p>
            )}
          </div>
          <Link className="link" to="/recipt">
            <div className="qr-button">ตรวจสอบชำระเงิน</div>
          </Link>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default QrCodeScreen;
