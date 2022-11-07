import AutoTypingHeader from "../Elements/AutoTypingHeader"


export default (): JSX.Element =>{
    return <div className="projects">
        <div className="projects-header">
        <AutoTypingHeader className="projects-header-header" text="My Projects"/>
        <p className="projects-header-description">Psssttt... Check out <a className="no-bold" href="">my GitHub profile</a>! Filler text filler text filler text</p>
        </div>
        
    </div>
}