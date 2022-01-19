import React from 'react';
import { Tooltip } from '@mui/material';
import './AboutUs.css';

export default function AboutUs ()
{
  return (<div className='wingki-background'>
    {/*comment*/}

    <div className = "first-half">
      <div className = "section-container">
        <h1 id = "meet">Meet the Team</h1><br/>
      </div>

      {/*first row container*/}
      <div className="row">
        {/*jade*/}
        <div className="column">
          <div className="card">
            <img className="pic" src={require('../images/profile/jade.jpg')} alt="Jade"/>
            <div className="wk-container">
              <h2 className = "name">Wing Ki Au</h2>
              <p className="title">Team Leader</p>

              <Tooltip title="Originally from hong Kong,
                Computer Science and Information Security Major.
                Study interest: Web Development, Ios Development, Computer Networking." arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*jade*/}


        {/*seth*/}
        {/*"./images/profile/seth.jpg"*/}
        <div className="column">
          <div className="card">
            <img className = "pic" src={require('../images/profile/seth.jpg')} alt="Seth"/>
            <div className="wk-container">
              <h2 className = "name">Seth Khan</h2>
              <p className="title">Team Leader</p>
              <Tooltip title="Soldier at U.S. Army Reserve, CUNY John Jay College - Computer Science, class of 2022 and huge soccer fan." arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*Seth*/}


        {/*Thin*/}
        <div className="column">
          <div className="card">
            <img className = "pic" src={require('../images/profile/thin.jpg')} alt="Thin"/>
            <div className="wk-container">
              <h2 className = "name">Thin Thazin</h2>
              <p className="title">Team Leader</p>
              <Tooltip title="My name is Thin Thazin and I love cooking and playing video games. My goal is to become a software engineer and my favorite programming language is Python." arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*thin*/}

      </div>
      <br/>
      {/*end of first row wk-container*/}
    </div>

    <div className = "second-half">


      {/*second row wk-container*/}
      <div className="row2">
        {/*Samy*/}
        <div className="column2">
          <div className="card">
            <img className = "pic" src={require('../images/profile/samy.jpg')} alt="Samy"  />
            <div className="wk-container">
              <h2 className = "name">Samy Gadi</h2>
              <p className="title">Team Member</p>
              <Tooltip title="Samy Gadi Senior student Majoring in computer science and information security, minoring in mathematics. Career goal is to@start off as a cyber security analyst and eventually become a chief security officer." arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*End of Samy*/}

        {/*Rey*/}
        <div className="column2">
          <div className="card">
            <img className = "pic" src={require('../images/profile/rey.jpg')} alt="Rey"  />
            <div className="wk-container">
              <h2 className = "name">Rey Flores</h2>
              <p className="title">Team Member</p>
              <Tooltip title=" John Jay College - Computer Science, class of 2022 and training at CUNY TTP cohort. " arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*End of Rey*/}


        {/*Justin*/}
        <div className="column2">
          <div className="card">
            <img className= "pic" src={require('../images/profile/justin.jpg')} alt="Justin"  />
            <div className="wk-container">
              <h2 className = "name">Justin Adames</h2>
              <p className="title">Team Member</p>
              <Tooltip title="Junior at John Jay College studying Computer Science and Information Security. Selected for CUNY TTP cohort and I love tostones with ketchup and fried cheese. " arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*End of Justin*/}

        {/*Stephania*/}
        <div className="column2">
          <div className="card">
            <img className= "pic" src={require('../images/profile/stephania.jpg')} alt="stephania"  />
            <div className="wk-container">
              <h2 className = "name">Stephania Hoyos</h2>
              <p className="title">Team Member</p>
              <Tooltip title="I am a proactive Computer Science student with a passion for programming, networking. Currently attending at John Jay College where I am working toward my degree and looking for ways to put my new knowledge and skills into practice in a work environment. I am independently motivated, yet I appreciate team effort and collaborate productively within groups. I love trying new things and learning new technologies." arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*End of Stephania*/}

      </div>
      <br/>
      {/*end of second row wk-container*/}



      {/*third row wk-container*/}
      <div className="row3">
        {/*Jennifer*/}
        <div className="column3">
          <div className="card">
            <img className = "pic" src={require('../images/profile/jennifer.jpg')} alt="Jennifer"  />
            <div className="wk-container">
              <h2 className = "name">Jennifer Guadarrama</h2>
              <p className="title">Team Member</p>
              <Tooltip title="My name is Jennifer Guadarrama. I am majoring in Computer Science and Cybersecurity. I am in the process of learning new languages such as python, html, css, and javascript." arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*End of Jennifer*/}

        {/*Vince*/}
        <div className="column3">
          <div className="card">
            <img className = "pic" src={require('../images/profile/vince.jpg')} alt="Vince"  />
            <div className="wk-container">
              <h2 className = "name">Vince Pamolarco</h2>
              <p className="title">Team Member</p>
              <Tooltip title="I am an aspiring Software Developer with passion in Cyber security. I’m currently a member of NYC Tech Talent Pipeline ’22 Cohort to learn Full Stack Development. I love sushi." arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*End of Vince*/}


        {/*Ilan*/}
        <div className="column3">
          <div className="card">
            <img className= "pic" src={require('../images/profile/ilan.jpg')} alt="Ilan"  />
            <div className="wk-container">
              <h2 className = "name">Ilan Rodriguez</h2>
              <p className="title">Team Member</p>
              <Tooltip title="I am Ilan Rodriguez, I love coding and am familiar with a few languages. I play games on PC as well." arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*End of Ilan*/}

        {/*Israel*/}
        <div className="column3">
          <div className="card">
            <img className= "pic"  src={require('../images/profile/israel.jpg')} alt="israel"  />
            <div className="wk-container">
              <h2 className = "name">Israel Klein</h2>
              <p className="title">Team Member</p>
              <Tooltip title="Hi, my name is Israel Klein. I'm a Junior at John Jay College, I'm majoring in Computer Science & Info Security and minoring in law as well." arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*End of Israel*/}

      </div>
      <br/>
      {/*end of third row wk-container*/}



      {/*forth row wk-container*/}
      <div className="row4">
        {/*Anwar*/}
        <div className="column4">
          <div className="card">
            <img className = "pic" src={require('../images/profile/anwar.jpg')} alt="Anwar"  />
            <div className="wk-container">
              <h2 className = "name">Anwar Jahid</h2>
              <p className="title">Team Member</p>
              <Tooltip title="I am a Brooklyn based Computer Science student.  I love to code, go biking, play video games and spend time with my siblings." arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*End of Anwar*/}

        {/*Sheikh*/}
        <div className="column4">
          <div className="card">
            <img className = "pic" src={require('../images/profile/sheikh.jpg')} alt="Sheikh"  />
            <div className="wk-container">
              <h2 className = "name">Sheikh I Ahmed</h2>
              <p className="title">Team Member</p>
              <Tooltip title="My Name is Sheikh I Ahmed; I am a junior student at john jay college of criminal justice. I finished my associate degree from Queensborough community college. I am expecting to graduate in the 2023 fall." arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*End of Sheikh*/}


        {/*Aung*/}
        <div className="column4">
          <div className="card">
            <img className= "pic" src={require('../images/profile/aung.jpg')} alt="Aung"  />
            <div className="wk-container">
              <h2 className = "name">Aung Min Tun</h2>
              <p className="title">Team Member</p>
              <Tooltip title="My name is Aung Min Tun, I am a student in John Jay majoring in computer science. I am motivated to learn as much as I can about web development and programming languages such as HTML and CSS. I also like to do photography as a hobby in my free time." arrow>
                <button className='button'>More About Me</button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/*End of Aung*/}

      </div>
      <br/>
      {/*end of forth row container*/}

    </div>
    {/*End of second half container*/}
  </div>
  );
}

