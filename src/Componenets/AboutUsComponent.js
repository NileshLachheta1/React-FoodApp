import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'

function aboutUs() {
    return (
     <>
        <div className="container-fluid bg-white mt-5" id="aboutsection">
            <div className="row">
                <p className="text-center fw-bold"style = {{"font-family": "candara"}} >ABOUT US</p>
                <p className="text-center fs-2" style = {{"font-family": "Comic Sans MS"}} >Learn More About Us</p>
            </div>
            <div className = "container-fluid  ">
                <div className = "row  ">
                    <div className= " col-lg-6 mt-2" ><br/><br/>
                    <img src= {about1} className="ms-5" width = "95%" height="93%" />
                    </div>
                    <div className = "col-lg-5 mx-lg-3 mt-5">
                      <p style={{"text-align" : "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <p style={{"text-align" : "justify"}}>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p style={{"text-align" : "justify"}}>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                      <p style={{"text-align" : "justify"}}>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                      <p style={{"text-align" : "justify"}}>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                      <img src= {about2} className="mx-lg-2" width = "95%" height="300px"/>
                    </div>
                </div>
            </div>
        </div>
     </>
    );
  }
  
  export default aboutUs;
  