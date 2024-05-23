import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'

function WhyChooseUs() {
    return (
     <>
        <div className="container-fluid bg-white mt-5" id="whychooseussection">
            <div className = "container-fluid">
                <div className = "row m-2">
                   <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 " >
                    <div className="card bg-danger text-light">
                            <div className="card-body ">
                                <h3 className="card-title fw-bold">Why Choose Yummy?</h3><br/>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
                                <button className="btn text-light ms-lg-5"  style ={{"border-radius":"20px" ,"background-color" : "darkred"}}> Learn More </button>
                            </div>
                        </div>  
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="card">
                            <div className="card-body text-center ">
                                <i className="bi bi-clipboard-data fs-1 text-danger"></i>
                                <h5 className="card-title">Corporis voluptates officia eiusmod</h5>
                                <p className="card-text">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "row m-2">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 " >
                        <div className="card">
                            <div className="card-body text-center">
                            <i className="bi bi-gem fs-1 text-danger"></i>
                                <h5 className="card-title">Ullamco laboris ladore pan</h5>
                                <p className="card-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" >
                        <div className="card">
                            <div className="card-body text-center">
                            <i className="bi bi-inboxes fs-1 text-danger"></i>
                                <h5 className="card-title">Labore consequatur incidid dolore</h5>
                                <p className="card-text">Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere.</p>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
     </>
    );
  }
  
  export default WhyChooseUs;
   