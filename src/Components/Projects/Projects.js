import './Projects.css';

import YouTubeProject from '../icons/YouTube Logo 2.png';
import ComingSoon from '../icons/Coming soon logo.png'

export default function Projects() {
    return (
        <div id='projects'className="projects">
            <h2>Projects</h2>
            <div className='project'>
                <img src={YouTubeProject} alt="YouTube Project"></img>
                <p>Simple music playing web app using the YouTube Data API to practise API calls.</p>
            </div>
            <div className='project'>
                <img src={ComingSoon} alt="Coming Soon"></img>
                <p>More projects coming soon!</p>
            </div>
        </div>
    )
}