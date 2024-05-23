import Bookatable from '../images/Bookatable.avif'


function BookaTable() {
    return (
     <>
        <div className="container-fluid bg-white mt-5" id="booktablesection">
            <div className="row">
                <p className="text-center fw-bold" style={{"font-family": "candara"}}>BOOK A TABLE</p>
                <p className="text-center fs-2" style={{"font-family": "Comic Sans MS"}} >Book Your Stay With Us</p>
            </div>
            <div className = "container bg-light  ">
                <div className = "row">
                  <div className = "col-lg-5">
                    <img src={Bookatable} width="95%" />
                    </div>                          
                  <div className = "col-lg-7">
                    <form className="mt-5 text-center">
                        <input type="text"  className="m-2 w-25" placeholder="Your Name"/>
                        <input type="email" className="m-2 w-25" placeholder="Your Email"/>
                        <input type="text"  className="m-2 w-25" placeholder="Your Phone"/>
                        <input type="text"  className="m-2 w-25" placeholder="Date"/>
                        <input type="text"  className="m-2 w-25" placeholder="Time"/>
                        <input type="text"  className="m-2 w-25" placeholder="# of people"/>
                        <textarea type="Message" className="mx-md-4 w-75 " placeholder="Message"  name="" id=""  rows="6"> </textarea>
                        <input type="submit" className="btn btn-danger" value="Book a Table"  style ={{"border-radius":"20px"}}/>
                        
                    </form>
                    
                </div>                          
                  
                </div>
            </div>
        </div>
     </>
    );
  }
  
  export default BookaTable;
  