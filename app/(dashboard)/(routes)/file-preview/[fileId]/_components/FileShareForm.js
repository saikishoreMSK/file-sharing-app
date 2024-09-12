// import React, { useState } from 'react';
// import { Copy } from 'lucide-react';

// const FileShareForm = ({ file, onPasswordSave }) => {
//   const [isPasswordEnable, setIsPasswordEnable] = useState(false);
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [isEmailValid, setIsEmailValid] = useState(false);

//   const validateEmail = (email) => {
//     // Simple email validation regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleEmailChange = (e) => {
//     const enteredEmail = e.target.value;
//     setEmail(enteredEmail);
//     setIsEmailValid(validateEmail(enteredEmail)); // Update validity state
//   };

//   const handleCopyUrl = () => {
//     navigator.clipboard.writeText(file.shortUrl);
//     alert('URL Copied to Clipboard!');
//   };

//   return file && (
//     <div className="flex flex-col gap-2">
//       <div>
//         <label className="text-[14px] text-gray-500">Short Url</label>
//         <div className="flex gap-2 p-2 border rounded-md">
//           <input type="text" value={file.shortUrl} disabled className="disabled:text-gray-500 bg-transparent outline-none w-full" />
//           <Copy className="text-gray-400 hover:text-primary" onClick={handleCopyUrl} />
//         </div>
//       </div>

//       <div className="gap-3 flex mt-5">
//         <input type="checkbox" onChange={() => setIsPasswordEnable(!isPasswordEnable)} />
//         <label>Enable Password?</label>
//       </div>

//       {isPasswordEnable && (
//         <div className="flex gap-3 items-center">
//           <div className="border rounded-md w-full p-2">
//             <input
//               type="password"
//               className="disabled:text-gray-500 bg-transparent outline-none"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             className="bg-primary text-white p-2 rounded-md disabled:bg-gray-300 hover:bg-blue-600"
//             disabled={password?.length < 4}
//             onClick={() => onPasswordSave(password)}
//           >
//             Save
//           </button>
//         </div>
//       )}

//       <div className="border rounded-md p-2 mt-3">
//         <label className="text-[14px] text-gray-500">Send File to Email</label>
//         <div className="border rounded-md p-2">
//           <input
//             className="bg-transparent outline-none"
//             type="email"
//             placeholder="example@gmail.com"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <button
//           className="p-2 w-full mt-2 rounded-md text-white bg-primary disabled:bg-gray-300 hover:bg-blue-600"
//           disabled={!isEmailValid} // Button enabled only if email is valid
//         >
//           Send Email
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FileShareForm;
import React,{useState} from 'react'
import { Copy,CopyIcon } from 'lucide-react'

const FileShareForm = ({file,onPasswordSave}) => {
    const [isPasswordEnable,setIsPasswordEnable] = useState(false);
    const [password,setPassword] = useState('');
  return file&&(
    <div className='flex flex-col gap-2 border bg-gray-200 rounded-md p-3'>
      <div>
        <label className='text-[14px] text-gray-500'>Short Url</label>
        <div className='flex gap-2 p-2 border rounded-md'>
            <input type='text' value={file.shortUrl} disabled 
            className='disabled:text-gray-500 bg-gray-100 rounded-md p-2 outline-none w-full'/>
            <Copy className='text-gray-400 hover:text-primary'/>
        </div>
      </div>
      <div className='gap-3 flex mt-5'>
        <input type='checkbox' onChange={(e)=>setIsPasswordEnable(true)}/>
        <label>Enable Password?</label>
      </div>
      {isPasswordEnable?
      <div className='flex gap-3 items-center'>
        <div className='border rounded-md w-full p-2'>
            <input type='password' className='disabled:text-gray-500 bg-gray-100 rounded-md w-full p-2
            outline-none' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className='bg-primary text-white p-2 rounded-md
        disabled:bg-gray-300 hover:bg-blue-600'
        disabled={password?.length<4}
        onClick={()=>onPasswordSave(password)}>Save</button> 
      </div>:null}

      <div className='border rounded-md p-2 mt-3'>
        <label className='text-[14px] text-gray-500'>Send File to Email</label>
        <div className='border rounded-md py-2'>
          <input className='bg-gray-100 w-full rounded-md p-2 outline-none' type='email' placeholder='example@gmail.com'/>
        </div>
        <button className='p-2 w-full mt-2 rounded-md text-white bg-primary
        disabled:bg-gray-300 hover:bg-blue-600'>Send Email</button>
      </div>
    </div>
  )
}

export default FileShareForm
