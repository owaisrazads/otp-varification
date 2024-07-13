import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber, PhoneAuthProvider } from "firebase/auth";
import { auth } from "../config/FirebaseConfig";
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const [phoneInput, setPhoneInput] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handlePhoneForm = async (e) => {
    e.preventDefault();

    if (!phoneInput.startsWith('+')) {
    alert('Please enter the phone number in the format: +CountryCodeNumber');
    return;
  }

  try {
    const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
    const confirmationResult = await signInWithPhoneNumber(auth, phoneInput, recaptcha);
    setConfirmation(confirmationResult);
    console.log('OTP sent:', confirmationResult);
    setConfirmation(confirmationResult)
    // setPhoneInput('');
  } catch (error) {
    console.log('Error sending OTP:', error);
  }
};

  const handleOtpForm = async (e) => {
    e.preventDefault();
    console.log(otp);
  try {
    confirmation.confirm(otp)
  } catch (error) {
    console.log(error);
  }

 
  };

  return (
    <>
      <div className='bg-[#bbd9ec] h-full'>
        <div>
          <form onSubmit={handlePhoneForm} className='flex flex-col justify-center items-center gap-2 h-screen'>
            <input
              type="text"
              placeholder='Enter Your Phone Number'
              className='p-2 rounded-md w-96'
              onChange={(e) => setPhoneInput(e.target.value)}
              value={phoneInput}
            />
            <div id="recaptcha"></div>
            <button type='submit' className='bg-blue-600 p-2 rounded-md text-white'>Send OTP</button>
          </form>

          <form onSubmit={handleOtpForm} className='flex flex-col justify-center items-center gap-2'>
            <input
              type="text"
              placeholder='Enter OTP'
              className='p-2 rounded-md w-96'
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
            />
            <button type='submit' className='bg-blue-600 p-2 rounded-md text-white'>Verify OTP</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page2;
