import React from 'react'
import './Track.css'

function Track() {
  return (
    <div className='flex-col justify-space-between items-center w-screen h-screen mt-[15%]' id='trck'>
        <p className='text-5xl flex justify-center items-center'>Listen to our latest track</p>
        <div className='flex justify-center items-center mt-[8%]'>  
                  <iframe
  style={{ borderRadius: "12px" ,display:'flex',justifyContent:'center'}}
  src="https://open.spotify.com/embed/track/4i5hNCN61dEeVIAA7wX7nu?utm_source=generator"
  width="25%"
  height="352"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
  className='if'
></iframe></div>
<div className='flex justify-center items-center  mt-[8%]'>
Reach out : <a href="https://l.instagram.com/?u=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F00em4eNdShZGuWhMJkai9K%3Fsi%3D0dhIAiz1Sc6gxSuhx_YoGg&e=AT0YcsOnWbblHFFSCNBlAj7I9-r_SUStwdPb_Ne0B6J58BD8vMBtVEXc7cipa88Y5hFg-JDXjGz-Tg-X9BTGk8v_GxayG2mDHxDc3hce5Fg0BigZ"><img className='h-[40px]' src="./spotify.jpg" alt="" /></a> 
<a href="https://www.youtube.com/channel/UCkAEmu6ePP_b9NezVTi1uHA"><img className='h-[40px]'  src="yt.jpg" alt="" /></a>
<a href="https://www.instagram.com/the.culturehood/?hl=en"><img className='h-[40px]'  src="ig.png" alt="" /></a>
</div>
    </div>
  )
}

export default Track