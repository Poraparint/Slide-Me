import "./screen.css";
import { useState } from "react";

import CreditCardIcon from "../assets/credit-card.png";
import PaypalIcon from "../assets/paypal.png";
import QRPromptpayIcon from "../assets/qr-promptpay.png";
import VisaIcon from '../assets/visa.png'
import MastercardIcon from "../assets/mastercard.png";

import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

function Screen() {

   const [selectedOption, setSelectedOption] = useState(""); // เก็บตัวเลือกที่ถูกเลือก

   // ฟังก์ชันสำหรับตั้งค่าตัวเลือก
   const handleSelectOption = (option) => {
     setSelectedOption(option); // อัปเดตสถานะเมื่อมีการเลือกตัวเลือก
   };
  
  return (
    <div className="app-container">
      <div className="main-container">
        <div className="payment-screen">
          <div className="header">
            <Link className="link" to="/">
              <button className="back-button">&lt;</button>
            </Link>
            <span className="title">การชำระเงิน</span>
            <button className="close-button">✕</button>
          </div>
          <div className="payment-option">
            {/* ตัวเลือก Credit/Debit */}
            <div
              className={`option-card ${
                selectedOption === "credit" ? "selected" : ""
              }`}
              onClick={() => handleSelectOption("credit")}
            >
              <img src={CreditCardIcon} alt="Credit Card" className="icon" />
              <span>บัตรเครดิต / บัตรเดบิต</span>
              <div className="card-logos">
                <img src={VisaIcon} alt="Visa" className="small-icon" />
                <img
                  src={MastercardIcon}
                  alt="Mastercard"
                  className="small-icon"
                />
              </div>
            </div>

            {/* ตัวเลือก PayPal */}
            <div
              className={`option-card ${
                selectedOption === "paypal" ? "selected" : ""
              }`}
              onClick={() => handleSelectOption("paypal")}
            >
              <img src={PaypalIcon} alt="Paypal" className="icon" />
              <span>Paypal</span>
              <span className="card-number">5548****7688</span>
            </div>

            {/* ตัวเลือก QR Promptpay */}
            <Link className="link" to="/qrcodescreen">
              <div className="option-card">
                <img
                  src={QRPromptpayIcon}
                  alt="QR Promptpay"
                  className="icon"
                />
                <span>QR Promptpay</span>
              </div>
            </Link>

            {/* ตัวเลือก Add Card */}
            <Link className="link" to="/payment">
              <div className="option-addcard">
                <span>Add card</span>
              </div>
            </Link>

            {/* ปุ่มตกลง */}
            <Link className="link" to="/recipt">
              <div className="btn">ตกลง</div>
            </Link>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Screen;