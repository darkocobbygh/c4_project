import { Link } from 'react-router-dom'
import logo from '../assets/images/logg.png'
import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot-logo'>
        <img src={logo} alt="" />
      </div>
     <div className='services'>
     <div className='feats'>
        <h3>Features</h3>
        <Link>Link shortening</Link>
        <Link>Branded links</Link>
        <Link>Analytics</Link>
      </div>
      <div className='feats'>
        <h3>Resources</h3>
        <Link>Blog</Link>
        <Link>Developers</Link>
        <Link>Support</Link>
      </div>
      <div className='feats'>
        <h3>Company</h3>
        <Link>About</Link>
        <Link>Our team</Link>
        <Link>Careers</Link>
        <Link>Contact</Link>
      </div>
     </div>
      <div className='socials'>
        <Link>
        <FaFacebook size={30} color='white'/>
        </Link>
        <Link>
        <FaTwitter size={30} color='white'/>
        </Link>
        <Link>
        <FaPinterest size={30} color='white'/>
        </Link>
        <Link>
        <FaInstagram size={30} color='white'/>
        </Link> 
      </div>
    </div>
  )
}

export default Footer
