import React from 'react'

export default function Work() {
  return (
    <div className='fill'>
        <h1>Work Experience</h1>
        <small>Up to date as of 01/01/2024</small>
        <div className='year'>
            <h2>Newcastle Academy</h2>
            <p>Teaching Assistant</p>
            <small>September 2023 - Present</small>
            <p>For my &apos;Computing in Education&apos; module, I have been working one day a week at a local highschool to 
                gain experience in teaching Computing to secondary school students. I have been working with the 
                Year 9 and Year 10 classes, helping them to learn Python and the theory of computing.
            </p>
            <p>The end goal of this module is for me to present a lesson on computing by myself. Currently, I am planning to
                teach the Year 7 classes about the basics of generative AI, how it works, and how it could become an issue in schools.
            </p>
            <p><u>Relevant Skills:</u></p>
            <ul>
                <li>Learnt how to effectively communicate with students of different ages and abilities</li>
                <li>Learnt how to plan and deliver a lesson</li>
                <li>Learnt how to manage a classroom</li>
                <li>Learnt how to use different teaching methods to help students understand</li>
            </ul>
        </div>
        <div className='year'>
            <h2>Keele University Students&apos; Union</h2>
            <p>Student Commercial Host</p>
            <small>May 2022 - Present</small>
            <p><u>Relevant Skills:</u></p>
            <ul>
                <li>Learnt how to work well in a team to produce a high-quality product</li>
                <li>Learnt how to understand others&apos; needs and incorporate them into the workflow 
                    to make sure that everything gets finished</li>
                <li>Learnt how to work well and maintain composure when dealing with difficult customers or colleagues</li>
                <li>Learnt how to manage pressure to work best in a fast-paced environment</li>
            </ul>
        </div>
        <div className='year'>
            <h2>Destination Vinyl Ltd</h2>
            <p>Order Packer</p>
            <small>October 2020 - December 2020</small>
            <p><u>Relevant Skills:</u></p>
            <ul>
                <li>Learnt how to work well individually to meet quotas</li>
                <li>Learnt how to have good time management skills</li>
            </ul>
        </div>
        <div className='year'>
            <h2>The Music Rooms</h2>
            <p>Stock Taker</p>
            <small>January 2020 - March 2020</small>
            <p><u>Relevant Skills:</u></p>
            <ul>
                <li>Learnt how to keep track of stock and fill out order forms</li>
                <li>Learnt integral money handling skills</li>
            </ul><br/>
            <p><b><em>Point of Interest</em></b></p>
            <p>This job inspired me to create my A Level project in order to improve the shop&apos;s efficiency. I built 
                a program that would keep track of stock levels, automatically reorder products when they hit a certain
                level and email the business owner with what, and how much of each product, was ordered.
            </p>
        </div>
    </div>
  )
}