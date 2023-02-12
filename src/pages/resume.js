import resume from '../assets/KaonouResume.pdf'
import resumeScreenshot from '../assets/resumeScreenshot.png'

const Resume = props => {
    return (
      <div className="container text-center">
        <a href={resume} download>Download My Resume</a> <br />
        <img src={resumeScreenshot} alt="Portfolio owner Kao Nou Resume" />
      </div>
    )
  }
  
  export default Resume