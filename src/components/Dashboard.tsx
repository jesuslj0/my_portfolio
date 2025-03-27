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
                <h3 className="container-title">&#9883; My Tech Stack</h3>
                <div className="stack-group">
                    <h4 className='stack-title'>Frontend</h4>
                    <div className='stack-list'>
                        <div className='stack-item'>HTML</div>
                        <div className='stack-item'>CSS</div>
                        <div className='stack-item'>SCSS</div>
                        <div className='stack-item'>Javascript</div>
                        <div className='stack-item'>Typescript</div>
                        <div className='stack-item'>React</div>
                        <div className='stack-item'>Bootstrap</div>
                    </div>
                </div>
                <div className="stack-group">
                    <h4 className='stack-title'>Backend</h4>
                    <div className='stack-list'>
                        <div className='stack-item'>Python</div>
                        <div className='stack-item'>Django</div>
                        <div className='stack-item'>Node.js</div>
                        <div className='stack-item'>Express</div>
                        <div className='stack-item'>Java</div>
                        <div className='stack-item'>Spring</div>
                    </div>
                </div>
                <div className="stack-group">
                    <h4 className='stack-title'>Database</h4>
                    <div className='stack-list'>
                        <div className='stack-item'>MySQL</div>
                        <div className='stack-item'>SQLite</div>
                        <div className='stack-item'>MongoDB</div>
                    </div>
                </div>
                <div className="stack-group">
                    <h4 className='stack-title'>Tools</h4>
                    <div className='stack-list'>
                        <div className='stack-item'>Git</div>
                        <div className='stack-item'>Figma</div>
                        <div className='stack-item'>Auto CAD</div>
                        <div className='stackj-item'>3ds Max</div>
                        <div className='stack-item'>GIMP</div>
                    </div>
                </div>
                <div className='stack-group'>
                    <h4	className='stack-title'>IDE</h4>
                    <div className='stack-list'>
                        <div className='stack-item'>VSCode</div>
                        <div className='stack-item'>IntelliJ IDEA</div>
                        <div className='stack-item'>PyScripter</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


