import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import {auth, db} from "../config/FirebaseConfig"
import { useNavigate } from 'react-router-dom';


const Page1 = () => {


const  [inputUpi, setInputUpi] = useState('')
const navigate = useNavigate()


const handleUpiForm = async(e) => {
e.preventDefault()

try {
  const docRef = await addDoc(collection(db, "users"), {
    Upi: inputUpi,
  
  });
  console.log("Document written with ID: ", docRef.id);
  navigate('/page2')
} catch (e) {
  console.error("Error adding document: ", e);
}
setInputUpi('')
console.log(inputUpi);
}

  return (
    <>
     <div className='bg-blue-200 h-screen'>
      
   <div>
    <form onSubmit={handleUpiForm} className='flex flex-col justify-center items-center gap-2 h-screen'>
      <p className='font-semibold'>Enter Your UPI'ID</p>
      <input type="text" placeholder='Enter Your UPID'  className='p-2 rounded-md w-96 max-[460px]:w-64' onChange={(e)=>setInputUpi(e.target.value)} value={inputUpi}/>
      <button type='submit' className='bg-blue-600 mt-1 p-2 rounded-md max-[460px]:w-64 text-white'>Submit</button>
    </form>
   </div>
      </div> 
    </>
  )
}

export default Page1
