import React, {useState} from 'react'
import useData from '../utils/useData';
import { useNavigate } from "react-router-dom";

 function AddPlayer() {
    const [data, setData] = useData()
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [matchesPlayed, setMatchesPlayed] = useState('')
    let navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault()
        if(!data || !name || !matchesPlayed){
            return
        }
        setData([
            ...data,{id: data.length + 1, name, country, matchesPlayed}
        ])
        navigate('/show', { replace: true })
    }
    return (
        <div>
            <form action="">
                <div className="form-element">
                    <label htmlFor="player">Player Name</label>
                    <input required={true} type="text" name="" id="name" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-element">
                    <label htmlFor="player">Player country</label>
                    <input required={true} type="text" name="" id="country" onChange={e => setCountry(e.target.value)}/>
                </div>
                <div className="form-element">
                    <label htmlFor="player">Matches played</label>
                    <input required={true} type="text" name="" id="match" onChange={e => setMatchesPlayed(e.target.value)}/>
                </div>
                <button type="submit" onClick={handleClick}>Add Player</button>
            </form>
        </div>
    )
}

export default AddPlayer
