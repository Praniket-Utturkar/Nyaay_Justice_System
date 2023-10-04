import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const MobileVerification = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOTP] = useState('');

  const handleSendOTP = async () => {
    try {
      const response = await axios.post('/api/send-otp', { mobileNumber });
      toast.success('OTP sent successfully!');
    } catch (error) {
      toast.error('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('/api/verify-otp', { mobileNumber, otp });
      toast.success('OTP verified successfully!');
    } catch (error) {
      toast.error('Invalid OTP. Please try again.');
    }
  };

  return (
    <div>
      <h2>Mobile Verification</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>
      <br />
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  );
};

export default MobileVerification;