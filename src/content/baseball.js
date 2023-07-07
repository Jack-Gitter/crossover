import Grid from "./grid";
import { useEffect } from "react";

function Baseball() {

    // generate the random teams that are going to be in the grid
  useEffect(() => {
   console.log('baseball') 
  }, [])

  return (
      <>
          <div className="row">
            <div className="col"></div>
              <div className="col">
                <Grid sport='baseball'/>
              </div>
            <div className="col"></div>
          </div>
      </>
  );
}
export default Baseball