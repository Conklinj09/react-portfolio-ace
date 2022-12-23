import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
  <header>
    <h1>Welcome to my Full Stack Development Page!</h1>
    <nav>
      <a href="#about">About Me</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact Me</a>
      {/* Link this to your resume! */}
      <a href>Resume</a>
    </nav>
  </header>
  {/* hero banner */}
  <section className="hero-banner">
    <div>
      <h2>Yoga by day, development by night!</h2>
    </div>
  </section>
  <main className="page-wrapper">
    {/* about me */}
    <section className="page-section" id="about">
      <h2>About Me</h2>
      <div>
        <p>
          Hello my name is Jeanette Conklin.
          I love to bake and watch The Thundercats Show.
          I also love to go swimming to stay in shape.
          As a swim instructor, I enjoy training others at their craft.
          Swimming is one of the most beneficial excercises for the body.
        </p>
      </div>
    </section>
    {/* portfolio container */}
    <section className="page-section" id="work">
      <h2>Work</h2>
      <div className="flex-container">
        <a href="#" className="flex-item surf-report">
          <div>
            <h3>Surf Report</h3>
            <span>MERN Stack</span>
          </div>
        </a>
        <link rel="REACT" href=" " />
        <a href className="flex-item react ">
          <div>
            <h3>Model View Controller</h3>
            <span>MVC, Handlebars, Sequelize, Express </span>
          </div>
        </a>
        <link rel="Text Editor" href=" " />
        <a href className="flex-item text-editor  ">
          <div>
            <h3>Model View Controller</h3>
            <span>MVC, Handlebars, Sequelize, Express </span>
          </div>
        </a>
        <link rel="Social Network API" href=" " />
        <a href className="flex-item social-network-api  ">
          <div>
            <h3>Model View Controller</h3>
            <span>MVC, Handlebars, Sequelize, Express </span>
          </div>
        </a>
        <link rel="Regex Tutorial" href=" " />
        <a href className="flex-item regex-tutorial ">
          <div>
            <h3>Model View Controller</h3>
            <span>MVC, Handlebars, Sequelize, Express </span>
          </div>
        </a>
        <link rel="Project 2" href />
        <a href="https://sage-the-seer.herokuapp.com/" className="flex-item Sage-The-Seer ">
          <div>
            <h3>Sage The Seer</h3>
            <span>Express, Session, MySQL2, Handlebars, Bcrypt, Dotenv, Nodemon, Sequlize and Bootstrap icons </span>
          </div>
        </a>
        <link rel="Tech Blog" href />
        <a href className="flex-item Tech-Blog ">
          <div>
            <h3>Model View Controller</h3>
            <span>MVC, Handlebars, Sequelize, Express </span>
          </div>
        </a>
        <link rel="E Commerce Back End" href />
        <a href className="flex-item E-Commerce-Back-End ">
          <div>
            <h3>Object Relational Mapping</h3>
            <span>Express, Sequelize, MySQL </span>
          </div>
        </a>
        <link rel="Employee Tracker" href />
        <a href className="flex-item employee-tracker">
          <div>
            <h3>CMS System</h3>
            <span>Node, Inquirer, MySQL </span>
          </div>
        </a>
        <link rel="Note Taker" href />
        <a href className="flex-item note-taker">
          <div>
            <h3>Heroku</h3>
            <span>JSON, Express </span>
          </div>
        </a>
        <link rel="Team Profile Generator" href />
        <a href="https://conklinj09.github.io/Team-Profile-Generator/" className="flex-item team-profile">
          <div>
            <h3>Jest + Inquirer</h3>
            <span>HTML, CSS, Jest, Inquirer</span>
          </div>
        </a>
        <link rel="Professional README Generator" href />
        <a href=" https://conklinj09.github.io/Professional-README-Generator/" className="flex-item node">
          <div>
            <h3>Node</h3>
            <span>Node</span>
          </div>
        </a>
        <link rel="Flick Genie" href />
        <a href className="flex-item flick-genie">
          <div>
            <h3>Flick Genie</h3>
            <span>HTML, CSS, </span>
          </div>
        </a>
        <link rel="Weather-Dashboard" href />
        <a href="https://conklinj09.github.io/Weather-Dashboard/" className="flex-item weather-dashboard">
          <div>
            <h3>Server-Side APIs</h3>
            <span>HTML, CSS, Jquery</span>
          </div>
        </a>
        <link rel="Work Day Scheduler" href />
        <a href="https://conklinj09.github.io/Work-Day-Scheduler/" className="flex-item third-party-apis">
          <div>
            <h3>Third Party APIs</h3>
            <span>HTML, CSS, Jquery</span>
          </div>
        </a>
        <link rel="Code Quiz" href />
        <a href="https://conklinj09.github.io/CodeQuiz/" className="flex-item coding-quiz">
          <div>
            <h3>Code Quiz</h3>
            <span>JavaScript/CSS</span>
          </div>
        </a>
        <link rel="Password-Generator" href />
        <a href="https://conklinj09.github.io/Password-Generator/" className="flex-item password-generator ">
          <div>
            <h3>Password Generator</h3>
            <span>Javascript</span>
          </div>
        </a>
        <link rel="run-buddy" href />
        <a href="https://conklinj09.github.io/challenge-1-horiseon/" className="flex-item run-buddy">
          <div>
            <h3>Run Buddy</h3>
            <span>HTML/CSS</span>
          </div>
        </a>
      </div>
    </section>
    {/* contact */}
    <section className="page-section contact" id="contact">
      <h2>Contact Me</h2>
      <div>
        <address>
          <a href="tel:+4243929406">Phone Number</a>
          <a href="mailto:Conklinj09@gmail.com">Conklinj09@gmail.com</a>
          <a href="https://github.com/Conklinj09">GitHub</a>
          <a href="https://www.linkedin.com/in/jeanette-conklin-0996b351/">LinkedIn</a>
          <a/>
        </address>
      </div>
    </section>
  </main>
</div>

  );
}

export default App;
