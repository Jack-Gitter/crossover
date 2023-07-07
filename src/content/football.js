import { useEffect } from "react";
import Grid from "./grid";

function Football() {

    
 // in the use effect, generate the random teams that are going to be in the grid
  useEffect(() => {
    console.log('football')
  }, [])

  return (
      <>
      <div className="row">
        <div className="col"></div>
          <div className="col"><Grid sport='football'/></div>
        <div className="col"></div>
      </div>

      </>
  );
}
export default Football