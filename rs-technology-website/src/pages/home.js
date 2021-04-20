import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import MastHead from '../assets/img/bg-masthead.jpg';
import SmartSewaLogo from '../assets/img/clients/smartsewa.svg';
import Orion from '../assets/img/clients/orion.jpg';
import Arthale from '../assets/img/clients/arthale.jpg';
import Strider from '../assets/img/clients/strider.jpg';
import User from '../assets/img/user.jpg';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';
import { ReactTypeformEmbed } from 'react-typeform-embed';
class home extends Component {
    state = {
        AddressModalShow: false
    }
    handleAddressClose() {
      this.setState({ 
        AddressModalShow: false
      });
    }
    // Below Code used to show Popup
    viewAddressModalShow = (data) => {
      this.setState({
        AddressModalShow: true
      });
    }
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
                        RHABDOM Solutions was founded with a vision to push the boundaries and bring high quality technological solutions to everyone. We hold expertise in providing customized Web solutions for your business. We are relentless in moving boundaries and carry out this spirited attitude into Web solutions. Solutions that engage, inspire and make you think.
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
                                <p className="mb-0 text-white-50">We at RHABDOM Solutions will assist you with the creation of fabulous web application. We will endure you with the best designs any kind of web development which you are looking for your grooming up the image for your organization.</p>
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
                        RHABDOM Solutions was founded with a vision to push the boundaries and bring high quality technological solutions to everyone. We hold expertise in providing customized Web solutions for your business. We are relentless in moving boundaries and carry out this spirited attitude into Web solutions. Solutions that engage, inspire and make you think.
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
                    <div className="col-lg-3 col-md-3 col-xs-6">
                        <div className="client-logo"> <img src={SmartSewaLogo} className="img-fluid" alt="smartsewa"/> </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xs-6">
                        <div className="client-logo"> <img src={Orion} className="img-fluid" alt="client2"/> </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xs-6">
                        <div className="client-logo"> <img src={Arthale} className="img-fluid" alt="client3"/> </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xs-6">
                        <div className="client-logo"> <img src={Strider} className="img-fluid" alt="client4"/> </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section id="clients" className="section-bg">
            <div className="container">
                <div className="section-header">
                    <h3>Testimonials</h3>
                </div>
                <div>
                <Carousel className="testimonial-carousel" controls={false}>
                    <Carousel.Item>
                    <Card className="testimonial-card">
                            <Card.Body className="text-center">
                                <div className="user-img">
                                    <img src={User} className="img-fluid" alt="userimage"/>
                                </div>
                            <Card.Title>Testimonial 2 Title</Card.Title>
                            <Card.Text className="font-italic text-muted">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Card className="testimonial-card">
                            <Card.Body className="text-center">
                                <div className="user-img">
                                    <img src={User} className="img-fluid" alt="userimage"/>
                                </div>
                            <Card.Title>Testimonial 2 Title</Card.Title>
                            <Card.Text className="font-italic text-muted">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Card className="testimonial-card">
                            <Card.Body className="text-center">
                                <div className="user-img">
                                    <img src={User} className="img-fluid" alt="userimage"/>
                                </div>
                            <Card.Title>Testimonial 2 Title</Card.Title>
                            <Card.Text className="font-italic text-muted">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </section> */}
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
                                <div className="small text-black-50">Plot No. 30, Floor Ground Block DP, Pitampura, Delhi, India 110034 </div>
                                <hr className="my-5" />
                                <i className="fas fa-envelope mb-2"></i>
                                <h4 className="text-uppercase mb-2">Email</h4>
                                <div className="small text-black-50"><a href="#!">rhabdom.solutions@gmail.com</a></div>
                                <hr className="my-5" />
                                <i className="fas fa-mobile-alt mb-2"></i>
                                <h4 className="text-uppercase mb-2">Phone</h4>
                                <div className="small text-black-50">+91-7737889813</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body">
                            <h4 className="text-uppercase mb-5">Reach Us</h4>
                            {/* <Form>
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
                            </Form> */}
                             <ReactTypeformEmbed url="https://ac3r5x7mdju.typeform.com/to/puDDfzPm" />
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
        <a className="float" href="#" onClick={this.viewAddressModalShow.bind(this)}>
        {/* <i className="fa fa-plus my-float"></i> */}
        <span className="tooltiptext">Need Assistance ?</span>
        </a>
       {/* Show Address Modal */}
      <Modal
        show={this.state.AddressModalShow}
        onHide={this.handleAddressClose.bind(this)}
        backdrop="static"
        size="lg"
        keyboard={false}
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title>Let us know more about you</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: 400 + 'px'}}>
            <ReactTypeformEmbed url="https://ac3r5x7mdju.typeform.com/to/rtYZocCD" />
        </Modal.Body>
      </Modal>
      {/* End of Modal Code */}
		<Footer />
    </div>
)
    }
}
export default home;