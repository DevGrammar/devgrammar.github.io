import './App.css';
import scarf from './images/scarf.jpg';
import etsyLogo from './images/etsy.svg'; 
import instagramLogo from './images/instagram.svg';
import facebookLogo from './images/facebook.svg';

function App() {
  return (
    <div className="background">
      <div className="home">

    
        <img
          className="main-image"
          alt="A hand-knitted scarf"
          src={scarf}
        />

        {/* <h1 className="main-title">{"Knitting For The Kingdom"}</h1> */}
        <p className="main-description">Welcome to Knitting For The Kingdom!</p>
        <p className="main-description">We are a group of knitters who love to knit and love the Lord.</p>
        <p className="main-description">We believe that knitting is a gift from God and we want to share that gift with others.</p>
        <p className="main-description">We hope you enjoy our website and find something you love!</p>


        <div className='link-bubble'>
          {/* <img
            className="link-images"
            alt="About Us logo"
            src={etsyLogo}
          /> */}
          <a className="link-titles" href="TODO">{"About Us"}</a>
        </div>


        <div className='link-bubble'>
          <a className="link-titles" href="TODO">{"Check Out My Etsy!"}</a>
          <img
            className="link-images"
            alt="Etsy logo"
            src={etsyLogo}
          />        
        </div>


        <div className='link-bubble'>
          <a className="link-titles" href="TODO">{"Check Out My Instagram!"}</a>
          <img
            className="link-images"
            alt="Instagram logo"
            src={instagramLogo}
          />        
        </div>


        <div className='link-bubble'>
        <a className="link-titles" href="TODO">{"Check Out My Facebook!"}</a>
          <img
            className="link-images"
            alt="Facebook logo"
            src={facebookLogo}
          />
        </div>


      </div>
    </div>
  );
}

export default App;