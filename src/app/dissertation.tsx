import React from 'react'

export default function Dissertation() {
  return (
    <div className='fill'>
        <h1>Dissertation</h1>
        <small>Here is an overview of my final year dissertation which will be
            updated after I have finished university to a more accurate description of what I 
            actually did.
        </small>
        <div className='year'>
            <h2>Working title</h2>
            <p><em>The Evolution of AI and its possible impact on Web Development</em></p>
        </div>
        <div className='year'>
            <h2>The Idea:</h2>
            <p>As I wish to become a web developer after I have graduated, I thought it would be apt 
                to write my dissertation on that sector and its possible issues regarding job security.
            </p><br/>
            <p>For the dissertation, I will create a website myself and then also use avilable AI tools to 
                attempt to recreate the same site. From there, I will discuss the strengths and weaknesses of both, 
                as well as interviewing people who work in those sectors to see if they can tell which was made by whom. 
            </p>
        </div>
        <div className='year'>
            <h2>Prediction:</h2>
            <p>I expect to find that the AI can create individual parts of the website with relative ease, but cannot 
                string all of them together easily. I think this will show how AI can be used to help developers with 
                their projects but is not at risk of taking over jobs at any point in the near future.
            </p><br/>
            <p>I also plan to mention how AI is very prone to commit copyright infringement, and also loves to produce 
                methods or answers that are false when it does not have a suitable answer saved in its databank. This 
                shows that AI cannot be left unchecked and still requires people to check it over and thusly cannot 
                be responsible for jobs that are usually performed by humans.
            </p>
        </div>
    </div>
    )
}