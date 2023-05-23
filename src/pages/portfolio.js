import pwGenerator from '../assets/pwGenerator.png'
import blog from '../assets/blog.png'
//import noteTaker from '../assets/noteTaker.png'
//import workDayScheduler from '../assets/workDayScheduler.png'
import dataBeats from '../assets/dataBeats.png'
//import assignmint from '../assets/assignmint.png'
import cfbPicks from '../assets/cfb_picks.png'

const Portfolio = props => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3">

        <div className="col mb-4">
          <div className="card h-100">
            <a href="https://herka10.github.io/password-generator/" target="_blank" rel="noreferrer noopener">
              <img src={pwGenerator} className="card-img-top" alt="A screenshot of a generator application" />
            </a>
              <div className="card-body">
                <h3 className="card-title">Password Generator</h3>
                <p className="card-text">An application that generate random passwords based on criteria selected. This app runs in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.</p>
              </div>
          <div class="card-footer bg-transparent border-dark m-2"><a href='https://github.com/herka10/password-generator' target="_blank" rel="noreferrer noopener">GitHub Repository</a></div>
          </div>
        </div>

        {/* <div className="col mb-4">
          <div className="card h-100">
            <a href='https://herka10.github.io/Daily-Work-Scheduler/' target="_blank" rel="noreferrer noopener">
              <img src={workDayScheduler} className="card-img-top" alt="A screenshot of a work day scheduler application" />
            </a>
              <div className="card-body">
                <h3 className="card-title">Work Day Scheduler</h3>
                <p className="card-text">A simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.</p>
              </div>
              <div class="card-footer bg-transparent border-dark m-2"><a href='https://github.com/herka10/Daily-Work-Scheduler' target="_blank" rel="noreferrer noopener">GitHub Repository</a></div>
          </div>
        </div> */}

        {/* <div className="col mb-4">
          <div className="card h-100">
            <a href='https://expressnote-taking.herokuapp.com/' target="_blank" rel="noreferrer noopener">
              <img src={noteTaker} className="card-img-top" alt="A screenshot of a note taker application" />
            </a>
              <div className="card-body">
                <h3 className="card-title">Note Taker</h3>
                <p className="card-text">An application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.</p>
              </div>
              <div class="card-footer bg-transparent border-dark m-2"><a href='https://github.com/herka10/express-note-taker' target="_blank" rel="noreferrer noopener">GitHub Repository</a></div>
          </div>
        </div> */}

        <div className="col mb-4">
          <div className="card h-100">
            <a href='https://mvctech-blog.herokuapp.com/' target="_blank" rel="noreferrer noopener">
              <img src={blog} className="card-img-top" alt="A screenshot of a tech blog site" />
            </a>
              <div className="card-body">
                <h3 className="card-title">Tech Blog</h3>
                <p className="card-text">A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.</p>
                <div class="card-footer bg-transparent border-dark m-2"><a href='https://github.com/herka10/tech-blog' target="_blank" rel="noreferrer noopener">GitHub Repository</a></div>
              </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card h-100">
            <a href='https://james-andritsch.github.io/databeats/' target="_blank" rel="noreferrer noopener">
              <img src={dataBeats} className="card-img-top" alt="A screenshot of a tech blog site" />
            </a>
              <div className="card-body">
                <h3 className="card-title">Data Beats</h3>
                <p className="card-text">An app that turns texts into beats for music lovers.</p>
                <div class="card-footer bg-transparent border-dark m-2"><a href='https://github.com/james-andritsch/databeats' target="_blank" rel="noreferrer noopener">GitHub Repository</a></div>
              </div>
          </div>
        </div>

        {/* <div className="col mb-4">
          <div className="card h-100">
            <a href='https://assignmint.herokuapp.com/' target="_blank" rel="noreferrer noopener">
              <img src={assignmint} className="card-img-top" alt="A screenshot of a tech blog site" />
            </a>
              <div className="card-body">
                <h3 className="card-title">Assignmint</h3>
                <p className="card-text">An app to help organize personal tasks and events with a calendar.</p>
                <div class="card-footer bg-transparent border-dark m-2"><a href='https://github.com/herka10/assignmint' target="_blank" rel="noreferrer noopener">GitHub Repository</a></div>
              </div>
          </div>
        </div> */}

        <div className="col mb-4">
          <div className="card h-100">
            <a href='https://safe-sands-42348.herokuapp.com/' target="_blank" rel="noreferrer noopener">
              <img src={cfbPicks} className="card-img-top" alt="A screenshot of a tech blog site" />
            </a>
              <div className="card-body">
                <h3 className="card-title">College Football Pickem</h3>
                <p className="card-text">A full stack college fantasy football app.</p>
                <div class="card-footer bg-transparent border-dark m-2"><a href='https://github.com/Hunter-Mayer/college-football-pickem' target="_blank" rel="noreferrer noopener">GitHub Repository</a></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio