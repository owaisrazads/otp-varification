import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../config/FirebaseConfig";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const [phoneInput, setPhoneInput] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false); // New state to track OTP sent status
  const navigate = useNavigate()



  //pehla form function start
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
      setIsOtpSent(true); // Set OTP sent status to true

      Swal.fire({
        title: 'OTP Sent',
        text: 'Please check your phone for the OTP.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false,
      });

 
    } catch (error) {
      console.log('Error sending OTP:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to send OTP. Please try again.',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };

  //pehla form function  end




  //dosra form function  start

  const handleOtpForm = async (e) => {
    e.preventDefault();

    try {
      const result = await confirmation.confirm(otp);
      const user = result.user;
      console.log('User signed in:', user);
      Swal.fire({
        title: 'Success',
        text: 'OTP verified successfully!',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
      navigate('/page3')
      // Navigate or perform any further action after successful verification
    } catch (error) {
      console.log('Error verifying OTP:', error);
      Swal.fire({
        title: 'Error',
        text: 'Invalid OTP. Please try again.',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };

  //dosra form function end

  return (
    <div className='bg-blue-200 h-full'>
      <div className=''>
        {!isOtpSent ? (
          <form onSubmit={handlePhoneForm} className='flex flex-col justify-center items-center gap-2 h-screen '>
            <p className='font-semibold'>Enter Your Phone Number</p>
            <input
              type="text"
              placeholder='Enter Your Phone Number'
              className='p-2 rounded-md w-96 max-[460px]:w-64'
              onChange={(e) => setPhoneInput(e.target.value)}
              value={phoneInput}
            />
            <div id="recaptcha"></div>
            <button type='submit' className='bg-blue-600 p-2 rounded-md text-white max-[460px]:w-64'>Send OTP</button>
          </form>
        ) : (
          <form onSubmit={handleOtpForm} className='flex flex-col justify-center items-center gap-2 h-screen'>
            <p className='font-semibold'>Enter OTP</p>

            <input
              type="text"
              placeholder='Enter OTP'
              className='p-2 rounded-md w-96 max-[460px]:w-64'
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
            />
            <button type='submit' className='bg-blue-600 p-2 rounded-md text-white max-[460px]:w-64'>Verify OTP</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Page2;
