import './Contact.css';
import AutoTypingHeader from "../Elements/AutoTypingHeader"
import ContactInfo from '../Elements/ContactInfo';
import ResumeButton from '../Elements/LinkButton';

export default (): JSX.Element => {
    return <div className="Contact">
        <AutoTypingHeader text="Contact Me" />
        <p className="contact-page-body">Let's get in touch! I'm actively searching for work, so if you have any opportunities that you think would fit my skillset, shoot me an email and I'll get back to you ASAP.</p>
        <ContactInfo/>
        <ResumeButton text="Resume / CV" link="/assets/resume.pdf"/>
    </div>
}