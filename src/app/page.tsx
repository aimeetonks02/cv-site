import React from 'react'
import School from './schoolInfo'
import Work from './workExp'
import Courses from './comCourses'
import Language from './languages'
import Dissertation from './dissertation'
import Intro from './intro'

export default function Home() {
  return (
    <div>
      <div className='intro'>
        <video autoPlay muted loop className='intro'>         
          <source src="/introVid.mp4" type="video/mp4"/>  
          <p>Sorry, your browser doesn&apos;t support video elements</p>     
        </video>
      </div>

      <div className='separator'>
        <div className='item'/>
        <div className='item'/>
        <div className='item'/>
        <div className='item'/>
      </div>

      <div className='title'>
        <h1>Hi, I&apos;m Aimee</h1>
        <p>Welcome to my Digital CV!</p>
      </div>

      <div>
        <Intro/>
      </div>
      <div className='section'>
        <div className='share'>
          <Work/>
          <Dissertation/>
        </div>

        <div className='share'>
          <div>
            <Courses/>
          </div>

          <div>
            <Language/>
          </div>
        </div>
      </div>
      <div>
        <School/>
      </div>

      <footer>
        <h3><b>Find me on other platforms:</b></h3>
          <a href='https://www.linkedin.com/in/aimee-tonks-1a3b5622b/'>LinkedIn</a><br/>
          <a href='https://github.com/aimeetonks02'>GitHub</a><br/>
          <p>aimztonks@gmail.com</p>
      </footer>
    </div>
  )
}
