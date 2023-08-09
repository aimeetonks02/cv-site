import Image from 'next/image'
import React from 'react'

export default function School() {
  return (
    <div className='fill'>
        <h1>Education</h1>
        <div>
            <h2><b><u>Keele University</u></b></h2>
            <small><b>2021-2024</b></small>
            <div className='section'>
                <div className='year'>
                    <h3>First Year</h3>
                    <ul>
                        <li>Programming I - Programming Fundamentals</li>
                        <li>Fundamentals of Programming</li>
                        <li>Introduction to Interaction Design</li>
                        <li>Communication, Confidence, and Competence</li>
                        <li>Cybercrime</li>
                        <li>Computer Animation and Multimedia</li>
                        <li>Natural Computation</li>
                        <li>British Sign Language 1</li>
                    </ul>
                </div>
                <div className='year'>
                    <h3>Second Year</h3>
                    <ul>
                        <li>Programming II - Data Structures and Algorithms</li>
                        <li>Advanced Programming Practices</li>
                        <li>Web Technologies</li>
                        <li>Database Systems</li>
                        <li>Mobile Application Development</li>
                        <li>Software Englineering</li>
                        <li>Computational and Artificial Intellingence</li>
                        <li>Digital Forensics</li>
                    </ul>
                </div>
                <div className='year'>
                    <h3>Final Year</h3>
                    <ul>
                        <li>Third Year Double Project - ISP</li>
                        <li>Softwre Engineering Project Management</li>
                        <li>Computing in Education</li>
                        <li>Games Computing</li>
                        <li>Cyber Security</li>
                        <li>Advanced Web Technologies</li>
                    </ul>
                </div>
            </div>
            <h2><b><u>Selby College</u></b></h2>
            <small><b>2019-2021</b></small>
            <div className='year'>
                <p>3 x A Levels: Grades ABC</p>
                <p>1 x AS Level: Grade A</p>
            </div>
            <h2><b><u>Brayton Academy</u></b></h2>
            <small><b>2014-2019</b></small>
            <div className='year'>
                <p>11 GCSEs: Grades 8-5</p>
            </div>
        </div>
    </div>

  )}