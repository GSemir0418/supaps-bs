import React from 'react'
import './Home.scss'
import headerBg from '../img/header.png'

export default function Home () {
  return (
    <div className='home'>
      
        <header style={{ backgroundImage: `url(${headerBg})` }}>
          SupAPS大屏展示
        </header>

        <main>
          <section className=' bordered section1'></section>
          <section className=' bordered section2'></section>
          <section className=' bordered section3'></section>
          <section className=' bordered section4'></section>
          <section className=' bordered section5'></section>
          <section className=' bordered section6'></section>
          <section className=' bordered section7'></section>
          <section className=' bordered section8'></section>
        </main>
    </div>
  )
}
