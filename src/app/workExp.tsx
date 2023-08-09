import Image from 'next/image'
import React from 'react'

export default function Work() {
  return (
    <div className='fill'>
        <h1>Work Experience</h1>
        <small>Up to date as of 09/08/2023</small>
        <div className='year'>
            <h2>Keele University Students Union</h2>
            <p>Student Commercial Host</p>
            <small>May 2022 - May 2024</small>
            <p><u>Relevant Skills:</u></p>
            <ul>
                <li>Learnt to work well in a team to produce a high-quality product</li>
                <li>Learnt to understand others' needs and incorporate them into the workflow 
                    to make sure that everything gets finished</li>
                <li>Learnt to work well and maintain composure when dealing with difficult customers or colleagues</li>
                <li>Learnt to manage pressure to work best in a fast-paced environment</li>
            </ul>
        </div>
        <div className='year'>
            <h2>Destination Vinyl Ltd</h2>
            <p>Order Packer</p>
            <small>October 2020 - December 2020</small>
            <p><u>Relevant Skills:</u></p>
            <ul>
                <li>Learnt to work well individually to meet quotas</li>
                <li>Learnt good time management skills</li>
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
            <p>This job inspired me to create my A Level project in order to improve the shop's efficiency. I built 
                a program that would keep track of stock levels, automatically reorder products when they hit a certain
                level and email the business owner with what, and how much of each product, was ordered.
            </p>
        </div>
    </div>
  )
}