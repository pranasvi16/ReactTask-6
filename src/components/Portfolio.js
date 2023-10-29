import "./style.css";
import { useRef } from "react";
export function Home() {
    const home = useRef(null);
    const about = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (

        <div class="App">
            <div class="hero">
                <ul>
                    <li onClick={() => scrollToSection(home)} class="link">Home</li>
                    <li onClick={() => scrollToSection(about)} class="link">About me</li>
                    <li onClick={() => scrollToSection(skills)} class="link">Skills</li>
                    <li onClick={() => scrollToSection(projects)} class="link">Projects</li>
                    <li onClick={() => scrollToSection(contact)} class="link">Contact details</li>
                </ul>
            </div>
            <div ref={home} class="home">
                <h3 class="heading">Home</h3>
                <table>
                    <tr>
                        <td><h3 class="i1">Helloooo..!!</h3>
                            <h3 class="i1">I am Pranasvi</h3>
                            <h3 class="i1">Welcome to my portfolio website</h3>
                            <h3 class="i1"> MERN fullstack internship  <a href="https://www.ethnus.com" target="blank">ethnus</a> and Cloud practitioner internship by <a href="https://aws.amazon.com/" target="blank">AWS</a></h3></td>
                        {/* <td><img src={myimg} alt="My img"></img></td>  */}
                    </tr>
                </table>

            </div>
            <div ref={about} class="about">
                <h3 className="heading">About me</h3>
                <h4> Offering a strong foundation in coding, along with a passion
                    for artificial intelligence and machine learning. Committed to continuous learning and
                    professional growth, with a proven ability to adapt to new technologies and work
                    collaboratively in team environments.
                </h4>

            </div>
            <div ref={skills} class="skills">
                <h3 className="heading">My skills</h3>
                <h4>➢ MS Office [Power Point, Excel and Word].</h4>
                <h4>➢ Programming languages: Java.</h4>
                <h4>➢ Web technologies:Html,CSS,JavaScript,PHP.</h4>
                <h4>➢ Artificial intelligence and machine learning, cloud computing, web
                    technologies,softskills.</h4>
                <h4>➢ Database: Oracle</h4>
                <h4>➢ Strong mathematical and logical reasoning abilities</h4>
            </div>
            <div ref={projects} class="projects">
                <h3 class="heading">Projects done by me</h3>
                <h4>➢ Voice control car using Arduino Uno.</h4>
                <h4>➢ </h4>
                <h4>➢ Object detection using Arduino.</h4>
            </div>
            <div ref={contact} class="contact">
                <h3 class="heading">Contact details</h3>
                <h4>Email me at pranasvi16@gmail.com</h4>
                <h4>Contact Number 987654321</h4>
            </div>
        </div>
    )
}
