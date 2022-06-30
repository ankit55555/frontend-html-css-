import React, {Component} from 'react'
import useData from '../utils/useData';
export class AddPlayer extends Component {
    constructor(props) {
        super(props);
        [this.globalData, this.setGlobalData] = useData()
        this.state = {
            name: "",
            country: "",
            matchesPlayed: 0
        };
      }
    
      handleClick(){
        this.setGlobalData([
            ...this.globalData,
            {
                id: this.globalData,
                name: this.state.name,
                country: this.state.country,
                matchesPlayed: this.state.matchesPlayed
            }        
        ])
      };
    render() {
        return (
            <div>
                <form action="">
                    <div className="form-element">
                        <label htmlFor="player">Player Name</label>
                        <input type="text" name="" id="name" onChange={e => this.setState({...this.state, name : e.target.value})}/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="player">Player country</label>
                        <input type="text" name="" id="country" onChange={e => this.setState({...this.state, country : e.target.value})}/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="player">Matches played</label>
                        <input type="text" name="" id="match" onChange={e => this.setState({...this.state, matchesPlayed : e.target.value})}/>
                    </div>
                    <button type="submit" onClick={this.handleClick}>Add Player</button>
                </form>
            </div>
        )
    }
}

export default AddPlayer
