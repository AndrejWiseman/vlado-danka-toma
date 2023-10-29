
// import 'bootstrap/dist/css/bootstrap.min.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Kartica from "./Card";

// import Button from 'react-bootstrap/Button';

import { MDBBtn } from 'mdb-react-ui-kit';


function App() {
  return (
    <div className="App">

      <div className="box">
        <h1>Za Vladu i Danku :)</h1>
        <h2>Film: Toma</h2>

        {/*<Button variant="primary">Primary</Button>*/}
        {/*<Button variant="info">Info</Button>*/}

        <div className="btn-box">

          <a href="#">
            <MDBBtn className='me-1' color='warning'>
              Preuzmi film
            </MDBBtn>
          </a>

          <a href="#">
            <MDBBtn className='me-1' color='warning'>
              Gledaj Online
            </MDBBtn>
          </a>
        </div>




      </div>

    </div>
  );
}

export default App;
