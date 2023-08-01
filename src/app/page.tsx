import Image from 'next/image'
import React from 'react'
import Navbar from './navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id='title'>
        <h1>CV Site</h1>
      </div>
    </div>
  )
}
