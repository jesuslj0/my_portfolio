import '../css/index.css'
import '../css/font_faces.css'

 export const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="hero-container">
                <div className='hero-text'>
                    <h1>Web Developer</h1>
                    <span>&#9675; Software Lover &#9675;</span>
                    <h2>Hello, I'm a junior web developer with creativity and a desire to create clean code projects that generate the best user experience.</h2>   
                </div>
                <div className="hero-imagen">

                </div>
            </div>
            <div className="stack-container">
                <h3 className="container-title"><img className="stack-icon" src="icons/settings_wheel.svg" alt="stack-tools"/> My Tech Stack</h3>
                <div className='separator'></div>
                <div className="stack-group frontend">
                    <h4 className='stack-title'>Frontend</h4>
                    <div className='stack-list'>
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
                <div className="stack-group">
                    <h4 className='stack-title'>Backend</h4>
                    <div className='stack-list'>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" className='icon'/> Python</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="django" className='icon'/> Django</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" className='icon'/> Node.js</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express" className='icon'/> Express</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java" className='icon'/> Java</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="spring" className='icon'/> Spring</div>
                    </div>
                </div>
                <div className="stack-group">
                    <h4 className='stack-title'>Database</h4>
                    <div className='stack-list'>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql" className='icon'/> MySQL</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="sqlite" className='icon'/> SQLite</div>
                        <div className='stack-item'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb" className='icon'/> MongoDB</div>
                    </div>
                </div>
                <div className="stack-group">
                    <h4 className='stack-title'>Tools</h4>
                    <div className='stack-list'>
                        <div className='stack-item'>
                            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt='Git'/> Git
                        </div>
                        <div className='stack-item'>
                            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='GitHub'/> GitHub
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
                <div className='stack-group'>
                    <h4	className='stack-title'>IDE</h4>
                    <div className='stack-list ide'>
                        <div className='stack-item'>
                            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt='VSCode'/> VSCode
                        </div>
                        <div className='stack-item'>
                            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" alt='IntelliJ IDEA'/> IntelliJ IDEA
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


