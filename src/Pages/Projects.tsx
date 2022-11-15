import './Projects.css';
import AutoTypingHeader from "../Elements/AutoTypingHeader"
import ProjectDisplay from "../Elements/ProjectDisplay"


export default (): JSX.Element =>{
    return <div className="Projects">
        <div className="projects-header">
        <AutoTypingHeader className="projects-header-header" text="My Projects"/>
        <p className="projects-header-description">Psssttt... Check out <a className="no-bold" href="">my GitHub profile</a>! Here are a few of the projects I've worked on over the past couple years.</p>
        </div>
        <div className="projects-container">
            <ProjectDisplay title="Test Project" 
            imageSRC="https://media1.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif?cid=ecf05e47ipo7eerpv28qmnpyrrz6lamdc12qz5icktq9pmcr&rid=giphy.gif&ct=g" 
            description="Test project where I tested projects on a test. I make projects to project my projections. Quien soy yo? Hay various Shinjis. 
            En cada uno de mis amigos hay un Shinji differente. No se porque estoy teclando esto en espanol y sin tildes pero asi es la vida. Necesito 
            texto para llenar este espacio y eleji a hacerlo asi. Es mi vida. No me importa lo que pienses." links={['https://www.google.com/']}/>
            <ProjectDisplay title="Test Project" 
            imageSRC="https://media1.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif?cid=ecf05e47ipo7eerpv28qmnpyrrz6lamdc12qz5icktq9pmcr&rid=giphy.gif&ct=g" 
            description="Test project where I tested projects on a test. I make projects to project my projections. Quien soy yo? Hay various Shinjis. 
            En cada uno de mis amigos hay un Shinji differente. No se porque estoy teclando esto en espanol y sin tildes pero asi es la vida. Necesito 
            texto para llenar este espacio y eleji a hacerlo asi. Es mi vida. No me importa lo que pienses." links={['https://www.google.com/']}
            alignImageLeft={true}/>
        </div>
    </div>
}