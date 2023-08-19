import React from 'react'

export default function Language() {
  return (
    <div className='fill'>
        <h1>Programming Languages</h1>
        <small>These are the languages that I have had experience with from Secondary School
            through to the end of my second year at University.
        </small>
        <div className='stack'>
            <div className='year'>
                <img src='/pLogo.svg' alt='Python Logo'/>
                <h2>Python</h2>
                <small>Time Practiced: 8 Years</small>
                <p>Originally, I started learning Python with my dad when I was in Primary School, however, 
                    I wouldn&apos;t say that I officially started programming in Python until the beginning of 
                    high school as this was the language we used in our classes.
                </p> <br/>
                <p>It is also the language I used to write my A level project at College.</p>
            </div>
            <div className='year'>
                <img src='/jLogo.png' alt='Java Logo'/>
                <h2>Java</h2>
                <small>Time Practiced: 2 Years</small>
                <p>During my time at college I had experienced small parts of coding in Java, 
                    however, it wasn&apos;t until going to university that I actually began using it 
                    in practice. The vast majority of my modules involve coding in Java to some extent 
                    so I have had a very insightful time learning how to adapt to the new syntax.
                </p><br/>
                <p>Java is a widely-used language in professional environments, so I plan to keep learning 
                    and developing my skills to ensure I am able to meet the possible requirements for a job.
                </p>
            </div>
            <div className='year'>
                <div className='flex'>
                    <img src='/htmlLogo.png' alt='HTML Logo'/>
                    <img src='/cssLogo.png' alt='CSS Logo'/>
                </div>
                <h2>HTML</h2>
                <small>Time Practiced: 2 Years</small>
                <p>Despite only beginning to use HTML in the past couple of years, it has quickly become one 
                    of my favourite languages to use and inspired my passion to become a web developer. Two of the 
                    modules I took during my time at Keele were &apos;Web Technologies&apos; in my second year and I am due to 
                    take &apos;Advanced Web Technologies&apos; in my third year.
                </p> <br/>
                <p>These modules allowed me to get a solid base understanding of HTML and CSS, and allowing me to build 
                    my first websites and publish them on my Github.
                </p><br/>
                <p>Over the course of the 2023 summer, I have created two websites to demonstrate and improve 
                    my skills. One being this CV site that you are reading, and another being a more commercial site where 
                    I take and display commissions that I have created. 
                </p>
            </div>
            <div className='year'>
                <img src='/jsLogo.png' alt='JavaScript Logo'/>
                <h2>JavaScript</h2>
                <small>Time Practiced: 1 Year</small>
                <p>I have not had much experience with JavaScript, but by taking this summer to create two of my own 
                    websites, I gave myself more time to get familiar with it. The first website I made was with 
                    standard HTML and CSS, with a few JavaScript elements included. With the second website - the one 
                    you are on right now - I challenged myself to build it using React, which is a language that builds 
                    ontop of JS and has given me a lot more experience.
                </p>
            </div>
            <div className='year'>
                <img src='/reactLogo.svg' alt='React Logo'/>
                <img src='/next.svg' alt='Next.js Logo'/>
                <h2>React & Next.js</h2>
                <small>Time Practiced: 4 Months</small>
                <p>Fun fact: this website is made using React and Next.js</p>
            </div>
        </div>
    </div>
  )
}