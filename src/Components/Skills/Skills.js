import './Skills.css';

import js_logo from '../icons/JavaScript-logo.png';
import react_logo from '../icons/React-logo.png';
import python_logo from '../icons/python-logo.png';
import githubLogo from "../icons/github-logo.svg";

export default function Skills() {
    return (
        <div id='skills' className='skills'>
            <h2>Skills</h2>
            <div className='skill-logos'>
                <img src={js_logo} alt='JavaScript' />
                <img src={react_logo} alt='React' />
                <img src={python_logo} alt='Python' />
                <img src={githubLogo} alt='GitHub' />
            </div>
        </div>
    );
}