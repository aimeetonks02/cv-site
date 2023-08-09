import Image from 'next/image'
import React from 'react'

export default function Language() {
  return (
    <div className='fill'>
        <h1>Programming Languages</h1>
        <small>These are the languages that I have had experience with from Secondary School
            through to the end of my second year at University.
        </small>
        <div className='stack'>
            <div className='year'>
                <img src='/pLogo.svg' alt='Python Logo'/>
                <h2>Python</h2>
                <small>Time Practiced: 8 Years</small>
                <p>Originally, I started learning Python with my dad when I was in Primary School, however, 
                    I wouldnt say that I officially started programming in Python until the beginning of 
                    High School as this was the language we used in our classes.
                </p> <br/>
                <p>It's also the language I used to write my A level project at College.</p>
            </div>
            <div className='year'>
                <img src='/jLogo.png' alt='Java Logo'/>
                <h2>Java</h2>
                <small>Time Practiced: 4 Years</small>
            </div>
            <div className='year'>
                <img src='/jsLogo.png' alt='JavaScript Logo'/>
                <h2>JavaScript</h2>
                <small>Time Practiced: 2 Years</small>
            </div>
            <div className='year'>
                <img src='/htmlLogo.png' alt='HTML Logo'/>
                <h2>HTML</h2>
                <small>Time Practiced: 2 Years</small>
            </div>
            <div className='year'>
                <img src='/cssLogo.png' alt='CSS Logo'/>
                <h2>CSS</h2>
                <small>Time Practiced: 2 Years</small>
            </div>
            <div className='year'>
                <img src='/reactLogo.svg' alt='React Logo'/>
                <img src='/next.svg' alt='Next.js Logo'/>
                <h2>React & Next.js</h2>
                <small>Time Practiced: 4 Months</small>
            </div>
        </div>
    </div>
  )
}