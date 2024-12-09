import React from 'react';
import Terminal from './components/Terminal';
import Hero from './components/Hero';
import BgVideo from './assets/bg2.mp4'

function App() {
  return <div className='min-h-screen bg-black text-white p-4 font-mono'>
    <video src={BgVideo} playsInline autoPlay muted loop className='absolute object-cover opacity-20 inset-0 min-h-full h-screen w-full z-[1]' />
    <Hero />

<Terminal />
  </div>;
}

export default App;