import './ResumeButton.css'

function openResume() {
    window.open('/assets/resume.pdf', '_blank');
}

export default ()=> <div className="ResumeButton">
    <button onClick={openResume}>Resume / CV</button>
</div>