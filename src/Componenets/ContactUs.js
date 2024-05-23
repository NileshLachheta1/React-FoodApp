
function ContactUs() {
    return (
     <>
        <div className="container-fluid bg-white mt-5" id="contactussection">
            <div className="row">
                <p className="text-center fw-bold" style={{"font-family": "candara"}} >CONTACT</p>
                <p className="text-center fs-2" style={{"font-family": "Comic Sans MS"}} >Need Help? Contact Us</p>
            </div>
            <div className = "container bg-white  ">
                <div className = "row">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.69288447083!2d75.78144818081795!3d22.72395163729518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700205096741!5m2!1sen!2sin" width="600" height="450" style={{"border":"0;"}} allowfullscreen=""  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
                </div>  
                <div className = "row mt-md-5">
                    <div className="col-md-5 bg-light">
                        <div className="align-items-center d-flex">
                            <i className="icon bi bi-map text-danger fs-2"></i>
                        <div className="ms-4">
                            <h3>Our Address</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        </div>
                    </div>
                    <div className=" offset-md-1 col-md-5 bg-light">
                        <div className="align-items-center d-flex">
                        <i className="bi bi-envelope text-danger fs-2"></i>
                        <div className="ms-4">
                            <h3>Email Us</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        </div>
                    </div>
                </div>            
                <div className = "row mt-md-5">
                    <div className="col-md-5 bg-light">
                        <div className="align-items-center d-flex">
                            <i className="icon bi bi-telephone text-danger fs-2"></i>
                        <div className="ms-4">
                            <h3>Call Us</h3>
                            <p>+1 5589 55488 55</p>
                        </div>
                        </div>
                    </div>
                    <div className=" offset-md-1 col-md-5 bg-light">
                        <div className="align-items-center d-flex">
                        <i className="bi bi-share text-danger fs-2"></i>
                        <div className="ms-4">
                            <h3>Opening Hours</h3>
                            <p><span className="fw-bold"> Mon-Sat:</span> 11AM - 23PM; <span className="fw-bold"> Sunday:</span> Closed</p>
                        </div>
                        </div>
                    </div>
                </div>    


                <div className="row mt-4">
                <form className=" text-center">
                        <input type="text"  className="mt-2 form-control w-100" placeholder="Your Name"/>
                        <input type="email" className="mt-2 form-control w-100" placeholder="Your Email"/>
                        <input type="text"  className="mt-2 form-control w-100" placeholder="Subject"/>
                        <textarea type="Message" className="mt-2 form-control w-100 " placeholder="Message"  name="" id="" cols="" rows="6"> </textarea>
                        <input type="submit" className="mt-2 btn btn-danger" value="Send Message"  style ={{"border-radius":"20px"}}/>
                        
                    </form>
                </div>        
            </div>
        </div>
     </>
    );
  }
  
  export default ContactUs;
  