import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Kevin, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
              You can call me Kevin or Kelly as my friend's from college call's me by my middle name cause
              there are too many Kevins LOL.
              I'm currently working at PT. Kreasi Kode Digital (Codify) using mainly Angular JS. However, Lately, I've also been 
              studying React js again during my free time at work and it's libraries, 
              including when I created this personal website. Because during my internship I used to use it, 
              even at my current job I've got a project using React Native.
              Besides of programming things, I like to explore some new tech stuff, riding motorcycles, and watching movies.
              </p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About