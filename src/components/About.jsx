import React from 'react'
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div data-aos="fade-right" className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div data-aos="fade-right" className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Kevin, nice to meet you. Please take a look around.</p>
            </div>
            <div data-aos="fade-left">
              <p>
              You can call me Kevin or Kelly as my friend's from college call's me by my middle name cause
              there are too many Kevins LOL. I'm a software engineer focused on Front-end development who 
              can work in team, adaptive, creative, and always learning in any condition and circumstances
              Besides of programming things, I like to explore some new tech stuff, riding motorcycles, and watching movies.
              </p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About