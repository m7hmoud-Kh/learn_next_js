import Image from 'next/image';
import React from 'react'
import natureImage from '../../../public/nature.jpg'
const About = async () => {
    await new Promise((resolve) => setTimeout(() => {
        resolve("content Resolved");
        console.log('Hello from Promise')
    }, 4000));
  return (
    <div>
        About
        <Image src={natureImage} width={400} height={400} alt='Image' />
    </div>
  )
}

export default About