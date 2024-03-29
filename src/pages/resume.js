import resume from '../assets/KaoNouResume.pdf'
import resumeScreenshot from '../assets/resumeScreenshot.png'
import 'animate.css'

const Resume = props => {
    return (
      <div className="container text-center">
        <a href={resume} download className='animate__animated animate__flash animate__repeat-2'>Download My Resume</a> <br />
        <img src={resumeScreenshot} alt="Portfolio owner Kao Nou Resume" style={{height: 800}}/>
      </div>
    )
  }
  
  export default Resume