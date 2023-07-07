import { useEffect } from "react";
import { useSelector } from "react-redux";
import { footballteamsmap } from "../state/reducer/footballteamsmap";

function Grid() {
   
    const {footballTeams, baseballTeams} = useSelector((store) => store.sportsInfoReducer)
    // if the value passed in from props is football, get the football teams in the reducer
    // then get the images that correspond to those teams, and assign them to variables and display them
    // use the store to retrieve the team names, then use the map to get the images

  return (
      <div>
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0"></div>
                <div className="col col-lg-3 p-0"><img className='team-picture' src={footballteamsmap[footballTeams[0]]}></img></div>
                <div className="col col-lg-3 p-0"><img className='team-picture' src={require('../pics/football/jets.png')}></img></div>
                <div className="col col-lg-3 p-0"><img className='team-picture' src={require('../pics/football/seahawks.png')}></img></div>
            </div>
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0"><img className='team-picture' src={require('../pics/football/chargers.png')}></img></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
            </div>
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0"><img className='team-picture' src={require('../pics/football/rams.png')}></img></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
            </div>
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0"><img className='team-picture' src={require('../pics/football/eagles.png')}></img></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
            </div>
      </div>
  );
}
export default Grid