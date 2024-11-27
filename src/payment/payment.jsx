import { useState } from "react";
import "./payment.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Payment() {
  const [selectedOption, setSelectedOption] = useState("Debit"); // ค่าเริ่มต้นเป็น Debit Card

  return (
    <div className="app-container">
      <div className="main-container">
        <div className="payment-container">
          <div className="header">
            <Link className="link" to="/screen">
              <button className="close-btn">&larr;</button>
            </Link>
            <span className="title">เพิ่มการชำระเงิน</span>
          </div>

          <div className="payment-form-container">
            {/* ตัวเลือก Debit / Credit Card */}
            <div className="choose-card">
              <div
                className={`card-option ${
                  selectedOption === "Debit" ? "active" : ""
                }`}
                onClick={() => setSelectedOption("Debit")}
              >
                Debit Card
                {selectedOption === "Debit" && <hr />}
              </div>
              <div
                className={`card-option ${
                  selectedOption === "Credit" ? "active" : ""
                }`}
                onClick={() => setSelectedOption("Credit")}
              >
                Credit Card
                {selectedOption === "Credit" && <hr />}
              </div>
            </div>

            {/* ฟอร์มกรอกข้อมูล */}
            <div className="input-box">
              <label htmlFor="">หมายเลขบัตร</label>
              <input type="text" />
            </div>

            <div className="input-box-middle">
              <div className="input-box">
                <label htmlFor="">วันหมดอายุ</label>
                <input type="text" />
              </div>

              <div className="input-box">
                <label htmlFor="">CVV</label>
                <input type="text" />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">ชื่อบนบัตร</label>
              <input type="text" />
            </div>

            <p className="info-text">
              ระบบอาจทำการหักเงินเพื่อยืนยันบัตรของคุณ
              โดยเงินที่หักจะถูกคืนอัตโนมัติภายหลังได้รับการยืนยัน
            </p>
            <p className="info-text">
              การเพิ่มบัตรโดยการกดปุ่ม บันทึกบัตร ด้านล่าง
              ถือว่าคุณยินยอมที่จะให้ข้อมูลสาขาด้านกับธนาคารกรุงไทยเพื่อใช้ในการประมวลผลสำหรับชำระเงินโดยข้อมูลของคุณจะได้รับการจัดการภายใต้
              <a href="#"> นโยบายการคุ้มครองข้อมูลส่วนบุคคล</a>
            </p>
            <Link className="link" to="/screen">
            <button className="save-btn">
              บันทึกบัตร
              </button>
              </Link>
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Payment;
