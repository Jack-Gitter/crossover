function Grid() {
  return (
      <div>
        <div className="row">
            <div className="col bg-primary"></div>
            <div className="col bg-warning">
                <div className="row row-height justify-content-center">
                    <div className="col col-lg-4 p-0"><button className="select-button">?</button></div>
                    <div className="col col-lg-4 p-0"><button className="select-button">?</button></div>
                    <div className="col col-lg-4 p-0"><button className="select-button">?</button></div>
                </div>
                <div className="row row-height justify-content-center">
                    <div className="col col-lg-4 p-0"><button className="select-button">?</button></div>
                    <div className="col col-lg-4 p-0"><button className="select-button">?</button></div>
                    <div className="col col-lg-4 p-0"><button className="select-button">?</button></div>
                </div>
                <div className="row row-height justify-content-center">
                    <div className="col col-lg-4 p-0"><button className="select-button">?</button></div>
                    <div className="col col-lg-4 p-0"><button className="select-button">?</button></div>
                    <div className="col col-lg-4 p-0"><button className="select-button">?</button></div>
                </div>
            </div>
            <div className="col bg-success"></div>
        </div>
      </div>
  );
}
export default Grid