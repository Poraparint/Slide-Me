import './thanks.css'
import { Link } from 'react-router-dom';

function thanks() {
  return (
    <div className="app-container">
      <div className="main-container">
        <div className='thanks-box'>
          <i className="fa-regular fa-thumbs-up"></i>
          <h1>thankYou</h1>
          <p>Your Feedback was Successfully Submitted</p>
          <Link className='link' to="/"><div className='BTH'>Back To Home</div></Link>
        </div>
      </div>
    </div>
  );
}

export default thanks