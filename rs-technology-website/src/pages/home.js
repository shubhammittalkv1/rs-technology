import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import MastHead from '../assets/img/bg-masthead.jpg';
import User from '../assets/img/user.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase">YOUR WISH, OUR COMMAND</h1>
                    <h2 className="text-white mx-auto mt-2 mb-5">YOUR SATISFACTION IS OUR PRIORITY.</h2>
                    <a className="btn btn-outline-secondary rs-tech-btn js-scroll-trigger" href="#about">WANT TO KNOW MORE?</a>
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
                                <div className="service-icon mb-4"><i className="fas fa-calendar-alt"></i></div>
                                <h4 className="text-uppercase m-0">PROMPTNESS</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">We guarantee you for quick and positive response to your quesries with our 24*7 support.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <div className="service-icon mb-4"><i className="far fa-money-bill-alt"></i></div>
                                <h4 className="text-uppercase m-0">AFFORDABLE</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">For us. Client satisfaction is more important then anything. So, We provide affordable rates to our client for excelent services.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <div className="service-icon mb-4"><i className="fas fa-lock"></i></div>
                                <h4 className="text-uppercase m-0">SECURITY</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">Security is an important aspect where we don't compromise. We follow best practices to avoid any loopholes and keep everything confidential and reliable.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <div className="service-icon mb-4"><i className="fas fa-database"></i></div>
                                <h4 className="text-uppercase m-0">ACCOUNTABLE</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">We ensure you with 100% customer's satisfaction by providing with transparent communication and work reports.</div>
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
                <div className="row">
                <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100 bg-black">
                            <div className="card-body text-center">
                                <div className="service-icon mb-4 text-white"><i className="fas fa-paint-brush"></i></div>
                                <h4 className="text-uppercase m-0 text-white">WEB DESIGNING</h4>
                                <hr className="my-4 bg-light" />
                                <div className="small text-white">
                                <p className="mb-0 text-white-50">Our designs will reflect the uniqueness of your business and your passion beautifully!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                    <div className="card py-4 h-100 bg-black">
                            <div className="card-body text-center">
                                <div className="service-icon mb-4 text-white"><i className="fas fa-code"></i></div>
                                <h4 className="text-uppercase m-0 text-white">WEB DEVELOPMENT</h4>
                                <hr className="my-4 bg-light" />
                                <div className="small text-white">
                                <p className="mb-0 text-white-50">We at RS Tech will assist you with the creation of fabulous web application. We will endure you with the best designs any kind of web development which you are looking for your grooming up the image for your organization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                    <div className="card py-4 h-100 bg-black">
                            <div className="card-body text-center">
                                <div className="service-icon mb-4 text-white"><i className="fas fa-cog"></i></div>
                                <h4 className="text-uppercase m-0 text-white">MAINTANCE</h4>
                                <hr className="my-4 bg-light" />
                                <div className="small text-white">
                                <p className="mb-0 text-white-50">We provide you maintenance service for your web application and your project is secure with us! We keep secure backups to restore everything back to normal just in case a tornado hits the Earth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                    <div className="card py-4 h-100 bg-black">
                            <div className="card-body text-center">
                                <div className="service-icon mb-4 text-white"><i className="fas fa-search-plus"></i></div>
                                <h4 className="text-uppercase m-0 text-white">SEO MANAGEMENT</h4>
                                <hr className="my-4 bg-light" />
                                <div className="small text-white">
                                <p className="mb-0 text-white-50">Being well versed in various aspects of online presence, we implement best practices and optimization techniques since the beginning of each project.</p>
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
                        <h2 className="text-white mb-4">TECHNOLOGY WE USE</h2>
                        <p className="text-white-50">
                        RS Technology was founded with a vision to push the boundaries and bring high quality technological solutions to everyone. We hold expertise in providing customized Web solutions for your business. We are relentless in moving boundaries and carry out this spirited attitude into Web solutions. Solutions that engage, inspire and make you think.
                        </p>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <div className="service-icon mb-4"><i className="fas fa-language"></i></div>
                                <h4 className="text-uppercase m-0">LANGUAGES</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">
                                    <ul className="custom-list-two-columns">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>BOOTSTRAP</li>
                                        <li>JAVASCRIPT</li>
                                        <li>ANGULAR</li>
                                        <li>REACTJS</li>
                                        <li>PHP</li>
                                        <li>MYSQL</li>
                                        <li>AJAX</li>
                                        <li>JQUERY</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <div className="service-icon mb-4"><i className="fab fa-wordpress"></i></div>
                                <h4 className="text-uppercase m-0">FRAMEWORKS</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">
                                    <ul className="custom-list">
                                        <li>Wordpress</li>
                                        <li>Codeigniter</li>
                                        <li>Magneto</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <div className="service-icon mb-4"><i className="fab fa-gitlab"></i></div>
                                <h4 className="text-uppercase m-0">REMOTE CLIENTS</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">
                                <ul className="custom-list">
                                        <li>GITLAB</li>
                                        <li>BITBUCKET</li>
                                        <li>GITHUB</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <div className="service-icon mb-4"><i className="far fa-object-group"></i></div>
                                <h4 className="text-uppercase m-0">MISCELLANEOUS</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">
                                <ul className="custom-list">
                                        <li>Amazon SES</li>
                                        <li>SEO</li>
                                        <li>Adobe Illustrator</li>
                                        <li>Adobe Photoshop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="clients" className="section-bg">
            <div className="container">
                <div className="section-header">
                    <h3>Our Clients</h3>
                    <p>Meet our happy clients</p>
                </div>
                <div className="row no-gutters clients-wrap clearfix" >
                    <div className="col-lg-4 col-md-4 col-xs-6">
                        <div className="client-logo"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460149/abof.png" className="img-fluid" alt=""/> </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6">
                        <div className="client-logo"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460224/cropped-cropped-20170720-lucuLogo-squ2-e1500543540803.png" className="img-fluid" alt=""/> </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6">
                        <div className="client-logo"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460269/104840a62d46c05d285762857fecb61a.png" className="img-fluid" alt=""/> </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="signup-section bg-light" id="signup">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2"></i>
                        <h2 className="mb-5">Subscribe to receive updates!</h2>
                        <p>We grow brands by making decisions that are rooted in business strategy.</p>
                        <form className="form-inline d-flex">
                            <input className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email" placeholder="Enter email address..." />
                            <button className="btn btn-outline-secondary mx-auto" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-section bg-light">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <h2 className="mb-4">CONTACT</h2>
                    <p className="w-75 mx-auto mb-5">
                    How we can help you. We like to talk and on the strength of that you are invited for a coffee at our head office.
                    </p>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt mb-2"></i>
                                <h4 className="text-uppercase mb-2">Address</h4>
                                <div className="small text-black-50">R.S Technology F-1, B-138, Dadu Dayal Nagar Mansarovar, Jaipur-302020, India.</div>
                                <hr className="my-5" />
                                <i className="fas fa-envelope mb-2"></i>
                                <h4 className="text-uppercase mb-2">Email</h4>
                                <div className="small text-black-50"><a href="#!">contact@rs-tech.in</a></div>
                                <hr className="my-5" />
                                <i className="fas fa-mobile-alt mb-2"></i>
                                <h4 className="text-uppercase mb-2">Phone</h4>
                                <div className="small text-black-50">+91-7737889813 || +91-7568561199</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body">
                            <h4 className="text-uppercase mb-5">Reach Us</h4>
                            <Form>
                            <Form.Group controlId="name">
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="website">
                                <Form.Control type="text" placeholder="Website name eg: www.xyz.com" />
                            </Form.Group>
                            <Form.Group controlId="message">
                                <Form.Control as="textarea" rows={3} placeholder="Message"/>
                            </Form.Group>
                            <Button variant="outline-dark" type="submit" className="w-100 my-5">Submit</Button>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                </div> */}
            </div>
        </section>
		        <Footer />
            </div>
)
    }
}
export default home;