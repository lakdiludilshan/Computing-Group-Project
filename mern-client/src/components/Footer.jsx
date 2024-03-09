import React from 'react'
import '../css/footer.css'
import fb from '../assets/fb.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className='sb_footer-links-div'>
            <h4>For business</h4>
            <a href="#"><p>Employer</p></a>
            <a href="#"><p>Employer</p></a>
            <a href="#"><p>Employer</p></a>
            <a href="#"><p>Employer</p></a>
          </div>
          <div className='sb_footer-links-div'>
            <h4>For business</h4>
            <a href="#"><p>Employer</p></a>
            <a href="#"><p>Employer</p></a>
            <a href="#"><p>Employer</p></a>
            <a href="#"><p>Employer</p></a>
          </div>
          <div className='sb_footer-links-div'>
            <h4>For business</h4>
            <a href="#"><p>Employer</p></a>
            <a href="#"><p>Employer</p></a>
            <a href="#"><p>Employer</p></a>
            <a href="#"><p>Employer</p></a>
          </div>
          <div className='sb_footer-links-div'>
            <h4>For business</h4>
            <a href="#"><p>Employer</p></a>
            <a href="#"><p>Employer</p></a>
            <a href="#"><p>Employer</p></a>
            <a href="#"><p>Employer</p></a>
          </div>
          <div className='socialmedia'>
            <h4 className=''>Follow Us On</h4>
            <p><img src={fb} alt="" className='logo'/></p>
            <p><img src={twitter} alt="" className='logo'/></p>
            <p><img src={linkedin} alt="" className='logo'/></p>
          </div>
        </div>
        
          <hr></hr>
        <div className='sb_footer-below'>
          <div className='sb_footer-copyright'>
            <a href="#"><div><p>Terms & conditions</p></div></a>
            <a href="#"><div><p>Privacy</p></div></a>
            <a href="#"><div><p>Security</p></div></a>
            <a href="#"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer