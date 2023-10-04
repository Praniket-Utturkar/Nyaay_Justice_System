import React, { useState, useEffect, useRef } from 'react';
import Canvas from 'canvas';

const CaptchaGenerator = () => {
  const [captcha, setCaptcha] = useState('');
  const [userInput, setUserInput] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters[randomIndex];
    }

    setCaptcha(captcha);
    drawCaptcha(captcha);
  };

  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the text
    ctx.font = '30px Arial';
    ctx.fillText(text, 10, 30);
  };

  const handleRefresh = () => {
    generateCaptcha();
    setUserInput('');
  };

  const handleSubmit = () => {
    if (userInput.toLowerCase() === captcha.toLowerCase()) {
      alert('CAPTCHA is correct!');
    } else {
      alert('CAPTCHA is incorrect. Please try again.');
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} width="200" height="50"></canvas>
      <button onClick={handleRefresh} className='p-1  bg-gray-400 rounded-md '>Refresh</button>
      <br />
      <input
        type="text"
        placeholder=" Enter CAPTCHA"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSubmit} className='p-1 m-1 bg-gray-400 rounded-md '>Submit</button>
    </div>
  );
};

export default CaptchaGenerator;
