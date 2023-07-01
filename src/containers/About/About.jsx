// import css
import './About.scss';
import ProfilePic from './4.png';
import BitsGoa from './bitsgoa.jpg';
import {FaHandPaper} from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const About = () => {
    return (
        <div className="about" id = "about">
            <div className="about__title">
                
                <h1> <span id = 'numbering'>01.</span>  about Me <span id='line'></span></h1>
            </div>
            <div className="about__content">
                <div className="about__content--text">
                    <span id = "hello"> Howdy! <span id = 'hello_emoji'> <FaHandPaper /> </span> </span> 
                    <p>
                        I'm Protyush(pronounced as 'Pratyush'). Currently, I am pursuing my final 
                        year of study in Electrical and Electronics at BITS Pilani, Goa.
                        I am passionate about building excellent software 
                        that improves the lives of those around me. 
                        My interest in web development started in 2019 when I was in my 2nd year of college.
                        When I'm not commiting code, you'll find me  meeting new people, watching movies, 
                        travelling or listening to music. 
                    </p>
                    <p>
                        Fast forward to today, and I've had the privilege of working at 
                        nurture.farm(an Agritech startup) and Fortanix.
                    </p>
                    <p>
                        Here are few technologies I have been working with recently:
                        <ul className='about__ul'>
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>C++</li>
                            <li>Golang</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>React</li>
                        </ul>
                    </p>
                    <p>
                        What would you do if you had a software expert available at your fingertips?<br />
                        Reach out and say "Hey!". <br />
                        <br />
                        <b>Stay awesome!</b> 
                    </p>
                </div>
                <div className="about__content--img">
                    {/* <img src={BitsGoa} alt="" /> */}

                    <Carousel infiniteLoop useKeyboardArrows emulateTouch swipeable showArrows = {false} showStatus ={false} showIndicators={false} showThumbs = {false}>
                        <div>
                            <img src={BitsGoa} />
                        </div>
                        {/* <div>
                            <img src={ProfilePic} />
                        </div> */}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
 
export default About;