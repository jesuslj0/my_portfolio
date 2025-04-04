import '../css/index.css'
import '../css/font_faces.css'
import SplineSetUp from './SplineSetUp';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

 export const Dashboard = () => {

    useEffect(() => {
        AOS.init({
          duration: 800, // Duración de la animación en milisegundos
          easing: "ease-in-out", // Tipo de animación
          once: false, // Ejecutar la animación tantas veces como se vea el elemento
        });
      }, []);

    const launchRocket = () => {
        const rocket = document.getElementById('rocket');
        if (rocket) {
            rocket.classList.add('launched');
            setTimeout(() => {
                rocket.classList.remove('launched');
            }, 2000);
        }
    }

    const makeIconVisible = (event: React.MouseEvent<HTMLHeadingElement>) => {
        const stackTitle = event.currentTarget; // <h4>
        const icon = stackTitle.querySelector('.stack-group-icon') as HTMLElement;
        if (icon) {
            icon.classList.add('visible');
        }
    };
    
    const makeIconInvisible = (event: React.MouseEvent<HTMLHeadingElement>) => {
        const stackTitle = event.currentTarget; // <h4>
        const icon = stackTitle.querySelector('.stack-group-icon') as HTMLElement;
        if (icon) {
            icon.classList.remove('visible');
        }
    };

    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.stack-container');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="dashboard">
            <div className="hero-container">
                <div className='hero-text'>
                    <h1 className='animate__animated animate__fadeInDown'>Web Developer</h1>
                    <span className='animate__animated animate__fadeInLeft' id="hero-subtitle">&#9675; Software Lover &#9675;</span>
                    <h2 className='animate__animated animate__fadeInUp'>Hello, I'm a junior web developer with creativity and a desire to create clean code projects that generate the best user experience.</h2>   
                </div>
                <div className="hero-imagen">
                    <SplineSetUp />
                </div>
            </div>
            <div className='scroll-down' onClick={scrollToNextSection}>
                <img className='scroll-down-icon' src='icons/scroll_down.svg' alt='scroll-down'></img>
            </div>
            <div className="stack-container">
                <h3 className="container-title"><img className="stack-icon" src="icons/settings_wheel.svg" alt="stack-tools"/> My Tech Stack</h3>
                <div className='separator'></div>
                <div className="stack-group frontend">
                    <h4 className='stack-title' data-aos="fade-right" 
                        onMouseEnter={makeIconVisible} onMouseLeave={makeIconInvisible} >
                        Frontend
                        <img src='icons/html_icon.svg' className='stack-group-icon'></img>
                    </h4>
                    <div className='stack-list' data-aos="fade-left">
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html5" className='icon'/> HTML</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css3" className='icon'/> CSS</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" className='icon'/> Javascript</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript" className='icon'/> Typescript</div>
                        <div className='stack-item'>                                                                              
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" className='icon'/> React</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg" alt="astro" className='icon'/> Astro</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" className='icon'/> Bootstrap</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="tailwind" className='icon'/> Tailwind</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" className='icon'/> SCSS</div>
                    </div>
                </div>
                <div className="stack-group backend">
                    <h4 className='stack-title' data-aos="fade-right"
                        onMouseOver={makeIconVisible} onMouseOut={makeIconInvisible} >
                        Backend
                        <img src='icons/backend_icon.svg' className='stack-group-icon'></img>
                    </h4>
                    <div className='stack-list' data-aos="fade-left">
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" className='icon'/> Python</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="django" className='icon'/> Django</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" className='icon'/> Node.js</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express" className='icon' style={{filter: 'invert(1)'}}/> Express</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java" className='icon'/> Java</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="spring" className='icon'/> Spring</div>
                    </div>
                </div>
                <div className="stack-group database">
                    <h4 className='stack-title' data-aos="fade-right"
                        onMouseOver={makeIconVisible} onMouseOut={makeIconInvisible}>
                        Database
                        <img src='icons/database_icon.svg' className='stack-group-icon'></img>
                    </h4>
                    <div className='stack-list' data-aos="fade-left">
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql" className='icon'/> MySQL</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="sqlite" className='icon'/> SQLite</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb" className='icon'/> MongoDB</div>
                    </div>
                </div>
                <div className="stack-group tools">
                    <h4 className='stack-title' data-aos="fade-right"
                        onMouseOver={makeIconVisible} onMouseOut={makeIconInvisible}>
                        Tools
                        <img src='icons/tool_icon.svg' className='stack-group-icon'></img>
                    </h4>
                    <div className='stack-list' data-aos="fade-left">
                        <div className='stack-item'>
                            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt='Git'/> Git
                        </div>
                        <div className='stack-item'>
                            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='GitHub' style={{filter: 'invert(1)'}}/> GitHub
                        </div>
                        <div className='stack-item'>
                            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt='Figma'/> Figma
                        </div>
                        <div className='stack-item'>
                            <img className="icon" src="icons/autocad.png" alt='AutoCAD'/> Auto CAD
                        </div>
                        <div className='stack-item'>
                            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threedsmax/threedsmax-original.svg" alt='3ds Max'/> 3ds Max
                        </div>
                        <div className='stack-item'>
                            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg" alt='GIMP'/> GIMP
                        </div>
                    </div>
                </div>
                <div className='stack-group ide'>
                    <h4	className='stack-title' data-aos="fade-right"
                        onMouseOver={makeIconVisible} onMouseOut={makeIconInvisible}>
                        IDE
                        <img src='icons/coding_icon.svg' className='stack-group-icon'></img>
                    </h4>
                    <div className='stack-list ide' data-aos="fade-left">
                        <div className='stack-item'>
                            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt='VSCode'/> VSCode
                        </div>
                        <div className='stack-item'>
                            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" alt='IntelliJ IDEA'/> IntelliJ IDEA
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-container">
                <h3 className="container-title"><img onClick={launchRocket} className="projects-icon" id="rocket" src="icons/rocket.svg" alt="Rocket"/> Selected Projects</h3>
                <div className='separator'></div>
                <div className='projects-list'>
                    <div className='project-item'>
                        <h3 className='project-title techchain'>TechChain</h3>
                        <img className='project-image' src="img/projects/techchain_login.png" alt="TechChain Snapshot"/>
                        <p className='project-description'>Social network focused on technology and innovation. Some of its functionalities such as real-time chat and interactive posts.</p>
                        <ul className='project-technologies'>
                            <li>Django Templates</li>
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Python - Django</li>
                            <li>MySQL</li>
                            <li>Redis</li>
                        </ul>
                    </div>
                    <div className='project-item'>
                        <span>Coming soon...</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


