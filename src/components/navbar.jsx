
import "./navbar.css";

function Navbar() {
  return (
    <div className="footer-containe">
      <div className="footer">
        <div className="footer-button">
          <i className="fa-solid fa-house"></i>
          <p>หน้าหลัก</p>
        </div>
        <div className="footer-button">
          <i className="fa-solid fa-bars"></i>
          <p>รายการ</p>
        </div>
        <div className="footer-button">
          <i className="fa-regular fa-bell"></i>
          <p>แจ้งเตือน</p>
        </div>
        <div className="footer-button">
          <i className="fa-regular fa-circle-user"></i>
          <p>บัญชี</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
