import React from 'react'

export default function Dissertation() {
  return (
    <div className='fill'>
        <h1>Dissertation</h1>
        <small>Here is an overview of my final year dissertation which will be updated as I progress through the year.
        </small>
        <div className='year'>
            <h2>Working title</h2>
            <p><em>The effect of AI on Web Development and those in the sector</em></p>
        </div>
        <div className='year'>
            <h2>The Idea:</h2>
            <p>As I wish to become a web developer after I have graduated, I thought it would be apt 
                to write my dissertation on that sector and its possible issues regarding job security.
            </p><br/>
            <p>For the dissertation, I will create a website myself and then also use AI tools - GitHub CoPilot, ChatGPT and others - to 
                create multiple versions of the same website. From there, I will discuss the strengths and weaknesses of both methods, 
                as well as interviewing people who work in the computing sector to see if they can tell which was made via each method. 
            </p>
        </div>
        <div className='year'>
            <h2>Aims and Objectives:</h2>
            <p>The aim of this project is to see if AI can be used to create websites and if so, how much of a risk does it pose 
                to jobs in the web development industry.
            </p><br/>
            <p>This will be accomplished by the following objectives:
                <ul>
                    <li>Review literature to get insights from professional bodies</li>
                    <li>Interview experts in the field to get insights</li>
                    <li>Learn how to use generative AI tools and use them to build a website</li>
                    <li>Evaluate how much generative AI can help or replace a web developer</li>
                    <li>Finally, present a conclusion supported by all of the above points</li>
                </ul>
            </p>
        </div>
    </div>
    )
}