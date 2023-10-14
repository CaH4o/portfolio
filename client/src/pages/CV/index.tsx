import React from "react"

import myFoto from "../../assets/img/my_photo.jpg"

const CV = () => {
  return (
    <div className="cv">
      {/* <!--0. Main --> */}
      <div className="wrapper">
        <aside className="sidebar">
          <img className="my_photo" src={myFoto} alt="My photo"></img>

          {/* <!--1. Contacts --> */}
          <div className="contacts">
            <h3 className="contacts_title">Contacts</h3>

            <div>
              <span className="contacts_text">C:</span>
              <a className="contacts_link" href="tel:+380962376090">
                +38 096 237 6090
              </a>
            </div>
            <div>
              <span className="contacts_text">E:</span>
              <a className="contacts_link" href="mailto:cah4o.ua@gmail.com">
                cah4o.ua@gmail.com
              </a>
            </div>
          </div>

          {/* <!--1. Tech Skills  --> */}
          <div className="tech_skill">
            <h3 className="tech_skill_title">Tech Skills</h3>
            <ul className="tech_skill_item">
              <li>
                <span className="tech_skill_item_text">HTML</span>
              </li>
              <li>
                <span className="tech_skill_item_text">CSS</span>
              </li>
              <li>
                <span className="tech_skill_item_text">GIT</span>
              </li>
              <li>
                <span className="tech_skill_item_text">C/C++</span>
              </li>
              <li>
                <span className="tech_skill_item_text">.NET</span>
              </li>
              <li>
                <span className="tech_skill_item_text">KoboToolBox</span>
              </li>
              <li>
                <span className="tech_skill_item_text">Power BI</span>
              </li>
            </ul>
          </div>

          {/* <!--1. Soft Skills --> */}
          <div className="soft_skill">
            <h3 className="soft_skill_title">Soft Skills</h3>
            <ul className="soft_skill_item">
              <li>
                <span className="soft_skill_item_text">Analyzing</span>
              </li>
              <li>
                <span className="soft_skill_item_text">Coping with change</span>
              </li>
              <li>
                <span className="soft_skill_item_text">
                  Planning and delivering results
                </span>
              </li>
              <li>
                <span className="soft_skill_item_text">Teamwork</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* <!--1. CV --> */}
        <div className="cv">
          {/* <!--2. JD, Names --> */}
          <div className="JD_names">
            <h2 className="position">Information Manager</h2>
            <h1 className="names">Oleksandr Tertyshnyk</h1>
            <p className="discription">
              I am Oleksandr, I worked 9 year as an manager of work security in
              a local factory. When the conflict in the East of Ukraine is
              started I became a volunteer in different local NGO. In 2015 I
              left factory and started working at INGO. I worked different
              organizations and found myself in both database management and
              information management and started to create and develop
              information systems.
            </p>
            <p className="discription">
              Now, I am studying programming in CA Shag and working at a LLC
              organization as performance estimate specialist. It is a good job
              with a lot of opportunities which can give my a new view of data.
            </p>
          </div>

          {/* <!--2. Projects --> */}
          <div className="projects">
            <h3 className="project_title">Projects</h3>
            <ol className="project_item">
              <li>
                <a
                  className="project_link"
                  href="https://en.wikipedia.org/wiki/Information_management"
                >
                  Information management
                </a>
                <span className="project_dot">
                  ..........................................................
                </span>
                <span>
                  [<span className="project_tech">Wikipedia</span>]
                </span>
              </li>
              <li>
                <a
                  className="project_link"
                  href="https://powerbi.microsoft.com/ru-ru/"
                >
                  https://powerbi.microsoft.com/ru-ru/
                </a>
                <span className="project_dot">
                  ...................................
                </span>
                <span>
                  [<span className="project_tech">Power BI</span>]
                </span>
              </li>
              <li>
                <a className="project_link" href="https://www.kobotoolbox.org">
                  https://www.kobotoolbox.org
                </a>
                <span className="project_dot">
                  ....................................................
                </span>
                <span>
                  [<span className="project_tech">KoboToolBox</span>]
                </span>
              </li>
            </ol>
          </div>

          {/* <!--2. Work Experience --> */}
          <div className="work_ex">
            <h3 className="work_ex_title">Work Experience</h3>

            {/* <!--3. 1st work --> */}
            <div>
              <h4 className="work_ex_position">
                Technical Officer
                <span className="work_ex_company">
                  Norwegian Refugee Council
                </span>
              </h4>
              <span className="work_ex_time">
                July 2019 - April 2020
                <span className="work_exp_time_sep"> | </span>
                Ukraine
              </span>
              <ul className="work_ex_item">
                <li>
                  Supervision, training and support to ICLA team in relation to
                  current information system;
                </li>
                <li>
                  Working in close collaboration with Monitoring, Evaluation,
                  Accountability and Learning (MEAL) team to collect, to analyze
                  and to interpretive projects’ data;
                </li>
                <li>
                  Train and support MEAL team in relation with tools for
                  collecting, analyzing and interpreting data;
                </li>
                <li>
                  Carrying out of periodic data cleaning and analyzing for
                  projects to ensure both proper statistics and operational
                  data.
                </li>
              </ul>
            </div>

            {/* <!--3. 2nd work --> */}
            <div>
              <h4 className="work_ex_position">
                Information Management Assistant
                <span className="work_ex_company">Danish Refugee Council</span>
              </h4>
              <span className="work_ex_time">
                November 2018 - May 2019
                <span className="work_exp_time_sep"> | </span>
                Ukraine
              </span>
              <ul className="work_ex_item">
                <li>
                  Creation of an information system for collecting and
                  processing information;
                </li>
                <li>Analysis of collected information;</li>
                <li>
                  Work with geolocation, vector graphics and design software;
                </li>
                <li>
                  Creating database for assessment and analysis information.
                </li>
              </ul>
            </div>

            {/* <!--3. 3rd work --> */}
            <div>
              <h4 className="work_ex_position">
                Database Junior Officer
                <span className="work_ex_company">Danish Refugee Council</span>
              </h4>
              <span className="work_ex_time">
                July 2017 - September 2018
                <span className="work_exp_time_sep"> | </span>
                Ukraine
              </span>
              <ul className="work_ex_item">
                <li>
                  Creation of an information system for project’s needs,
                  developing and maintaining it;
                </li>
                <li>Providing data analysis;</li>
                <li>Support of staff with IT issues.</li>
              </ul>
            </div>
          </div>

          {/* <!--2. Education --> */}
          <div>
            <h3 className="education_title">Education</h3>

            {/* <!--3. Education 1st --> */}
            <div>
              <h4 className="education_institution">
                Priazov State Technical University
              </h4>
              <p className="education_major">
                Control system of production and distribution of electricity
              </p>
              <span className="education_time">
                September 2002 - June 2009
                <span className="education_time_sep"> | </span>
                Ukraine
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV
