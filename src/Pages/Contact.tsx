import './Contact.css';
import AutoTypingHeader from "../Elements/AutoTypingHeader"
import ContactInfo from '../Elements/ContactInfo';
import ResumeButton from '../Elements/ResumeButton';

export default (): JSX.Element => {
    return <div className="Contact">
        <AutoTypingHeader text="Contact Me" />
        <p className="contact-page-body">Let's get in touch! I'm actively looking for part-time remote work and an internship for summer 2024. If you're a recruiter, especially one looking to fill such positions, I'd love to chat!</p>
        <ContactInfo/>
        <ResumeButton/>
    </div>
}