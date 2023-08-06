import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <div>
      <div className='intro'>
        <video autoPlay muted loop className='intro'>         
          <source src="/introVid.mp4" type="video/mp4"/>  
          <p>Sorry, your browser doesn't support video elements</p>     
        </video>
      </div>
      <div className='separator'>
        <div className='item'/>
        <div className='item'/>
        <div className='item'/>
        <div className='item'/>
      </div>
      <div className='title'>
        <h1>Hi, I'm Aimee</h1>
      </div>
      <div className='fill'>
        <p>this is just some filler so that i can see if the video and footer move</p>
        <p>this is just some filler so that i can see if the video and footer move</p>
        <p>this is just some filler so that i can see if the video and footer move</p>
        <p>this is just some filler so that i can see if the video and footer move</p>
        <p>this is just some filler so that i can see if the video and footer move</p>
        <p>this is just some filler so that i can see if the video and footer move</p>
        <p>this is just some filler so that i can see if the video and footer move</p>
        <p>this is just some filler so that i can see if the video and footer move</p>

      </div>
      <footer>
        <h3><b>Find me on other platforms:</b></h3>
        <ul>
          <li><a href='https://www.linkedin.com/in/aimee-tonks-1a3b5622b/'>LinkedIn</a></li>
          <li><a href='https://github.com/aimeetonks02'>GitHub</a></li>
        </ul>
      </footer>
    </div>
  )
}
