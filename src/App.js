
// import 'bootstrap/dist/css/bootstrap.min.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// import Kartica from "./Card";

// import Button from 'react-bootstrap/Button';

import { MDBBtn } from 'mdb-react-ui-kit';


function App() {
  return (
    <div className="App">

      <div className="box">
        <h1 className='text-secondary' >Za Vladu i Danku :)</h1>
        <h2 className='text-danger' >Film: Toma</h2>

        {/*<Button variant="primary">Primary</Button>*/}
        {/*<Button variant="info">Info</Button>*/}

        <div className="btn-box">

          <a href="https://onedrive.live.com/download?resid=ABBD7283DA843D66%2148588&authkey=!AEHTphDYTbFxfFo">
            <MDBBtn className='me-1 bg-primary bg-gradient'>
              Preuzmi film
            </MDBBtn>
          </a>

          <a href="https://1drv.ms/v/s!AmY9hNqDcr2rgvtMQXVVBDOcJaVrGA?e=Ioh0zc">
            <MDBBtn className='me-1 bg-info bg-gradient'>
              Gledaj Online
            </MDBBtn>
          </a>
        </div>





      </div>

    </div>
  );
}

export default App;
