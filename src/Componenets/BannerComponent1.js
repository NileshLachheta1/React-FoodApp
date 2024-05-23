import BannerImage from '../images/Banner1.png'

function Banner1() {
    return (
     <>
        <div className="container-fluid bg-light" id="homesection">
            <div className = "container ">
                <div className = "row  ">
                    <div className= " col-lg-6 mt-5" ><br/><br/>
                        <p className = "display-4 mt-5 " style = {{"font-family": "Fantasy"}}>Enjoy Your Healthy Delicious Food</p>
                        <p className = "w-75" >Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                        <div className = "row">
                            <div className = "col-lg-4">
                            <button className="btn btn-danger " style ={{"border-radius":"20px"}} > <a className="text-decoration-none text-light" aria-current="page" href="#booktablesection">Book Table</a></button>
                            </div>
                            <div className = "col-lg-4">
                                <i className = "fa-regular fa-circle-play fs-2 " style={{"color": "red"}}></i>
                                <span className = "fs-6 fw-bold "> Watch Video</span>
                            </div>
                        </div> 
                    </div>
                    <div className = "col-lg-6 mt-5">
                        <img src={BannerImage} width = "90%"   />
                    </div>
                </div>
            </div>
        </div>
     </>
    );
  }
  
  export default Banner1;
  