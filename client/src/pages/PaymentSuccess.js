import React from "react";
import "./PaymentSuccess.css"; // Import your CSS file
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");

  return (
    <div className="payment-success-container">
      <h1 className="success-message">Payment Successful!</h1>
      {/* <img
        src="https://your-image-url.com/success-image.png" // Replace with your success image URL
        alt="Success"
        width="200"
        height="200"
      /> */}
      {/* You can add additional details or a button to redirect to another page */}
      <h1>Reference No.{referenceNum}</h1>
    </div>
  );
};

export default PaymentSuccess;
