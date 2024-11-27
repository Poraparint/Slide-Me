import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import ไฟล์มาเพื่อสร้างเส้นทาง Link
import Coupon from '../src/coupon/coupon.jsx'
import Notification from '../src/notification/notification.jsx'
import Offer from '../src/offer/offer.jsx'
import Payment from '../src/payment/payment.jsx'
import Recipt from '../src/recipt/recipt.jsx'
import Screen from './screen/screen.jsx'
import Status from '../src/status/status.jsx'
import Review from './review/review.jsx'
import QrCodeScreen from './qrcodescreen/qrcodescreen.jsx'
import Thanks from './Thanks/thanks.jsx'

import './index.css'
import App from './App.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "coupon",
    element: <Coupon />,
  },
  {
    path: "notification",
    element: <Notification />,
  },

  {
    path: "offer",
    element: <Offer />,
  },

  {
    path: "payment",
    element: <Payment />,
  },
  {
    path: "recipt",
    element: <Recipt />,
  },
  {
    path: "screen",
    element: <Screen />,
  },
  {
    path: "status",
    element: <Status />,
  },
  {
    path: "review",
    element: <Review />,
  },
  {
    path: "qrcodescreen",
    element: <QrCodeScreen />,
  },
  {
    path: "thanks",
    element: <Thanks />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
