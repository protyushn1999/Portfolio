import { TypeAnimation } from 'react-type-animation';
import './Header.scss';
import profile from './Profile.jpg';
import { BsGithub,BsLinkedin,BsInstagram } from "react-icons/bs";


const Header = () => {
    return (
        <div className="header" id = "header">
            <div className="header__content">
                <div className="header__content--hi">
                    Hi, my name is
                </div>
                <div className="header__content--name">
                    <TypeAnimation
                        sequence={[
                            'Protyush ',
                            1000,
                            'Protyush Nayak.',
                            2000
                        ]}
                        speed={1}
                        wrapper="h1"
                        repeat={2}
                        cursor={false}
                    />
                    <h2>I build things for the web.</h2>
                </div>
                <div className="header__content--info">
                    <TypeAnimation
                        sequence={[
                            'Graphic Designer',
                            1000,
                            'Full Stack Web Developer',
                            1000,
                            'Graphic Designer | Full Stack Web Developer.',
                            1000
                        ]}
                        speed={10} 
                        wrapper="div"
                        repeat={Infinity} 
                    />
                </div>
                {/* <div className="header__content--text">
                    I am a software engineer based in India, 
                    specializing in building (and occasionally designing)
                    exceptional websites, applications, and everything in between.
                    An enthusiastic learner, I strive to push boundaries 
                    and explore new technologies.
                </div> */}
                <div className="header__content--icons">
                    <a href="https://github.com/protyushn1999" target="_blank"><BsGithub className="favIcons"/> </a>
                    <a href="https://www.linkedin.com/in/protyush-nayak/" target='_blank'><BsLinkedin className="favIcons" /></a>
                    {/* <a href="https://www.instagram.com/protyushnayak/" target="_blank"><BsInstagram className="favIcons" /></a> */}
                    
                </div>
            </div>
            <div className="header__photo">
                <img src={profile} alt="Profile Photo" />
                <div className="img__border"></div>
            </div>
        </div>
        
    );
}
 
export default Header;