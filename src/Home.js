import { useState } from 'react';
import './App.css';
import CustumInput from './CustomInput';

function Home() {
    const [Rules, SetRules] = useState(false);
//   return (
//     //parent container
//     <div className='w-full h-screen flex flex-col items-center justify-between pt-32 pb-10'>
//       {/* logo container */}
//       <div className='w-full flex flex-col items-center gap-5'>
//         <div className='flex flex-col gap-2'>
//           <div><p className='text-4xl text-center	tracking-[0.5em]'>WORDLE</p></div>
//           <div><p className='text-4xl text-center	tracking-[0.5em]'>GAME</p></div>
//         </div>
//         {/* GAME MENU */}
//         {Rules && <div className='flex flex-col items-center gap-2 bg-[#1A1A1A] border border-black rounded-[16px] mt-10 text-white p-6'>
//             <div className='flex flex-row gap-4'>
//               <h3>How To Play</h3>
//               <button onClick={()=> SetRules(false)} className='border border-white px-1 rounded-full'>X</button>
//             </div>
//             <div className='flex flex-col py-2 gap-4'>
//               <ol>
//                 <li>
//                   <p>. The word that you have to guess Contains 5 characters</p>
//                 </li>
//                 <li>
//                   <p>. You have 6 tries to guess the word.</p>
//                 </li>
//                 <li>
//                   <p>. ON each guess you make you will get the following  :</p>
//                 </li>
//                 <li>
//                   <p>. If the character is in the right place it will be painted in<span className='text-green-600'> GREEN</span>.</p>
//                 </li>
//                 <li>
//                   <p>. If the character is in the WRONG place it will be painted in <span className='text-red-600'> RED</span>.</p>
//                 </li>
//                 <li>
//                   <p>. If the character isn’t part of the word it will be painted in <span className='text-yellow-600'> YELLOW</span>.</p>
//                 </li>
//               </ol>
//             </div>
//           </div>
//         }
//         {!Rules && <div className='flex gap-3 flex-col px-8 py-8 space-bettween bg-[#1A1A1A] border border-black rounded-[16px] mt-10'>
//           <div className='py-2 w-52 text-center bg-white m-auto rounded-[8px] hover:bg-[#D9D9D9]'>
//             <button onClick={()=> SetRules(true)}>How To Play</button>
//           </div>
//           <div className='py-2 w-52 bg-white text-center m-auto rounded-[8px] hover:bg-[#D9D9D9]'>
//           <button >Play</button>
//           </div>
//         </div>}
//       </div>
//       {/* Signature Div */}
//       <div className='text-center'>
//         <p>Created By Ismail</p>
//         <p>El Bakkouchi</p>
//       </div>
//     </div>
//   );
return (
  <div className='w-full h-screen flex flex-col items-center justify-between pt-32 pb-10'>
      {/* logo container */}
      <div className='w-full flex flex-col items-center text-center'>
          <div className='flex flex-col gap-10'>
              <div>
                <p className='text-xl text-center	tracking-[0.5em]'>WORDLE</p>
                <p className='text-xl text-center	tracking-[0.5em]'>GAME</p>
             </div>
              {/* number of tries */}
              <div>
                <p>Tries :</p>
                <p>4</p>
              </div>
              {/* input feild */}
              <div className='flex flex-row gap-1'>
                <CustumInput></CustumInput>
                <CustumInput></CustumInput>
                <CustumInput></CustumInput>
                <CustumInput></CustumInput>
                <CustumInput></CustumInput>
                <CustumInput></CustumInput>
              </div>
              <div className='py-2 w-52 bg-black text-white text-center m-auto rounded-[8px] hover:bg-[#D9D9D9]'>
                 <button >SUBMIT</button>
              </div>
              <div>
                                  
              </div>
          </div>
      </div>
  </div>
)
}

export default Home;
