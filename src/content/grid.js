import { useEffect } from "react";

function Grid() {
    

  useEffect(() => {
  })

  return (
      <div>
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0"></div>
                <div className="col col-lg-3 p-0"><img className='team-picture' src='https://picsum.photos/20'></img></div>
                <div className="col col-lg-3 p-0"><img className='team-picture' src='https://picsum.photos/20'></img></div>
                <div className="col col-lg-3 p-0"><img className='team-picture' src='https://picsum.photos/20'></img></div>
            </div>
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0"><img className='team-picture' src='https://picsum.photos/20'></img></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
            </div>
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0"><img className='team-picture' src='https://picsum.photos/20'></img></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
            </div>
            <div className="row row-height justify-content-center">
                <div className="col col-lg-3 p-0"><img className='team-picture' src='https://picsum.photos/20'></img></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
                <div className="col col-lg-3 p-0"><button className="select-button">?</button></div>
            </div>
      </div>
  );
}
export default Grid