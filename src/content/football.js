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

          <div className="col">
            <div className="row">
              <div className="col p-0"><img className='team-picture' src='https://picsum.photos/50'></img></div>
              <div className="col p-0"><img className='team-picture' src='https://picsum.photos/50'></img></div>
              <div className="col p-0"><img className='team-picture' src='https://picsum.photos/50'></img></div>
            </div>
            <Grid sport='football'/>
          </div>

        <div className="col"></div>
      </div>

      </>
  );
}
export default Football