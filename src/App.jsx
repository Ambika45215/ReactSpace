import React from 'react'
import Install from './Components/Contents/Intro/install'
import './App.css'
import ReactComponentsGuide from './Components/Contents/compTypes/ReactComponentsGuide'
import ReactPropsGuide from './Components/Contents/Props/ReactPropsGuide'
import ReactStateGuide from './Components/Contents/States/ReactStateGuide'

export default function App() {
  return (
    <div className='bg-gray-300'>
      <div className='mb-5'>
        < Install />
      </div>

      <div className='mb-5'>
        <ReactComponentsGuide />
      </div>

      <div className='mb-5'>
        <ReactPropsGuide/>
      </div>

      <div>
        <ReactStateGuide/>
      </div>
    </div>
  )
}