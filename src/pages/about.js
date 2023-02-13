import myPicture from '../assets/mypicture.jpg'
//import sayMyName from '../assets/sayMyName.mp3'

const About = props => {
    return (
      <div className="container aboutPage text-center">
        <div className="jumbotron">
          <div className='animate__animated animate__zoomInDown animate__slow'>
            <h1 className="display-3 aboutHeading animate__animated animate__heartBeat animate__slower">Hello, I'm <br /> Kao Nou Her</h1>
            <p className="lead">Full Stack Web Developer</p>
            {/* <audio src={sayMyName} type="audio/mpeg">How to pronounce my name</audio> */}
          </div>
          <hr className="my-4" />
          <img src={myPicture} alt="Kao Nou" className='myPicture'/>
          <p className="box">I recently completed a Coding Boot Camp from the University of Wisconsin earning a certificate as a Full Stack Web Developer. I desire to keep learning, practicing, and growing my skills in coding. </p>
        </div>
      </div>
    )
  }
  
  export default About