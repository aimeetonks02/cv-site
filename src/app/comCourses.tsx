import React from 'react'

export default function Courses() {
  return (
    <div className='fill'>
        <h1>Extracurricular Courses and Excursions</h1>
        <small>Here are some courses and events that I have completed during my breaks from university</small>
        <div className='year'>
            <h2>Courses from Scrimba:</h2>
            <ul>
                <li>Learn HTML and CSS - <a href='https://scrimba.com/learn/htmlandcss'>(Click Here)</a></li>
                <li>Learn JavaScript - <a href='https://scrimba.com/learn/learnjavascript'>(Click Here)</a></li>
                <li>Learn React - <a href='https://scrimba.com/learn/learnreact'>(Click Here)</a></li>
            </ul>
        </div>
        <div className='year'>
            <h2>Excursions:</h2>
            <ul>
              <li>Attended the <a href='https://aws.amazon.com/events/summits/london/'>AWS Summit 2023</a>
               at the ExCeL Centre, London</li>
              <li>Attended the <a href='https://www.manchestertechfestival.co.uk/'>Manchester Tech Festival 2023</a>
               at Victoria Baths, Manchester</li>
            </ul>
        </div>
    </div>
  )
}