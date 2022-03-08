import { Footer } from './Footer';
import { Buttonbar } from '../App';

export function About() {
  return (
    <div>
      <Buttonbar />
      <div>
        <div className='line-about'></div>
        <div className="moredetails-div">

          <h1 className='about-headings-1'>Hello and welcome to The Sandee Foody Court</h1>
          <div className="det-div-flex">
            <h2 className='about-headings'>NICE TO MEET YOU!</h2>
            <h3 className='about-headings-name'>HI I'M SANDEE</h3>
            <h4 className="about-para">I'm a student, now full time blogger. I live in india, I Love to Cook and Eat</h4>
            <h4 className="about-para">My mom is a talented chef and a food enthusiast.</h4>
            <h4 className="about-para">The flavors and aromas of her food were so vivid in my memory that with her guidance and precise techniques I was able to adjust the flavors in my dishes to be just like hers. Before I knew it, I was spending more and more time in the kitchen, experimenting with different ingredients, cuisines, presentations, and sharing my simplified recipes with family and friends.</h4>
            <img className="dessert-img-det pad-div-img" src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/-m--_IkcM5em4yoirph2pEOGYjE=/1200x630/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/NLBIFJIQAKOB4Z3H3DHLWSMWGI.jpg" alt="profile pic" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
