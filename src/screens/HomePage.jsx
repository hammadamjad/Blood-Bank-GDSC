import React from 'react'
import "../assets/css/HomePage.css"
const HomePage = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg ">
                <div className="container ">
                    <div>
                        <a className="navbar-brand" href="#">Navbar</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav w-100  d-flex justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={`/`}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={`/register`}>Signup</a>
                            </li>
                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <img src={require("../assets/images/search-icon.png")} className="img-fluid logo-search w-75" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className='section-1 container-fluid'>
                <div className='container h-100'>
                    <div className='row h-100'>
                        <div className='col-sm-12 col-lg-6 d-flex justify-content-center flex-column'>
                            <h1 className='p-3 ps-0'>Donate Blood to Save lives</h1>
                            <div className='container-fluid p-0 section-1-content '>
                                <p className='p-3 ps-0'>
                                    Lorem ipsum dolor sit amet, magna aliqua Egestas sed sed risus pretium quam. Aliquam ultrices sagittis orci a scelerisque purus semper. Ornare lectus sit amet est placerat in egestas erat.
                                </p>
                            </div>
                            <button className='btn bg-danger p-2'>Get Started</button>
                        </div>
                        <div className='col-sm-12 col-lg-6 d-flex justify-content-center align-items-center flex-column'>
                            <img className='img-fluid section-1-image ' src={require('../assets/images/blood-donate-1.png')} />
                        </div>
                    </div>
                </div>
            </section>
            <div className='container-fluid'>
                <h2 className='text-center m-3 p-3'>How can we help you</h2>
            </div>
            <section className='mb-5'>
                <div className='container-fluid h-100'>
                    <div className='row h-100'>
                        <div className='col-sm-12 col-lg-4 d-flex justify-content-center mb-2'>
                            <div className='help-con h-100 p-4'>
                                <img src={require("../assets/images/Social.png")} />
                                <h3>Find Blood</h3>
                                <div className='container-fluid p-0 section-1-content '>
                                    <p className='p-3 ps-0'>
                                        Lorem ipsum dolor sit amet, magna aliqua Egestas sed sed risus pretium quam. Aliquam ultrices sagittis orci a scelerisque purus semper. Ornare lectus sit amet est placerat in egestas erat.
                                    </p>
                                </div>
                                <a>learn more </a>
                            </div>
                        </div>
                        <div className='col-sm-12 col-lg-4 d-flex justify-content-center mb-2'>
                            <div className='help-con  h-100 p-4'>
                                <img src={require("../assets/images/Saly-31.png")} />
                                <h3>Donate Blood</h3>
                                <div className='container-fluid p-0 section-1-content '>
                                    <p className='p-3 ps-0'>
                                        Lorem ipsum dolor sit amet, magna aliqua Egestas sed sed risus pretium quam. Aliquam ultrices sagittis orci a scelerisque purus semper. Ornare lectus sit amet est placerat in egestas erat.
                                    </p>
                                </div>
                                <a>learn more </a>
                            </div>
                        </div>
                        <div className='col-sm-12 col-lg-4 d-flex justify-content-center mb-2'>
                            <div className='help-con h-100 p-4'>
                                <img src={require("../assets/images/Equality.png")} style={{ width: "220px" }} />
                                <h3>Find Blood</h3>
                                <div className='container-fluid p-0 section-1-content '>
                                    <p className='p-3 ps-0'>
                                        Lorem ipsum dolor sit amet, magna aliqua Egestas sed sed risus pretium quam. Aliquam ultrices sagittis orci a scelerisque purus semper. Ornare lectus sit amet est placerat in egestas erat.
                                    </p>
                                </div>
                                <a>learn more </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-3 mb-5 container-fluid'>
                <div className='container h-100'>
                    <div className='row h-100'>
                        <div className='col-sm-12 col-lg-6 d-flex justify-content-center align-items-center'>
                            <img className='img-fluid about-img' src={require("../assets/images/about-img.png")} />
                        </div>
                        <div className='col-sm-12 col-lg-6 d-flex justify-content-center flex-column'>
                            <h1 className='p-3 ps-0'>About Us</h1>
                            <div className='container-fluid p-0 section-1-content '>
                                <p className='p-3 ps-0'>
                                    Lorem ipsum dolor sit amet, magna aliqua Egestas sed sed risus pretium quam. Aliquam ultrices sagittis orci a scelerisque purus semper. Ornare lectus sit amet est placerat in egestas erat.
                                </p>
                            </div>
                            <button className='btn bg-danger p-2'>Learn more</button>
                        </div>

                    </div>
                </div>
            </section>
            <footer >

            </footer>


        </React.Fragment>
    )
}

export default HomePage