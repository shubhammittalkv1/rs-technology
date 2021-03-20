import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import IpadImage from '../assets/img/ipad.png';
import DemoImage1 from '../assets/img/demo-image-01.jpg';
import DemoImage2 from '../assets/img/demo-image-02.jpg';
import MastHead from '../assets/img/bg-masthead.jpg';
 
class home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase">YOUR WISH, OUR COMMAND</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">YOUR SATISFACTION IS OUR PRIORITY.</h2>
                    <a className="btn btn-primary js-scroll-trigger" href="#about">WANT TO KNOW MORE?</a>
                </div>
            </div>
        </header>
        <section className="about-section text-center" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="text-white mb-4">ABOUT</h2>
                        <p className="text-white-50">
                        RS Technology was founded with a vision to push the boundaries and bring high quality technological solutions to everyone. We hold expertise in providing customized Web solutions for your business. We are relentless in moving boundaries and carry out this spirited attitude into Web solutions. Solutions that engage, inspire and make you think.
                        </p>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">4923 Market Street, Orlando FL</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">+1 (555) 902-8832</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="projects-section bg-light" id="services">
            <div className="container">
                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={MastHead} alt="masthead" /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>SERVICES</h4>
                            <p className="text-black-50 mb-0">We develop intuitive native Web applications which stand out in terms of user experience, design, performance, and user engagement with Search engine optimization.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6">
                    <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">WEB DEVELOPMENT</h4>
                                    <p className="mb-0 text-white-50">We at RS Tech will assist you with the creation of fabulous web application. We will endure you with the best designs any kind of web development which you are looking for your grooming up the image for your organization.</p>
                                    <hr className="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">MAINTANCE</h4>
                                    <p className="mb-0 text-white-50">We provide you maintenance service for your web application and your project is secure with us! We keep secure backups to restore everything back to normal just in case a tornado hits the Earth.</p>
                                    <hr className="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6">
                    <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">SEO MANAGEMENT</h4>
                                    <p className="mb-0 text-white-50">Being well versed in various aspects of online presence, we implement best practices and optimization techniques since the beginning of each project.</p>
                                    <hr className="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-first">
                    <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">WEB DESIGNING</h4>
                                    <p className="mb-0 text-white-50">Our designs will reflect the uniqueness of your business and your passion beautifully!</p>
                                    <hr className="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="about-section text-center" id="technology">
            <div className="container">
            <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="text-white mb-4">TECHNOLOGY</h2>
                        <p className="text-white-50">
                        RS Technology was founded with a vision to push the boundaries and bring high quality technological solutions to everyone. We hold expertise in providing customized Web solutions for your business. We are relentless in moving boundaries and carry out this spirited attitude into Web solutions. Solutions that engage, inspire and make you think.
                        </p>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">4923 Market Street, Orlando FL</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">+1 (555) 902-8832</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="signup-section" id="signup">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
                        <form className="form-inline d-flex">
                            <input className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email" placeholder="Enter email address..." />
                            <button className="btn btn-primary mx-auto" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-section bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">4923 Market Street, Orlando FL</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">+1 (555) 902-8832</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
		        <Footer />
            </div>
)
    }
}
export default home;