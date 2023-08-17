import React from 'react'

export default function Courses() {
  return (
    <div className='fill'>
        <h1>Relevant Courses</h1>
        <small>Here are some courses that I have completed during my breaks from university</small>
        <div className='year'>
            <h2>Courses from Scrimba:</h2>
            <ul>
                <li>Learn HTML and CSS - <a href='https://scrimba.com/learn/htmlandcss'>(Click Here)</a></li>
                <li>Learn JavaScript - <a href='https://scrimba.com/learn/learnjavascript'>(Click Here)</a></li>
                <li>Learn React - <a href='https://scrimba.com/learn/learnreact'>(Click Here)</a></li>
            </ul>
        </div>
    </div>
  )
}