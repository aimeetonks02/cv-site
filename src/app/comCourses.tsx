import Image from 'next/image'
import React from 'react'

export default function Courses() {
  return (
    <div className='fill'>
        <h1>Relevant Courses</h1>
        <small>Here are some courses that I have completed during my breaks from university</small>
        <div className='year'>
            <h2>Courses from Scrimba:</h2>
            <ul>
                <li>Learn HTML and CSS</li>
                <li>Learn JavaScript</li>
                <li>Learn React</li>
                <li>Learn Responsive Design</li>
            </ul>
        </div>
    </div>
  )
}