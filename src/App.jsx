import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className='flex justify-center min-h-screen'>
      <div className='max-w-[900px] w-full text-center'>
        <Hero />
        <Projects />
      </div>
    </div>
  )
}
