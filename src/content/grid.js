import { useEffect } from "react";

function Grid() {
    
    // if the value passed in from props is football, get the football teams in the reducer
    // then get the images that correspond to those teams, and assign them to variables and display them

  useEffect(() => {
  })

  return (
      <div>
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0"></div>
                <div className="col col-lg-3 p-0"><img className='team-picture' src={require('../pics/football/cardinals.png')}></img></div>
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