import { useEffect } from "react";
import Grid from "./grid";
import { useDispatch } from "react-redux";
import { generateValidFootballTeamCombinationsThunk } from "../services/thunks";

function Football() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(generateValidFootballTeamCombinationsThunk());
  }, [])

  return (
      <>
      <div className="row mt-5">
        <div className="col"></div>
          <div className="col">
            <Grid/>
          </div>
        <div className="col"></div>
      </div>
      </>
  );
}
export default Football