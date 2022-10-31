import linkedin from './assets/linkedin-icon.png';
import github from './assets/github-icon.png';
import instagram from './assets/instagram-logo.png';
import twitter from './assets/twitter-icon.png';

function App() {

  return (
    <main className='container w-full h-full'>
      <div>
        <header className='header'>
          <div className='logo-container'>
            <div className='logo-inner-container'>
              <canvas className='logo-border'></canvas>
              <span className='logo'>
                <img src={linkedin} alt='logo'/>
              </span>
            </div>
          </div>
          <div className='info-container'>
            <div className='name'>
              <h2>Nicolás Ippoliti</h2>
            </div>
            <div className='info-container'>
              <div className='info'>
                <div className='contact-container'>
                  <button className='contact-button'>
                    <div>Contact me</div>
                  </button>
                </div>
                <div className='cv-container'>
                  <button className='cv-button'>
                    <div>Download CV</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className='biography-container'>
          <span className='biography-header'>Hi, my name is NICOLÁS</span>
          <div className='biography-text'>
          👨🏻‍💻 And I am a Front End Developer 🤓
          <br></br>
          📍 Based in Buenos Aires, Argentina 🇦🇷
          </div>
        </div>
        <div className='socials-container'>
          <div className='socials-column'>
            <div className='socials-row'>
              <div className='socials-item'>
                <ul className='socials'>
                  <li className='linkedin'>
                    <div>
                      <canvas></canvas>
                      <a href='https://www.linkedin.com/in/nicolasippoliti/' target='_blank' rel='noreferrer'>
                        <img className='w-14 h-14' src={linkedin} alt='Linkedin icon'></img>
                      </a>
                    </div>
                  </li>
                  <li className='github'>
                    <div>
                      <canvas></canvas>
                      <a href='https://github.com/NicolasIppoliti' target='_blank' rel='noreferrer'>
                        <img className='w-14 h-14' src={github} alt='Github icon'></img>
                      </a>
                    </div>
                  </li>
                  <li className='instagram'>
                    <div>
                      <canvas></canvas>
                      <a href='https://www.instagram.com/nico_ippoliti/' target='_blank' rel='noreferrer'>
                        <img className='w-14 h-14' src={instagram} alt='Instagram icon'></img>
                      </a>
                    </div>
                  </li>
                  <li className='twitter'>
                    <div>
                      <canvas></canvas>
                      <a href='https://twitter.com/nico_ippoliti' target='_blank' rel='noreferrer'>
                        <img className='w-14 h-14' src={twitter} alt='Twitter icon'></img>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ul>
          <li>

          </li>
          <li>

          </li>
          <li>

          </li>
        </ul>
        <div>

        </div>
        <div>

        </div>
      </div>
    </main>
  );
}

export default App;
