import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <div>
      <section>
        <video autoPlay muted loop className='intro'>         
          <source src="/introVid.mp4" type="video/mp4"/>       
        </video>
      </section>
      <div>
        <h1>this is just some filler so that i can see if the video and footer move</h1>
        <h1>this is just some filler so that i can see if the video and footer move</h1>
        <h1>this is just some filler so that i can see if the video and footer move</h1>
        <h1>this is just some filler so that i can see if the video and footer move</h1>
        <h1>this is just some filler so that i can see if the video and footer move</h1>
        <h1>this is just some filler so that i can see if the video and footer move</h1>
        <h1>this is just some filler so that i can see if the video and footer move</h1>
        <h1>this is just some filler so that i can see if the video and footer move</h1>

      </div>
      <footer>
        <p><b>Find me on other platforms:</b></p>
        <ul>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
      </footer>
    </div>
  )
}
