import pwGenerator from '../assets/pwGenerator.png'
import blog from '../assets/blog.png'
import noteTaker from '../assets/noteTaker.png'
import workDayScheduler from '../assets/workDayScheduler.png'

const Portfolio = props => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col mb-4">
          <div className="card h-100">
            <img src={pwGenerator} className="card-img-top" alt="A screenshot of a generator application" />
              <div className="card-body">
                <h3 className="card-title">Password Generator</h3>
                <p className="card-text">An application that generate random passwords based on criteria selected. This app runs in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.</p>
              </div>
              {/* <div className='card-footer'>
                <h6>https://herka10.github.io/password-generator/</h6>
              </div> */}
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src={workDayScheduler} className="card-img-top" alt="A screenshot of a work day scheduler application" />
              <div className="card-body">
                <h3 className="card-title">Work Day Scheduler</h3>
                <p className="card-text">A simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.</p>
              </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src={noteTaker} className="card-img-top" alt="A screenshot of a note taker application" />
              <div className="card-body">
                <h3 className="card-title">Note Taker</h3>
                <p className="card-text">An application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.</p>
              </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src={blog} className="card-img-top" alt="A screenshot of a tech blog site" />
              <div className="card-body">
                <h3 className="card-title">Tech Blog</h3>
                <p className="card-text">A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio