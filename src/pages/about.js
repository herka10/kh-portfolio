import myPicture from '../assets/mypicture.jpg'

const About = props => {
    return (
      <div className="container aboutPage text-center">
        <div className="jumbotron">
          <h1 className="display-3">Hello, I'm <br /> Kao Nou Her</h1>
          <p className="lead">Full Stack Web Developer</p>
          <a className="btn btn-dark btn-sm" href="#" role="button">How to pronounce my name</a>
          <hr className="my-4" />
          <img src={myPicture} alt="Kao Nou" className='myPicture'/>
          <p className="box">I recently completed a Coding Boot Camp from the University of Wisconsin earning a certificate as a Full Stack Web Developer. I desire to keep learning, practicing, and growing my skills in coding. </p>
        </div>
      </div>
    )
  }
  
  export default About