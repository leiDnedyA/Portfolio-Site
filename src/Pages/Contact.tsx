import AutoTypingHeader from "../Elements/AutoTypingHeader"
import SocialLinks from "../Elements/SocialLinks"


export default (): JSX.Element => {
    return <div className="contact-page">
        <AutoTypingHeader text="Contact Me" />

        <div className="footer">
            <a href="mailto: aydendiel@gmail.com">aydendiel@gmail.com</a> <SocialLinks />
        </div>
    </div>
}