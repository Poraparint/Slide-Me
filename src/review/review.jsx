import { useState } from "react";
import "./review.css";
import { Link } from "react-router-dom";
import Profile from '../assets/profile.png'

function Review() {
  const [rating, setRating] = useState(0); // เก็บค่าจำนวนดาวที่เลือก

  // ฟังก์ชันกำหนดข้อความตามจำนวนดาว
  const getReviewMessage = () => {
    if (rating === 1) return "So Bad";
    if (rating === 2) return "So So";
    if (rating >= 3) return "GOOD!";
    return ""; // กรณีไม่มีการเลือกดาว
  };

  return (
    <div className="app-container">
      <div className="main-container">
        <div className="header">
          <Link className="link" to="/">
            <button className="back-button">&lt;</button>
          </Link>
          <span className="title">รีวิว</span>
          <button className="close-button">✕</button>
        </div>

        <div className="review-profile">
          <div className="review-profile-pic">
            <img src={Profile} alt="" className="icon" />
          </div>
          <h3 className="">ร้านบัวบางแคร์, จงใจ จำเจริญ</h3>

          {/* แสดงดาวให้คะแนน */}
          <div className="review-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? "selected" : ""}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          {/* แสดงข้อความตามจำนวนดาว */}
          <h1 className="review-goods">{getReviewMessage()}</h1>

          {/* กล่องแสดงความคิดเห็น */}
          <textarea
            className="review-comment"
            placeholder="ความคิดเห็นเพิ่มเติม..."
          ></textarea>

          {/* ปุ่มส่งรีวิว */}
          <Link className="link" to="/thanks">
            <div className="review-btn">ส่งรีวิว</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Review;
