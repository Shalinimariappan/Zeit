import React from 'react'
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
      <div>
        <h1 className='pt-12 mb-8 font-serif text-3xl font-semibold text-center'>WEB DEVELOPMENT</h1>
        <h3 className='px-24 mb-6 font-serif text-xl text-center'>
          Our web development service is tailored to meet the unique needs of your business, providing a seamless online presence. Our team of skilled developers leverages cutting-edge technologies to create responsive and user-friendly websites that captivate your audience. We prioritize functionality, ensuring that your website not only looks great but also performs flawlessly across various devices.
        </h3>
        <div className="flex items-center justify-center">
  <button className="flex items-center justify-center w-32 h-12 font-serif text-white bg-purple-500 border rounded shadow-xl">
    <Link to="/Serves.js">View</Link>
  </button>
</div>
      </div>
  )
}

export default Landing;