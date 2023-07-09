import { useEffect } from "react";
import { useSelector } from "react-redux";
import { footballteamsmap } from "../state/reducer/footballteamsmap";
import { useState } from "react";

function Grid() {
   
    const {gridTeams} = useSelector((store) => store.sportsInfoReducer)
    const [searchEnabled, setSearchEnabled] = useState(false)
    const [searchField, setSearchField] = useState('')
    
    const setSearchAndSearch = (e) => {
        setSearchField(e)
        console.log(e)
    }

  return (
      <div>
            {searchEnabled ? <input type='text' value={searchField} 
            onChange={(e) => setSearchAndSearch(e.target.value)}
            ></input> : <></>}
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0"></div>
                <div className="col col-lg-3 p-0">{gridTeams[0][0]}</div>
                <div className="col col-lg-3 p-0">{gridTeams[0][1]}</div>
                <div className="col col-lg-3 p-0">{gridTeams[0][2]}</div>
            </div>
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0">{gridTeams[1][0]}</div>
                <div className="col col-lg-3 p-0"><button className="select-button" onClick={() => setSearchEnabled(!searchEnabled)}>?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button" onClick={() => setSearchEnabled(!searchEnabled)}>?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button" onClick={() => setSearchEnabled(!searchEnabled)}>?</button></div>
            </div>
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0">{gridTeams[1][1]}</div>
                <div className="col col-lg-3 p-0"><button className="select-button" onClick={() => setSearchEnabled(!searchEnabled)}>?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button" onClick={() => setSearchEnabled(!searchEnabled)}>?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button" onClick={() => setSearchEnabled(!searchEnabled)}>?</button></div>
            </div>
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0">{gridTeams[1][2]}</div>
                <div className="col col-lg-3 p-0"><button className="select-button" onClick={() => setSearchEnabled(!searchEnabled)}>?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button" onClick={() => setSearchEnabled(!searchEnabled)}>?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button" onClick={() => setSearchEnabled(!searchEnabled)}>?</button></div>
            </div>
      </div>
  );
}
export default Grid