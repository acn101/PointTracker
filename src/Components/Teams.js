import React, { useState } from 'react';

import Counter from './Counter.js';

const Teams = () => {
    const [value, setValue] = useState('');
    const [teams, setTeams] = useState([]);

    // Add a team
    const addTeam = (e) => {
        e.preventDefault();
        if (value.length > 0) {
            const tempValue = value;
            setValue('');
            setTeams(teams.concat(tempValue));
        }
    }

    // Change team name input value
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    // Remove a team based on their name
    const handleRemoveTeam = name => {
        const newTeams = teams.filter(team => team !== name);
        setTeams(newTeams);
    }

    return (
        <div>
            <h1>Point Tracker</h1>
            <form>
                <input type='text' name='TeamName' placeholder='Enter Team Name Here...' value={value} onChange={handleChange} />
                <input type='submit' value='Add Team' onClick={addTeam} />
            </form>
            <ul>
                {teams.map((name, id) => {
                    return (
                        <li key={id}>
                            <Counter name={name} />
                            <br /><hr /><br />
                            <button onClick={() => handleRemoveTeam(name)}>Remove Team</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Teams;