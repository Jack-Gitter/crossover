import { useEffect } from "react";
import Grid from "./grid";
import { useDispatch } from "react-redux";
import { setFootballTeams } from "../state/reducer/sportsreducer";

function Football() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setFootballTeams('hi'));
  }, [])


  return (
      <>
      <div className="row">
        <div className="col"></div>
          <div className="col">
            <Grid sport='football'/>
          </div>
        <div className="col"></div>
      </div>

      </>
  );
}
export default Football