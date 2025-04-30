import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/Calculator'
import Cards from './components/Cards'
import Questions from './components/PopQuiz/Questions'
import DisplayCards from './components/Cards'
import DisplayQuiz from './components/PopQuiz/DisplayQuiz'

function App() {
  return(
    <>
      <div className='bg-linear-to-br from-slate-600 to-slate-900 h-dvh w-full flex items-center justify-center relative overflow-clip'>
          <Calculator />
      </div>
      <div className='bg-linear-to-br from-slate-600 to-slate-900 h-dvh w-full flex items-center justify-center relative overflow-clip'>
          <Cards />
      </div>
      <div className='bg-linear-to-br from-slate-600 to-slate-900 h-dvh w-full flex items-center justify-center relative overflow-clip'>
          <DisplayQuiz />
      </div>
    </>
  )
}

export default App
