import './App.css';
import React from 'react';
import CustumInput from './CustomInput';
import Guess from './Guess';
import { useStoreState } from 'easy-peasy';

function Game() {
    const tries = useStoreState((store)=> store.tries);
    // const win = useStoreState((store)=> store.win);
    // if (win){
    //   // redirect to win page
    // }
    // if (tries === 5) {
    //   // handle logic to win or lose
    // }
    // const Verify = useStoreState((store)=> store.Verify)
    return (
        <div className='w-full h-screen flex flex-col items-center justify-between pt-35 pb-6'>
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
                      <p>{tries}</p>
                    </div>
                    {/* input feild */}
                      <CustumInput></CustumInput>
                    {/* <div className='py-2 w-52 bg-black text-white text-center m-auto rounded-[8px] hover:bg-[#D9D9D9]'>
                       <button>SUBMIT</button>
                    </div> */}
                    <div className='bg-black text-white rounded'>
                      <Guess></Guess>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Game;