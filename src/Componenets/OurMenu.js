import menuitem1 from '../images/menu-item-1.png'
import menuitem2 from '../images/menu-item-2.png'
import menuitem3 from '../images/menu-item-3.png'
import menuitem4 from '../images/menu-item-4.png'
import menuitem5 from '../images/menu-item-5.png'
import menuitem6 from '../images/menu-item-6.png'

function OurMenu() {
    return (
     <>
        <div className="container-fluid bg-white mt-5" id="menusection">
            <div className="row">
                <p className="text-center fw-bold" style={{"font-family": "candara"}} >Our Menu</p>
                <p className="text-center fs-2" style={{"font-family": "Comic Sans MS"}}>Check Our Yummy Menu</p>
            </div>
            <div className="row d-none">
                <div className=" text-center">
                    <span className="ms-5"><a className="text-decoration-none text-dark fs-5" href="">Starters</a></span>
                    <span className="ms-5"><a className="text-decoration-none text-dark fs-5" href="">Breakfast</a></span>
                    <span className="ms-5"><a className="text-decoration-none text-dark fs-5" href="">Lunch</a></span>
                    <span className="ms-5"><a className="text-decoration-none text-dark fs-5" href="">Dinner</a></span>
                </div>
            </div>
            <div className="container">
                <div className = "row">
                    <div className = "col-lg-4 col-md-4 text-center">
                        <img src={menuitem1} width="70%"/>
                        <h4 >Magnam Tiste</h4>
                        <p className="fs-6">Lorem, deren, trataro, filede, nerada</p>
                        <h5 className="text-danger fw-bold">$5.95</h5>
                        
                        
                    </div>
                    <div className = "col-lg-4 col-md-4 text-center">
                        <img src={menuitem2} width="70%"/>
                        <h4 >Aut Luia</h4>
                        <p className="fs-6">Lorem, deren, trataro, filede, nerada</p>
                        <h5 className="text-danger fw-bold">$14.95</h5>
                    </div>
                    <div className = "col-lg-4 col-md-4 text-center">
                        <img src={menuitem3} width="70%"/>
                        <h4 >Est Eligendi</h4>
                        <p className="fs-6">Lorem, deren, trataro, filede, nerada</p>
                        <h5 className="text-danger fw-bold">$8.95</h5>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-lg-4 col-md-4 text-center">
                        <img src={menuitem4} width="70%"/>
                        <h4 >Eos Luibusdam</h4>
                        <p className="fs-6">Lorem, deren, trataro, filede, nerada</p>
                        <h5 className="text-danger fw-bold">$12.95</h5>
                        
                        
                    </div>
                    <div className = "col-lg-4 col-md-4 text-center">
                        <img src={menuitem5} width="70%"/>
                        <h4 >Eos Luibusdam</h4>
                        <p className="fs-6">Lorem, deren, trataro, filede, nerada</p>
                        <h5 className="text-danger fw-bold">$12.95</h5>
                    </div>
                    <div className = "col-lg-4 col-md-4 text-center">
                        <img src={menuitem6} width="70%"/>
                        <h4 >Laboriosam Direva</h4>
                        <p className="fs-6">Lorem, deren, trataro, filede, nerada</p>
                        <h5 className="text-danger fw-bold">$9.95</h5>
                    </div>
                </div>
            </div>
            <div className = "container-fluid  ">
                <div className = "row  ">
                    <div className= " col-lg-6 mt-2" ><br/><br/>
                   
                    </div>
                    <div className = "col-lg-5 mx-lg-3 mt-5">
                 
                    </div>
                </div>
            </div>
        </div>
     </>
    );
  }
  
  export default OurMenu;
  