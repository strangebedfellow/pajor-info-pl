import React from 'react';

function Contact() {
  return <>
    <div className='contact' id='contact'>
      <div className='contact-title'>
        <h2>Contact me</h2>
      </div>
      <span>
        <div className='row scale-in-center'>
          <i class="fas fa-mobile-alt"></i>
          <p>504191282</p>
        </div>
      </span>
      <span>
        <a href='mailto:miroslaw@pajor.info.pl'>
          <div className='row scale-in-center'>
            <i class="fas fa-at"></i>
            <p>miroslaw@pajor.info.pl</p>
          </div>
        </a>
      </span>
      <span>
        <a href='https://www.linkedin.com/in/miroslaw-pajor/' target='_blank'>
          <div className='row scale-in-center'>
            <i class="fab fa-linkedin"></i>
            <p>linkedin.com/in/miroslaw-pajor/</p>
          </div>
        </a>
      </span>
      <span>
        <a href='https://github.com/strangebedfellow/' target='_blank'>
          <div className='row scale-in-center'>
            <i class="fab fa-github"></i>
            <p>github.com/strangebedfellow/</p>
          </div>
        </a>
      </span>
    </div>
  </>
}
export default Contact;