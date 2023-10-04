import React, { useState } from 'react';

const PhoneNumberVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = () => {
    // In a real application, you would make an API request to send OTP to the provided phone number.
    // For this example, we'll simulate sending OTP.
    const randomOtp = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit OTP
    alert(`OTP sent to ${phoneNumber}: ${randomOtp}`);
  };

  const handleVerifyOtp = () => {
    // In a real application, you would make an API request to verify the OTP.
    // For this example, we'll simulate OTP verification.
    const isValidOtp = otp.length === 4 && /^\d+$/.test(otp); // Simple validation
    setIsVerified(isValidOtp);
    if (isValidOtp) {
      alert('OTP verified successfully!');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div>
      <h1>Phone Number Verification</h1>
      {!isVerified ? (
        <div>
          <label>Enter Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
          />
          <button onClick={handleSendOtp}>Send OTP</button>

          <label>Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter OTP"
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      ) : (
        <div>
          <p>Phone Number Verified!</p>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberVerification;
