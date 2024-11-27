import "./Coupon.css";
import { Link } from "react-router-dom";
import Couponbg from "../assets/coupon.png";

function Coupon() {
  return (
    <div className="app-container">
      <div className="main-container">
        <div className="coupon-container">
          <div className="header">
            <Link className="link" to="/">
              <button className="back-button">&lt;</button>
            </Link>
            <span className="title">Coupon</span>
            <button className="close-button">×</button>
          </div>
          <div className="coupon">
            <div className="coupon-text">
              <div className="coupon-text-customer">ลูกค้าใหม่</div>
              <button className="redeem-button">Redeem</button>
            </div>

            <img src={Couponbg} alt="" />
          </div>
          <div className="details">
            <h3>โค้ดส่วนลดลูกค้าใหม่</h3>
            <p>ใช้งานครั้งแรกรับส่วนลดทันที 25% ทันที</p>
            <p>
              เพียงใส่โค้ด <strong>Newsideme25</strong> รับส่วนลดทันที
            </p>
            <h6 className="expiry">Exp 30/12/2025</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
