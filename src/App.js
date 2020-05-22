import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Palabra from "./Palabra/Palabra";

function App() {

  return (
      <div className="container">
          <br/>
          <div className="row" align="center">
              <div className="col">
                  <Palabra palabra="mama" />
              </div>
              <div className="col">
                  <Palabra palabra="papa" />
              </div>
              <div className="col">
                  <Palabra palabra="ines" />
              </div>
              <div className="col">
                  <Palabra palabra="bibe" />
              </div>
              <div className="col">
                  <Palabra palabra="agua" />
              </div>
              <div className="col">
                  <Palabra palabra="hola" />
              </div>

          </div>
      </div>

  );
}

export default App;
