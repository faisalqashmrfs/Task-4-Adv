import React from 'react'
import './MainStylee/Hero.css'


function Hero() {

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('showhidden');
      }
    else {
      entry.target.classList.remove('showhidden');  
    }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <section className='FQ-Hero'>
        <div className='Fq-opacity-back'>
        </div>
        <div className='Fq-opacity-back2 hidden'>
            <span>WATCH THE VIDEO</span>
            <h1>Education is the Mother of <br></br> Leadership</h1>
            <button>EXPLORE COURSES</button>
        </div>
    </section>
  )
}

export default Hero