function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className="navbar-brand ms-lg-5 fw-bold fs-3" href="/">Yummy<span className="text-danger fs-5">.</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                    <li className="nav-item">
                    <a className="nav-link active fs-6 ms-1 fw-bolder" aria-current="page" href="#homesection">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active fs-6 ms-1 fw-bolder" aria-current="page" href="#aboutsection">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active fs-6 ms-1 fw-bolder" aria-current="page" href="#whychooseussection">Why Choose Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active fs-6 ms-1 fw-bolder" aria-current="page" href="#menusection">Menu</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active fs-6 ms-1 fw-bolder" aria-current="page" href="#booktablesection">Book Table</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active fs-6 ms-1 fw-bolder" aria-current="page" href="#contactussection">Contact Us</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="btn btn-danger " style ={{"border-radius":"20px"}} > <a className="text-decoration-none text-light" aria-current="page" href="#booktablesection">Book Table</a></button>
                    <button className="btn btn-primary mx-3 " style ={{"border-radius":"20px"}} > <a className="text-decoration-none text-light"  data-bs-toggle="modal" data-bs-target="#SignUpModal" aria-current="page" href="">SignUp</a></button>
                    <button className="btn btn-secondary mx-3 " style ={{"border-radius":"20px"}} > <a className="text-decoration-none text-light"  data-bs-toggle="modal" data-bs-target="#SignInModal" aria-current="page" href="">SignIn</a></button>
                </form>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Navbar;
