import React from 'react'
import Install from './Components/Contents/Intro/install'
import './App.css'
import ReactComponentsGuide from './Components/Contents/compTypes/ReactComponentsGuide'
import ReactPropsGuide from './Components/Contents/Props/ReactPropsGuide'
import ReactStateGuide from './Components/Contents/States/ReactStateGuide'
import Counter from './Components/Contents/States/Counter'
import ReactClassStateGuide from './Components/Contents/States/ReactClassStateGuide'

export default function App() {
  return (
    <div className='bg-gray-300 overflow-x-hidden'>
      <div className='mb-5'>
        < Install />
      </div>

      <div className='mb-5'>
        <ReactComponentsGuide />
      </div>

      <div className='mb-5'>
        <ReactPropsGuide />
      </div>

      <div className='mb-5'>
        <ReactStateGuide />
        <Counter />
      </div>
      <div>
        <ReactClassStateGuide />
      </div>
    </div>
  )
}