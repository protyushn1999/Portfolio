import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';

// import scss file
import './Navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <a href="#header">PN</a>
            </div>
            <div className="navbar__links">
                <ul className="links">
                    <li>
                        <a href="#header" className ="hover-underline-animation">Home</a>
                    </li>
                    <li>
                        <a href="#about" className ="hover-underline-animation">About</a>
                    </li>
                    <li>
                        <a href="#projects" className ="hover-underline-animation">Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className ="hover-underline-animation">Skills</a>
                    </li>
                    <li>
                        <a href="#footer" className ="hover-underline-animation">Contact</a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1FGdhDr3BiaCe8YT8WfMnrND4h0lRykGM/view" target="_blank" className='resume'>resume</a>    
                    </li>
                </ul>
            </div>

            <div className="navbar__mobile">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {
                    toggle && (
                        <motion.div
                          whileInView={{ x: [300, 0] }}
                          transition={{ duration: 0.75, ease: 'easeOut' }}
                        >
                          <HiX onClick={() => setToggle(false)} />
                          <ul className="links">
                            <li>
                                <a href="#header" className ="hover-underline-animation" onClick={() => setToggle(false)}>Home</a>
                            </li>
                            <li>
                                <a href="#about" className ="hover-underline-animation" onClick={() => setToggle(false)}>About</a>
                            </li>
                            <li>
                                <a href="#projects" className ="hover-underline-animation" onClick={() => setToggle(false)}>Projects</a>
                            </li>
                            <li>
                                <a href="#skills" className ="hover-underline-animation" onClick={() => setToggle(false)}>Skills</a>
                            </li>
                            <li>
                                <a href="#footer" className ="hover-underline-animation" onClick={() => setToggle(false)}>Contact</a>
                            </li>
                            <li>
                                <a href="https://drive.google.com/file/d/1FGdhDr3BiaCe8YT8WfMnrND4h0lRykGM/view" target="_blank" className='resume'>resume</a>    
                            </li>
                        </ul>
                        </motion.div>
                      )
                }
            </div>
        </div>
    );
}
 
export default Navbar;