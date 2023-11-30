import Navbar from "../components/Navbar"
import illustration from '../../src/assets/images/illustration-working.png'
import './homepage.css';
import pic1 from '../assets/images/icon-brand-recognition.png';
import pic2 from '../assets/images/icon-detailed-records.png';
import pic3 from '../assets/images/icon-fully-customizable.png';
const data=[
    {
       id:1, 
        header: "Brand Recognition",
    pic: pic1,
    content: "Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instill confidence in your content"
    },
    {
        id:2, 
        header: "Detailed Records",
    pic: pic2,
    content: "Gain insights into who is clicking your links. Knowing when and where people engage with your contents help inform better decisions."
    },
    {
        id:3, 
        header: "Fully Customizable",
    pic: pic3,
    content: "Improve brand awareness and content discoverability through customizable links. Supercharging audience engagements"
    }
]
const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <div className="hero">
        <div className="one">
            <h1>More than just shorter links</h1>
            <p>Build your brands recognition and get detailed insights on how your links are performing</p>
            <button>Get started</button>
        </div>
        <div>
            <img src={illustration} alt="" />
        </div>
      </div>
      <div className="shorten">
        <div className="shorts">
        <input type="text" placeholder="Shorten a link here..." />
        <button>Shorten it!</button>
        </div>
      </div>
      <div className="phase-two">
        <div className="stats">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
        </div>
        <div className="items">
           {data.map((brands)=>(
            <div key={brands.id} className="indie">
                <div>
                    <img src={brands.pic} alt="" className="pix" />
                </div>
                <h2>{brands.header} </h2>
                <p>{brands.content} </p>
            </div>
           ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage
