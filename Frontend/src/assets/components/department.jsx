import React from "react";

import "../css/departments.css";

const Department = () => {
  return (
    <div>
      <section className="department" id="dep">
        <h1>Departments Page</h1>
        <p>
          Explore our diverse range of academic departments, each offering
          unique programs and opportunities for students.
        </p>
        <p>
          Here you can find information about various departments in our
          college.
        </p>
        <div className="department-list">
          <a href="#dept-cse" className="department-item" data-dept-id="dept-cse">
            <h2>Computer Science</h2>
            <p>
              Explore our Computer Science department, offering cutting-edge
              courses and research opportunities.
            </p>
          </a>
          <a href="#dept-mech" className="department-item" data-dept-id="dept-mech">
            <h2>Mechanical Engineering</h2>
            <p>
              Discover our Mechanical Engineering department, where innovation
              meets design.
            </p>
          </a>
          <a href="#dept-civil" className="department-item" data-dept-id="dept-civil">
            <h2>Civil Engineering</h2>
            <p>
              Learn about our Civil Engineering department, focusing on
              sustainable infrastructure.
            </p>
          </a>
          <a href="#dept-eee" className="department-item" data-dept-id="dept-eee">
            <h2>Electrical Engineering</h2>
            <p>
              Dive into our Electrical Engineering department, specializing in
              power systems and electronics.
            </p>
          </a>
          <a href="#dept-aiml" className="department-item" data-dept-id="dept-aiml">
            <h2>AI & ML Engineering</h2>
            <p>
              Explore our AI & ML Engineering department, at the forefront of
              technology and innovation.
            </p>
          </a>
          <a href="#dept-ece" className="department-item" data-dept-id="dept-ece">
            <h2>Electronics and Communication Engineering</h2>
            <p>
              Learn about our Electronics and Communication Engineering
              department, bridging the gap between technology and business.
            </p>
          </a>
        </div>
      </section>

      {/* <!-- Main Content --> */}
      <main>
        {/* <!-- Computer Science & Engineering Department Section --> */}
        <section className="admission" id="dept-cse">
          <h2>
            <i className="fas fa-laptop-code"></i> Computer Science &
            Engineering Department
          </h2>

          <div className="info-box">
            <h3>
              <i className="fas fa-user-tie"></i> Message from HoD
            </h3>
            <p>
              Welcome to the Department of Computer Science & Engineering. We
              aim to empower students with strong technical knowledge,
              innovation, and ethics.
            </p>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-bullseye"></i> Vision & Mission
            </h3>
            <ul>
              <li>
                <strong>Vision:</strong> To be a center of excellence in CS
                education, research, and innovation.
              </li>
              <li>
                <strong>Mission:</strong> Quality education, industry
                collaboration, and ethical professionals.
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-graduation-cap"></i> Courses Offered
            </h3>
            <ul>
              <li>B.Tech in Computer Science & Engineering</li>
              <li>
                Optional: M.Tech / Specializations in AI/ML, Cybersecurity
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-chalkboard-teacher"></i> Faculty & Facilities
            </h3>
            <ul>
              <li>Qualified PhD Faculty</li>
              <li>Labs: Programming, Networking, AI/ML, Cloud</li>
              <li>Mentorship & Student Projects</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-briefcase"></i> Placements & Training
            </h3>
            <ul>
              <li>90–100% Placement Assistance</li>
              <li>Top recruiters: TCS, Infosys, Wipro, Amazon</li>
              <li>Coding, Aptitude, and Interview Training</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-trophy"></i> Achievements & Activities
            </h3>
            <ul>
              <li>Hackathon winners, IEEE publications</li>
              <li>Tech Fests, Seminars, Coding Contests</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-users"></i> Clubs & Innovation
            </h3>
            <ul>
              <li>GDSC, ACM/CSI Chapters</li>
              <li>Innovation Cell, Incubation Center</li>
            </ul>
          </div>

          <div className="info-box contact-box">
            <h3>
              <i className="fas fa-phone"></i> Contact
            </h3>
            <p>
              <strong>HoD:</strong> Prof. A. Sharma
            </p>
            <p>
              <strong>Phone:</strong> Provide soon
            </p>
            <p>
              <strong>Email:</strong> hod.cse@college.edu.in
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://college.edu.in/cse">college.edu.in/cse</a>
            </p>
          </div>
        </section>

        {/* <!-- Mechanical Engineering Department Section --> */}
        <section className="admission" id="dept-mech">
          <h2>
            <i className="fas fa-cogs"></i> Mechanical Engineering Department
          </h2>

          <div className="info-box">
            <h3>
              <i className="fas fa-user-tie"></i> Message from HoD
            </h3>
            <p>
              Welcome to the Department of Mechanical Engineering. Our
              department focuses on building strong fundamentals in mechanics,
              design, and manufacturing to shape future-ready engineers.
            </p>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-bullseye"></i> Vision & Mission
            </h3>
            <ul>
              <li>
                <strong>Vision:</strong> To be a center of excellence in
                mechanical education and applied research.
              </li>
              <li>
                <strong>Mission:</strong> Deliver quality education, foster
                innovation, and produce ethical engineers.
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-graduation-cap"></i> Courses Offered
            </h3>
            <ul>
              <li>B.Tech in Mechanical Engineering</li>
              <li>
                M.Tech in Thermal, Design, or Manufacturing (if available)
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-chalkboard-teacher"></i> Faculty & Facilities
            </h3>
            <ul>
              <li>Experienced and research-active faculty</li>
              <li>
                Labs: CAD/CAM, Thermodynamics, Fluid Mechanics, Machine Shop
              </li>
              <li>Project-based learning and mentorship</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-briefcase"></i> Placements & Training
            </h3>
            <ul>
              <li>Strong placement support in core & allied industries</li>
              <li>Recruiters: Tata, L&T, Mahindra, BHEL, Bosch, etc.</li>
              <li>Training in design tools like AutoCAD, SolidWorks, Ansys</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-trophy"></i> Achievements & Activities
            </h3>
            <ul>
              <li>SAE teams, Project competitions, Research publications</li>
              <li>Workshops, Industrial visits, and Technical fests</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-users"></i> Clubs & Innovation
            </h3>
            <ul>
              <li>SAE India Collegiate Club</li>
              <li>Innovation Cell and Robotics Club</li>
            </ul>
          </div>

          <div className="info-box contact-box">
            <h3>
              <i className="fas fa-phone"></i> Contact
            </h3>
            <p>
              <strong>HoD:</strong> Prof. R. Kumar
            </p>
            <p>
              <strong>Phone:</strong> Provide soon
            </p>
            <p>
              <strong>Email:</strong> hod.mech@college.edu.in
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://college.edu.in/mech">college.edu.in/mech</a>
            </p>
          </div>
        </section>

        {/* <!-- Electrical Engineering Department Section --> */}
        <section className="admission" id="dept-eee">
          <h2>
            <i className="fas fa-bolt"></i> Electrical Engineering Department
          </h2>

          <div className="info-box">
            <h3>
              <i className="fas fa-user-tie"></i> Message from HoD
            </h3>
            <p>
              Welcome to the Department of Electrical Engineering. We are
              dedicated to building professionals in the fields of power
              systems, control, and electronics with innovation and
              responsibility.
            </p>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-bullseye"></i> Vision & Mission
            </h3>
            <ul>
              <li>
                <strong>Vision:</strong> To be a leader in electrical
                engineering education and applied research.
              </li>
              <li>
                <strong>Mission:</strong> Impart strong technical skills, foster
                innovation, and develop ethical engineers.
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-graduation-cap"></i> Courses Offered
            </h3>
            <ul>
              <li>B.Tech in Electrical Engineering</li>
              <li>M.Tech in Power Systems or Control Systems (if available)</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-chalkboard-teacher"></i> Faculty & Facilities
            </h3>
            <ul>
              <li>Experienced faculty with industrial exposure</li>
              <li>
                Labs: Electrical Machines, Power Systems, Control, Electronics
              </li>
              <li>Hands-on projects and mentorship</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-briefcase"></i> Placements & Training
            </h3>
            <ul>
              <li>Core and software job opportunities</li>
              <li>Recruiters: NTPC, Siemens, ABB, Infosys, etc.</li>
              <li>Training in MATLAB, PLC/SCADA, and embedded systems</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-trophy"></i> Achievements & Activities
            </h3>
            <ul>
              <li>IEEE Student Chapter, Technical projects</li>
              <li>Industrial Visits, Seminars, Competitions</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-users"></i> Clubs & Innovation
            </h3>
            <ul>
              <li>IEEE Power & Energy Society</li>
              <li>Innovation & Renewable Energy Cell</li>
            </ul>
          </div>

          <div className="info-box contact-box">
            <h3>
              <i className="fas fa-phone"></i> Contact
            </h3>
            <p>
              <strong>HoD:</strong> Prof. M. Verma
            </p>
            <p>
              <strong>Phone:</strong> Provide soon
            </p>
            <p>
              <strong>Email:</strong> hod.eee@college.edu.in
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://college.edu.in/eee">college.edu.in/eee</a>
            </p>
          </div>
        </section>

        {/* <!-- Civil Engineering Department Section --> */}
        <section className="admission" id="dept-civil">
          <h2>
            <i className="fas fa-hard-hat"></i> Civil Engineering Department
          </h2>

          <div className="info-box">
            <h3>
              <i className="fas fa-user-tie"></i> Message from HoD
            </h3>
            <p>
              Welcome to the Department of Civil Engineering. We focus on
              shaping future infrastructure experts through strong technical
              education and sustainable practices.
            </p>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-bullseye"></i> Vision & Mission
            </h3>
            <ul>
              <li>
                <strong>Vision:</strong> To be a hub for innovation and
                excellence in civil and environmental engineering.
              </li>
              <li>
                <strong>Mission:</strong> Provide practical and research-based
                learning with a focus on sustainability.
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-graduation-cap"></i> Courses Offered
            </h3>
            <ul>
              <li>B.Tech in Civil Engineering</li>
              <li>
                M.Tech in Structural/Environmental Engineering (if available)
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-chalkboard-teacher"></i> Faculty & Facilities
            </h3>
            <ul>
              <li>Experienced faculty and field experts</li>
              <li>Labs: Surveying, Geotech, Structural, Concrete, CAD</li>
              <li>On-site training and design projects</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-briefcase"></i> Placements & Training
            </h3>
            <ul>
              <li>Recruiters: L&T, Shapoorji, DLF, Govt. sector, PWD, etc.</li>
              <li>Workshops on AutoCAD, STAAD Pro, GIS</li>
              <li>Internships in real-world construction projects</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-trophy"></i> Achievements & Activities
            </h3>
            <ul>
              <li>Bridge model competitions, Survey camps</li>
              <li>Field visits and community engineering projects</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-users"></i> Clubs & Innovation
            </h3>
            <ul>
              <li>ASCE Student Chapter</li>
              <li>Green Building & Sustainability Cell</li>
            </ul>
          </div>

          <div className="info-box contact-box">
            <h3>
              <i className="fas fa-phone"></i> Contact
            </h3>
            <p>
              <strong>HoD:</strong> Prof. N. Singh
            </p>
            <p>
              <strong>Phone:</strong> Provide soon
            </p>
            <p>
              <strong>Email:</strong> hod.civil@college.edu.in
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://college.edu.in/civil">college.edu.in/civil</a>
            </p>
          </div>
        </section>

        {/* <!-- Electronics & Communication Engineering Department Section --> */}
        <section className="admission" id="dept-ece">
          <h2>
            <i className="fas fa-microchip"></i> Electronics & Communication
            Engineering Department
          </h2>

          <div className="info-box">
            <h3>
              <i className="fas fa-user-tie"></i> Message from HoD
            </h3>
            <p>
              Welcome to the Department of ECE. We aim to build skilled
              electronics engineers in embedded systems, communication, and VLSI
              design.
            </p>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-bullseye"></i> Vision & Mission
            </h3>
            <ul>
              <li>
                <strong>Vision:</strong> To be a leader in electronic system
                design and communication technology education.
              </li>
              <li>
                <strong>Mission:</strong> Deliver innovation, hands-on skills,
                and strong industry collaboration.
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-graduation-cap"></i> Courses Offered
            </h3>
            <ul>
              <li>B.Tech in ECE</li>
              <li>M.Tech in VLSI Design, Embedded Systems (if available)</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-chalkboard-teacher"></i> Faculty & Facilities
            </h3>
            <ul>
              <li>Experienced researchers and industry mentors</li>
              <li>Labs: Communication, VLSI, IoT, Digital Electronics, DSP</li>
              <li>Projects with Arduino, Raspberry Pi, FPGA kits</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-briefcase"></i> Placements & Training
            </h3>
            <ul>
              <li>Recruiters: Qualcomm, BEL, DRDO, Samsung, Infosys</li>
              <li>Training in MATLAB, Verilog, Embedded C, IoT</li>
              <li>Workshops and mini-projects</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-trophy"></i> Achievements & Activities
            </h3>
            <ul>
              <li>Hackathons, IoT challenges, PCB Design Contests</li>
              <li>Research in 5G, Wireless, VLSI</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-users"></i> Clubs & Innovation
            </h3>
            <ul>
              <li>IEEE EDS Student Chapter</li>
              <li>Robotics & IoT Innovation Lab</li>
            </ul>
          </div>

          <div className="info-box contact-box">
            <h3>
              <i className="fas fa-phone"></i> Contact
            </h3>
            <p>
              <strong>HoD:</strong> Prof. P. Roy
            </p>
            <p>
              <strong>Phone:</strong> Provide soon
            </p>
            <p>
              <strong>Email:</strong> hod.ece@college.edu.in
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://college.edu.in/ece">college.edu.in/ece</a>
            </p>
          </div>
        </section>

        {/* <!-- Artificial Intelligence & Machine Learning Department Section --> */}
        <section className="admission" id="dept-aiml">
          <h2>
            <i className="fas fa-robot"></i> Artificial Intelligence & Machine
            Learning Department
          </h2>

          <div className="info-box">
            <h3>
              <i className="fas fa-user-tie"></i> Message from HoD
            </h3>
            <p>
              Welcome to the Department of Artificial Intelligence & Machine
              Learning. We nurture future-ready engineers equipped to tackle
              real-world challenges in AI, Data Science, and Automation.
            </p>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-bullseye"></i> Vision & Mission
            </h3>
            <ul>
              <li>
                <strong>Vision:</strong> To be a leading center of excellence in
                AI and Data-driven innovation.
              </li>
              <li>
                <strong>Mission:</strong> Offer cutting-edge education and
                research in AI, ML, and Deep Learning with industry integration.
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-graduation-cap"></i> Courses Offered
            </h3>
            <ul>
              <li>B.Tech in Artificial Intelligence & Machine Learning</li>
              <li>
                Advanced certifications in Data Science, Deep Learning, NLP, and
                AI Ethics
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-chalkboard-teacher"></i> Faculty & Facilities
            </h3>
            <ul>
              <li>Experienced AI researchers and data scientists</li>
              <li>Labs: AI/ML Lab, GPU Lab, Data Analytics Lab</li>
              <li>Live project-based learning & Kaggle competitions</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-briefcase"></i> Placements & Training
            </h3>
            <ul>
              <li>Top recruiters: Google, Microsoft, Infosys, Deloitte</li>
              <li>Tools: Python, TensorFlow, Scikit-learn, PyTorch</li>
              <li>
                Capstone projects, research papers, and internship support
              </li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-trophy"></i> Achievements & Activities
            </h3>
            <ul>
              <li>Hackathons, Smart India Hackathon (SIH), Data challenges</li>
              <li>Research publications, AI startup incubations</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>
              <i className="fas fa-users"></i> Clubs & Innovation
            </h3>
            <ul>
              <li>Google Developer Student Club (GDSC)</li>
              <li>AI Research Cell, Coding & Analytics Clubs</li>
            </ul>
          </div>

          <div className="info-box contact-box">
            <h3>
              <i className="fas fa-phone"></i> Contact
            </h3>
            <p>
              <strong>HoD:</strong> Dr. Neha Mehta
            </p>
            <p>
              <strong>Phone:</strong> Provide soon
            </p>
            <p>
              <strong>Email:</strong> hod.aiml@college.edu.in
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://college.edu.in/aiml">college.edu.in/aiml</a>
            </p>
          </div>
        </section>
      </main>
      <script src="/src/script/script.js"></script>
      <script src="/src/script/dept.js"></script>
    </div>
  );
};

export default Department;
