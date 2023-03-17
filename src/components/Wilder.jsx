import blank_profile from '../assets/img/blank_profile.png';
import Skill from './Skill';
import './Wilder.css';
import axios from 'axios';
import { useEffect } from 'react';


function Wilder( { id, name, city, skills} ) {

    return (
        
        <article className="card">
            <img src={blank_profile} alt={`profil de ${name}`}/>
            <h3>
                {name}
                <br/>
                {city}
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4>
                Wild Skills
            </h4>
            <ul className="skills">
                {skills.map((skill) => (
                    <Skill
                        key= {skill.id}
                        name={skill.name}
                        />
                    ))}
            </ul>
            <button
                type="button"
                onClick = {(e) => {
                    e.preventDefault();
                    axios.delete(`http://localhost:5000/api/wilder/${id}`);
                }}
            > Delete Wilder </button>
        </article>
    );
}

export default Wilder;