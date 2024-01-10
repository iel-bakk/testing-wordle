import './App.css';

function Game() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-between pt-32 pb-10'>
            {/* logo container */}
            <div className='w-full flex flex-col items-center gap-5'>
                <div className='flex flex-col gap-2'>
                    <div>
                        <p className='text-4xl text-center	tracking-[0.5em]'>WORDLE</p>
                    </div>
                    <div>
                        <p className='text-4xl text-center	tracking-[0.5em]'>GAME</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game;