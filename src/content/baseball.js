import Grid from "./grid";
import { useEffect } from "react";

function Baseball() {

    // generate the random teams that are going to be in the grid
  useEffect(() => {
   console.log('baseball') 
  }, [])

  return (
      <div>
        <Grid sport='baseball'/>
      </div>
  );
}
export default Baseball