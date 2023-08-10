import './Contact.css';
import AutoTypingHeader from "../Elements/AutoTypingHeader"
import ContactInfo from '../Elements/ContactInfo';
import ResumeButton from '../Elements/LinkButton';
import { useEffect, useState } from 'react';

const TYPED_HEADER_BREAKPOINT = 510;

export default (): JSX.Element => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(()=>{
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })
    }, []);
    return <div className="Contact">
        <div className="contact-container">
        <div className="contact-header">
            <AutoTypingHeader text="Contact Me" useDots={windowWidth > TYPED_HEADER_BREAKPOINT}/>
            </div>
        <p className="contact-page-body">Let's get in touch! I'm actively looking for part-time remote work and an internship for summer 2024. If you're a recruiter/hiring manager I'd love to chat!</p>
        <ContactInfo/>
        <ResumeButton text="Resume / CV" link="/assets/resume.pdf"/>
    </div>
    </div>
}