import './App.css';
import '../src/assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";
import logo from '../src/assets/images/logo4.png';
// import '../src/assets/js/loader.min.js';
// import '../src/assets/js/preloader.js';
// import '../src/assets/js/hover.min.js';
// import '../src/assets/js/parallel.min.js';
// import '../src/assets/js/jquery-ui.min.js';
// import '../src/assets/js/modernizr.custom.js';
// import '../src/assets/js/smooth-scroll.js';
// import '../src/assets/js/custom.js';
// import '../src/assets/js/conter.js';
// import '../src/assets/js/bootstrap-custom.js';
// import '../src/assets/js/portfolio.js';
// import '../src/assets/js/jquery.nav.js';
// import '../src/assets/js/imagesloaded.pkgd.min.js';
// import '../src/assets/js/cbpGridGallery.js';
// import '../src/assets/js/classie.js';
// import '../src/assets/js/map.js';
// import '../src/assets/js/load-gridgallery.js';
        // <script src="js/custom-scrollbar.min.js"></script> 
        // <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=true"></script> 

function App() {
  return (
    <div>
    {/* main page */}
    <div className="main">
        {/* header */}
        <header id="home" data-stellar-background-ratio="0.5" className="header animated">
          <nav className="navbar navbar-default navbar-fixed-top nav-transparent overlay-nav sticky-nav" role="navigation">
              <div className="container main-navigation">
                <div className="col-md-3 float-left"> 
                    <a className="logo-dark" href="#home"><img alt="logo-dark" src={logo} className="logo-dark" /></a> <a className="logo-light" href="#home"><img alt="logo-white" src={logo} className="logo-white" /></a> 
                </div>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="sr-only">Toggle Navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                </div>
                <div className="col-md-9 text-left float-right collapse-navation">
                    <div className="navbar-collapse collapse navbar-inverse no-transition">
                      <ul className="nav navbar-nav navbar-right">
                          <li><a id="nav-about" href="#about">About</a></li>
                          <li><a id="nav-work" href="#service">Services</a></li>
                          {/* <li><a id="nav-work" href="#work">Work</a></li> */}
                          <li><a id="nav-work" href="#technology">Technology we use</a></li>
                          {/* <li><a id="nav-work" href="#team">Our Team</a></li>
                          <li><a id="nav-expertise" href="#expertise">Expertise</a></li>
                          <li><a id="nav-team" href="#team">Team</a></li>
                          <li><a id="nav-blog" href="#blog">Blog</a></li> */}
                          <li className="last"><a id="nav-contact" href="#contact">Contact</a></li>
                      </ul>
                    </div>
                </div>
              </div>
          </nav>
          <div className="color-overlay full-screen">
            {/* header text */}
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                  <div className="intro-section os-animation" data-os-animation="fadeIn">
                    <h1 className="intro">
                      <span className="highlight">Your Wish, Our Command</span> <br></br>
                      <span style={{fontSize: 40+'px'}}>Your Satisfaction is our priority.</span>
                    </h1>
                    <a className="highlight-button inner-link" href="#about">Want to Know More??</a> 
                  </div>
                    </div>
                </div>
              </div>
              <div className="scrollDownWrap">
                <div className="scrollDown"> <a href="#about" className="inner-link"><i className="fa fa-angle-down"></i> </a> </div>
              </div>
          </div>
        </header>
        {/* header end  */}
        {/* about */}
        <section id="about" className="gray-bg">
          <div className="container">
            <div className="row border-bottom os-animation text-center" data-os-animation="fadeInUp">
              <div className="col-md-6 col-sm-6 title-text border-right">
                <h2 className="title">About</h2>
              </div>
              <div className="col-md-6 col-sm-6 simple-text">
                <p className="description text-left" style={{textAlign:'justified'}}>
                  RS Technology was founded with a vision to push the boundaries and bring high quality technological solutions to everyone. We hold expertise in providing customized Web solutions for your business.
                  We are relentless in moving boundaries and carry out this spirited attitude into Web solutions. Solutions that engage, inspire and make you think.
                </p>
              </div>
            </div>
            <div className="row border-bottom os-animation" data-os-animation="fadeInUp">
              <div className="col-md-3 col-sm-3 service-box border-right text-center">
                <div className="service-icon"> <i className="fa fa-calendar-check-o"></i> </div>
                <h6>PROMPTNESS</h6>
                <p className="content">We guarantee you for quick and positive response to your quesries with our 24*7 support.</p>
              </div>
              <div className="col-md-3 col-sm-3 service-box border-right text-center">
                  <div className="service-icon"> <i className="fa fa-money"></i> </div>
                  <h6>AFFORDABLE</h6>
                  <p className="content">For us. Client satisfaction is more important then anything. So, We provide affordable rates to our client for excelent services.</p>
              </div>
              <div className="col-md-3 col-sm-3 service-box border-right text-center">
                  <div className="service-icon"> <i className="fa fa-lock"></i> </div>
                  <h6>SECURITY</h6>
                  <p className="content">Security is an important aspect where we don't compromise. We follow best practices to avoid any loopholes and keep everything confidential and reliable.</p>
              </div>
              <div className="col-md-3 col-sm-3 service-box text-center">
                  <div className="service-icon"> <i className="fa fa-database"></i> </div>
                  <h6>ACCOUNTABLE</h6>
                  <p className="content">We ensure you with 100% customer's satisfaction by providing with transparent communication and work reports.</p>
              </div>
            </div>
              <div className="row os-animation text-center" data-os-animation="fadeInUp">
                <p className="lead width">We grow brands by making decisions that are rooted in business strategy.</p>
                <br></br>
                <a id="href-about" className="highlight-button-black inner-link" href="#contact">Let's work together</a> 
              </div>
          </div>
        </section>
        {/* about end  */}
        {/* service */}
        <section id="service" className="gray-bg">
          <div className="container">
              <div className="row border-bottom os-animation text-center" data-os-animation="fadeInUp">
                <div className="col-md-6 col-sm-6 title-text border-right">
                    <h2 className="title">Service</h2>
                </div>
                <div className="col-md-6 col-sm-6 simple-text">
                    <p className="description text-left">We develop intuitive native Web applications which stand out in terms of user experience,  design, performance, and user engagement with Search engine optimization.</p>
                </div>
              </div>
              <div className="row border-bottom os-animation" data-os-animation="fadeInUp">
                <div className="col-md-3 col-sm-3 service-box border-right text-center">
                    <div className="service-icon"> <i className="fa fa-code"></i> </div>
                    <h6>Web Development</h6>
                    <p className="content">We at RS Tech will assist you with the creation of fabulous web application. We will endure you with the best designs any kind of web development which you are looking for your grooming up the image for your organization.</p>
                </div>
                <div className="col-md-3 col-sm-3 service-box border-right text-center">
                    <div className="service-icon"> <i className="fa fa-paint-brush"></i> </div>
                    <h6>Web Designing</h6>
                    <p className="content" style={{marginBottom:31.8+'%'}}>Our designs will reflect the uniqueness  of your business and your passion beautifully!</p>
                </div>
                <div className="col-md-3 col-sm-3 service-box border-right text-center">
                    <div className="service-icon"> <i className="fa fa-cog"></i> </div>
                    <h6>Maintance</h6>
                    <p className="content"  style={{marginBottom:7+'%'}}>we provide you maintenance service for your web application and your project is secure with us! We keep secure backups to restore everything back to normal just in case a tornado hits the Earth.</p>
                </div>
                <div className="col-md-3 col-sm-3 service-box text-center">
                    <div className="service-icon"> <i className="fa fa-search-plus"></i> </div>
                    <h6>Seo Management</h6>
                    <p className="content">Being well versed in various aspects of online presence, we implement best practices and optimization techniques since the beginning of each project.</p>
                </div>
              </div>
              <div className="row os-animation text-center" data-os-animation="fadeInUp">
                <p className="lead width">We grow brands by making decisions that are rooted in business strategy.</p>
                <br></br>
                <a id="href-about" className="highlight-button-black inner-link" href="#contact">Let's work together</a> 
              </div>
          </div>
        </section>
        {/* service end */}
        {/* Technology we use */}
        <section id="technology" className="gray-bg">
          <div className="container">
              <div className="row border-bottom os-animation text-center" data-os-animation="fadeInUp">
                <div className="col-md-6 col-sm-6 title-text border-right">
                    <h2 className="title">Technology We Use</h2>
                </div>
                <div className="col-md-6 col-sm-6 simple-text">
                    <p className="description text-left">We will select from best and latest of the technologies to serve you better and fulfill your business requirments.</p>
                </div>
              </div>
              <div className="row border-bottom os-animation" data-os-animation="fadeInUp">
                <div className="col-md-3 col-sm-3 service-box border-right text-center">
                    <div className="service-icon"> <i className="fa fa-language"></i> </div>
                    <h6>LANGUAGES</h6>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <ul style={{textAlign:'center'}}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>BOOTSRAP</li>
                            <li>JAVASCRIPT</li>
                            <li>ANGULARJS</li>
                          </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <ul style={{textAlign:'center'}}>
                            <li>PHP</li>
                            <li>MYSQL</li>
                            <li>AJAX</li>
                            <li>JQUERY</li>
                          </ul>
                      </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 service-box border-right text-center">
                    <div className="service-icon"> <i className="fa fa-wordpress"></i> </div>
                    <h6>FRAMEWORKS</h6>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <ul style={{textAlign:'center',marginBottom:20.5+'%'}}>
                            <li>Wordpress</li>
                            <li>Codeigniter</li>
                            <li>Megento</li>
                          </ul>
                      </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 service-box border-right text-center">
                    <div className="service-icon"> <i className="fa fa-gitlab"></i> </div>
                    <h6>REMOTE CLIENTS</h6>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <ul style={{textAlign:'center',marginBottom:20.5+'%'}}>
                            <li>Gitlab</li>
                            <li>Bitbucket</li>
                            <li>Github</li>
                          </ul>
                      </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 service-box text-center">
                    <div className="service-icon"> <i className="fa fa-object-group"></i> </div>
                    <h6>MISCELLANEOUS</h6>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <ul style={{textAlign:'center'}}>
                            <li>Amazon SES</li>
                            <li>SEO</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Photoshop</li>
                          </ul>
                      </div>
                    </div>
                </div>
              </div>
              <div className="row os-animation text-center" data-os-animation="fadeInUp">
                <p className="lead width">We grow brands by making decisions that are rooted in business strategy.</p>
                <br></br>
                <a id="href-about" className="highlight-button-black inner-link" href="#contact">Let's work together</a> 
              </div>
          </div>
        </section>
        {/* Technology we use end */}
        {/* work */}
        {/*  
        <section id="grid-gallery" className="grid-gallery no-padding-top no-padding-bottom">
          <div id="work" className="work grid-wrap">
              -->
              <!-- portfolio tab -->
              <!-- <ul className="isotope-filters text-center os-animation" data-os-animation="fadeInUp">
                <li className="active"><a className="active" data-filter="*" href="#">all</a></li>
                <li><a data-filter=".design" href="#">design</a></li>
                <li><a data-filter=".fashion" href="#">fashion</a></li>
                <li><a data-filter=".illustration" href="#">illustraion</a></li>
                <li><a data-filter=".product" href="#">product</a></li>
                <li><a data-filter=".style" href="#">style</a></li>
                </ul>
                <ul className="grid portfolio isotope no-transition portfolio-hex portfolio-shadows row demo-3 os-animation" data-os-animation="fadeInUp">
                <li className="portfolio-item col-md-3 col-sm-3 fashion style grid cs-style-3">
                    <figure className="portfolio-figure"> <img src="images/work-01.jpg" alt="work-01" />
                        <figcaption>
                            <h4 className="title">Pixflow</h4>
                            <span>Fashion, style</span> <a className="text-right" href="javascript:;"><i className="fa fa-angle-right"></i></a> </figcaption>
                    </figure>
                </li>
                <li className="portfolio-item col-md-3 col-sm-3 fashion product style grid cs-style-3">
                    <figure className="portfolio-figure"> <img src="images/work-02.jpg" alt="work-02" />
                        <figcaption>
                            <h4 className="title">Apple New Design</h4>
                            <span>product, style</span> <a className="text-right" href="javascript:;"><i className="fa fa fa-angle-right"></i></a> </figcaption>
                    </figure>
                </li>
                <li className="portfolio-item col-md-3 col-sm-3 fashion style product grid cs-style-3">
                    <figure className="portfolio-figure"> <img src="images/work-03.jpg" alt="work-03" />
                        <figcaption>
                            <h4 className="title">Dreams</h4>
                            <span>design, Fashion, product</span> <a className="text-right" href="javascript:;"><i className="fa fa fa-angle-right"></i></a> </figcaption>
                    </figure>
                </li>
                <li className="portfolio-item col-md-3 col-sm-3 illustration fashion style grid cs-style-3">
                    <figure className="portfolio-figure"> <img src="images/work-04.jpg" alt="work-04" />
                        <figcaption>
                            <h4 className="title">Dreams of glory</h4>
                            <span>Fashion, style</span> <a className="text-right" href="javascript:;"><i className="fa fa fa-angle-right"></i></a> </figcaption>
                    </figure>
                </li>
                <li className="portfolio-item col-md-3 col-sm-3 design illustration product grid cs-style-3">
                    <figure className="portfolio-figure"> <img src="images/work-05.jpg" alt="work-05" />
                        <figcaption>
                            <h4 className="title">satra jean brand</h4>
                            <span>design, product</span> <a className="text-right" href="javascript:;"><i className="fa fa fa-angle-right"></i></a> </figcaption>
                    </figure>
                </li>
                <li className="portfolio-item col-md-3 col-sm-3 design grid cs-style-3">
                    <figure className="portfolio-figure"> <img src="images/work-06.jpg" alt="work-06" />
                        <figcaption>
                            <h4 className="title">flat screen wall</h4>
                            <span>design, product</span> <a className="text-right" href="javascript:;"><i className="fa fa fa-angle-right"></i></a> </figcaption>
                    </figure>
                </li>
                <li className="portfolio-item col-md-3 col-sm-3 design illustration grid cs-style-3">
                    <figure className="portfolio-figure"> <img src="images/work-07.jpg" alt="work-07" />
                        <figcaption>
                            <h4 className="title">parament action</h4>
                            <span>design, Illustraion</span> <a className="text-right" href="javascript:;"><i className="fa fa fa-angle-right"></i></a> </figcaption>
                    </figure>
                </li>
                <li className="portfolio-item col-md-3 col-sm-3 design illustration product grid cs-style-3">
                    <figure className="portfolio-figure"> <img src="images/work-08.jpg" alt="work-08" />
                        <figcaption>
                            <h4 className="title">visual art exibition</h4>
                            <span>design, Illustraion</span> <a className="text-right" href="javascript:;"><i className="fa fa fa-angle-right"></i></a> </figcaption>
                    </figure>
                </li>
                </ul>
                </div> */}
                {/* work popup */}
                {/* <div className="slideshow">
                <ul className="popup-slide">
                <li className="popup-slideshow content-scroll ">
                    <figure className="ipad-scroll">
                        <figcaption>
                            <div className="popup-slider">
                                <div id="carousel1" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel1" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel1" data-slide-to="1"></li>
                                        <li data-target="#carousel1" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="item active"> <img src="images/work-01.jpg" alt="work-01"/> </div>
                                        <div className="item"> <img src="images/work-02.jpg" alt="work-01"/> </div>
                                        <div className="item"> <img src="images/work-03.jpg" alt="work-03"/> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-part">
                                <h4 className="title text-left">Pixflow</h4>
                                <span className="text-left category">Fashion Industry&nbsp;&nbsp;•&nbsp;&nbsp;United Kingdom</span>
                                <div className="popup-line"></div>
                                <span className="work-details">Magento Development + Mobile Website + WordPress Development</span>
                                <div className="popup-line"></div>
                                <p className="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="popup-line"></div>
                                <span className="work-details">Client Speak</span>
                                <p className="client-speak">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span>Jacskon Smith&nbsp;&nbsp;•&nbsp;&nbsp;Google Inc</span></p>
                            </div>
                        </figcaption>
                    </figure>
                </li>
                <li className="popup-slideshow content-scroll">
                    <figure className="ipad-scroll">
                        <figcaption>
                            <div className="popup-slider">
                                <div id="carousel-example-generic-01" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="item active"> <img src="images/work-02.jpg" alt="work-02"/> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-part">
                                <h4 className="title">Apple New Design</h4>
                                <span className="category">product Industry&nbsp;&nbsp;•&nbsp;&nbsp;United States of America</span>
                                <div className="popup-line"></div>
                                <span className="work-details">Magento Development + Mobile Website + eNewsletter</span>
                                <div className="popup-line"></div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="popup-line"></div>
                                <span className="work-details">Client Speak</span>
                                <p className="client-speak">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span>Stella Kromstain&nbsp;&nbsp;•&nbsp;&nbsp;Google Inc</span></p>
                            </div>
                        </figcaption>
                    </figure>
                </li>
                <li className="popup-slideshow content-scroll ">
                    <figure className="ipad-scroll">
                        <figcaption>
                            <div className="popup-slider">
                                <div id="carousel-example-generic-02" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="item active"> <img src="images/work-03.jpg" alt="work-g03"/> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-part">
                                <h4 className="title">Dreams</h4>
                                <span className="category">design Industry&nbsp;&nbsp;•&nbsp;&nbsp;australia</span>
                                <div className="popup-line"></div>
                                <span className="work-details">Magento Development + WordPress Development + Mobile Website</span>
                                <div className="popup-line"></div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="popup-line"></div>
                                <span className="work-details">Client Speak</span>
                                <p className="client-speak">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span>Jerry Gordinter&nbsp;&nbsp;•&nbsp;&nbsp;Google Inc</span></p>
                            </div>
                        </figcaption>
                    </figure>
                </li> */}
                {/* <li className="popup-slideshow content-scroll">
                    <figure className="ipad-scroll">
                        <figcaption>
                            <div className="popup-slider">
                                <div id="carousel2" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel2" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel2" data-slide-to="1"></li>
                                        <li data-target="#carousel2" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="item active"> <img src="images/work-04.jpg" alt="work-01"/> </div>
                                        <div className="item"> <img src="images/work-02.jpg" alt="work-02"/> </div>
                                        <div className="item"> <img src="images/work-03.jpg" alt="work-03"/> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-part">
                                <h4 className="title">Dreams of glory</h4>
                                <span className="text-left category">Illustraion Industry&nbsp;&nbsp;•&nbsp;&nbsp;United States of America</span>
                                <div className="popup-line"></div>
                                <span className="work-details">WordPress Development + Blog + Branding + eNewsletter</span>
                                <div className="popup-line"></div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="popup-line"></div>
                                <span className="work-details">Client Speak</span>
                                <p className="client-speak">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span>Jone Doe&nbsp;&nbsp;•&nbsp;&nbsp;Google Inc</span></p>
                            </div>
                        </figcaption>
                    </figure>
                </li>
                <li className="popup-slideshow content-scroll">
                    <figure className="ipad-scroll">
                        <figcaption>
                            <div className="popup-slider">
                                <div id="carousel-example-generic-04" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="item active"> <img src="images/work-05.jpg" alt="work-05"/> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-part">
                                <h4 className="title">satra jean brand</h4>
                                <span className="text-left category">design Industry&nbsp;&nbsp;•&nbsp;&nbsp;australia</span>
                                <div className="popup-line"></div>
                                <span className="work-details">WordPress Development + Blog + Branding + eNewsletter</span>
                                <div className="popup-line"></div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="popup-line"></div>
                                <span className="work-details">Client Speak</span>
                                <p className="client-speak">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span>Jacskon Smith&nbsp;&nbsp;•&nbsp;&nbsp;Google Inc</span></p>
                            </div>
                        </figcaption>
                    </figure>
                </li>
                <li className="popup-slideshow content-scroll">
                    <figure className="ipad-scroll">
                        <figcaption>
                            <div className="popup-slider">
                                <div id="carousel-example-generic-05" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="item active"> <img src="images/work-06.jpg" alt="work-06"/> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-part">
                                <h4 className="title">flat screen wall</h4>
                                <span className="text-left category">Fashion Industry&nbsp;&nbsp;•&nbsp;&nbsp;United Kingdom</span>
                                <div className="popup-line"></div>
                                <span className="work-details">Magento Development + WordPress Development + Mobile Website</span>
                                <div className="popup-line"></div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="popup-line"></div>
                                <span className="work-details">Client Speak</span>
                                <p className="client-speak">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span>Stella Kromstain&nbsp;&nbsp;•&nbsp;&nbsp;Google Inc</span></p>
                            </div>
                        </figcaption>
                    </figure>
                </li>
                <li className="popup-slideshow content-scroll">
                    <figure className="ipad-scroll">
                        <figcaption>
                            <div className="popup-slider">
                                <div id="carousel-example-generic-06" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="item active"> <img src="images/work-07.jpg" alt="work-07"/> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-part">
                                <h4 className="title">parament action</h4>
                                <span className="text-left category">product Industry&nbsp;&nbsp;•&nbsp;&nbsp;United States of America</span>
                                <div className="popup-line"></div>
                                <span className="work-details">Custom Website Development + Facebook Pages Design + eNewsletter</span>
                                <div className="popup-line"></div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="popup-line"></div>
                                <span className="work-details">Client Speak</span>
                                <p className="client-speak">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span>Jerry Gordinter&nbsp;&nbsp;•&nbsp;&nbsp;Google Inc</span></p>
                            </div>
                        </figcaption>
                    </figure>
                </li>
                <li className="popup-slideshow content-scroll">
                    <figure className="ipad-scroll">
                        <figcaption>
                            <div className="popup-slider">
                                <div id="carousel-example-generic-07" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="item active"> <img src="images/work-08.jpg" alt="work-08" /> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-part">
                                <h4 className="title">visual art exibition</h4>
                                <span className="text-left category">Fashion Industry&nbsp;&nbsp;•&nbsp;&nbsp;australia</span>
                                <div className="popup-line"></div>
                                <span className="work-details">Custom Website Development + Branding + Campaign </span>
                                <div className="popup-line"></div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="popup-line"></div>
                                <span className="work-details">Client Speak</span>
                                <p className="client-speak">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span>Jone Doe&nbsp;&nbsp;•&nbsp;&nbsp;Google Inc</span></p>
                            </div>
                        </figcaption>
                    </figure>
                </li>
                </ul>
                <nav className="popup-navigation"> <span className="icon nav-prev"></span> <span className="icon nav-next"></span> <span className="icon nav-close"></span> </nav>
                </div>
                </section> */}
                {/* work end */}
                {/* testimonial */}
                {/* <section id="testimonial" className="testimonial">
                <div className="color-overlay">
                <div className="container">
                <div className="row text-center os-animation" data-os-animation="fadeInUp">
                    <h2 className="title">Testimonial</h2>
                </div>
                <div className="row text-center os-animation" data-os-animation="fadeInUp">
                    <div data-ride="carousel" className="carousel slide" id="myCarousel">
                        <ol className="carousel-indicators">
                            <li data-slide-to="0" data-target="#myCarousel"></li>
                            <li data-slide-to="1" data-target="#myCarousel"></li>
                            <li data-slide-to="2" data-target="#myCarousel" className="active"></li>
                            <li data-slide-to="3" data-target="#myCarousel"></li>
                            <li data-slide-to="4" data-target="#myCarousel"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item">
                                <div className="container">
                                    <div className="carousel-caption">
                                        <p>We build pretty complex tools and this allows us to take designs and turn them into functional prototypes quickly and easily.</p>
                                        <div className="white-line"></div>
                                        <span>jerry gordinter</span> </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <div className="carousel-caption">
                                        <p>We build pretty complex tools and this allows us to take designs and turn them into functional prototypes quickly and easily.</p>
                                        <div className="white-line"></div>
                                        <span>Jone Doe</span> </div>
                                </div>
                            </div>
                            <div className="item active">
                                <div className="container">
                                    <div className="carousel-caption">
                                        <p>We build pretty complex tools and this allows us to take designs and turn them into functional prototypes quickly and easily.</p>
                                        <div className="white-line"></div>
                                        <span>Tom Anthony</span> </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <div className="carousel-caption">
                                        <p>We build pretty complex tools and this allows us to take designs and turn them into functional prototypes quickly and easily.</p>
                                        <div className="white-line"></div>
                                        <span>Stella Kromstain</span> </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <div className="carousel-caption">
                                        <p>We build pretty complex tools and this allows us to take designs and turn them into functional prototypes quickly and easily.</p>
                                        <div className="white-line"></div>
                                        <span>Jone Doe</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </section> */}
                {/* testimonial end */}
                {/* team */}
                {/* <section id="team" className="team gray-bg">
                <div className="container">
                <div className="row border-bottom os-animation text-center" data-os-animation="fadeInUp">
                <div className="col-md-6 col-sm-6 title-text border-right">
                    <h2 className="title">our team</h2>
                </div>
                <div className="col-md-6 col-sm-6 simple-text">
                    <p className="description text-left">We are a fun mix of designers and strategists with a great passion for all things creative. We love what we do, it's a way of life.</p>
                </div>
                </div>
                <div className="row os-animation" data-os-animation="fadeInUp">
                <p className="lead width">We grow brands by making decisions that are rooted in business strategy.</p>
                </div>
                <div className="row os-animation" data-os-animation="fadeInUp">
                <div className="col-md-3 team-details os-animation text-center" data-os-animation="bounceIn">
                    <figure className="team-profile"> --><!-- 800 X 966 --><!-- <img src="images/team-01.jpg" alt="team-01" />
              <figcaption className="text-center our-team">
                <p className="content-white text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="orange-line"></div>
                <div className="social"> <a href="http://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a> <a href="http://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a> <a href="http://plus.google.com/" target="_blank"><i className="fa fa-google-plus"></i></a></div>
              </figcaption>
              </figure>
              <div className="namerol">
                <span>Sara smith</span>
                <div className="orange-line text-center"></div>
                <p className="content">Founder and ceo</p>
              </div>
          </div>
          <div className="col-md-3 team-details os-animation text-center" data-os-animation="bounceIn">
              <figure className="team-profile">
                <img src="images/team-02.jpg" alt="team-02" />
                <figcaption className="text-center our-team">
                    <p className="content-white text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="orange-line"></div>
                    <div className="social"> <a href="http://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a> <a href="http://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a> <a href="http://plus.google.com/" target="_blank"><i className="fa fa-google-plus"></i></a></div>
                </figcaption>
              </figure>
              <div className="namerol">
                <span>sommer Christian</span>
                <div className="orange-line text-center"></div>
                <p className="content">creative studio head</p>
              </div>
          </div>
          <div className="col-md-3 team-details os-animation text-center" data-os-animation="bounceIn">
              <figure className="team-profile">
                <img src="images/team-03.jpg" alt="team-03" />
                <figcaption className="text-center our-team">
                    <p className="content-white text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="orange-line"></div>
                    <div className="social"> <a href="http://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a> <a href="http://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a> <a href="http://plus.google.com/" target="_blank"><i className="fa fa-google-plus"></i></a></div>
                </figcaption>
              </figure>
              <div className="namerol">
                <span>Jane lupkin</span>
                <div className="orange-line text-center"></div>
                <p className="content">magento developer</p>
              </div>
          </div>
          <div className="col-md-3 team-details os-animation text-center" data-os-animation="bounceIn">
              <figure className="team-profile">
                <img src="images/team-04.jpg" alt="team-04" />
                <figcaption className="text-center our-team">
                    <p className="content-white text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="orange-line"></div>
                    <div className="social"> <a href="http://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a> <a href="http://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a> <a href="http://plus.google.com/" target="_blank"><i className="fa fa-google-plus"></i></a></div>
                </figcaption>
              </figure>
              <div className="namerol">
                <span>Sebastian roll</span>
                <div className="orange-line text-center"></div>
                <p className="content">Logo / branding designer</p>
              </div>
          </div>
    </div>
    <div className="text-center row os-animation" data-os-animation="fadeInUp">
    <p className="light">Creative thinkers, clever developer and marketing</p>
    <p className="lead big">superheroes apply here.</p>
    <p className="label">we're hiring</p>
    </div>
  </div>
  </section> */}
  {/*  team end   */}
  {/* counter */}
  {/* 
  <section id="conter-box" className="conter-box">
    <div className="color-overlay">
        <div className="container">
          <div className="row os-animation" data-os-animation="fadeInUp">
              <div className="col-md-3 col-sm-5 text-center">
                <div id="conterbox-01" className="counterBox counterWithAnimation" data-delay="400" data-animation="fade-in-left" data-countNmber="312">
                    <span className="counterBoxNumber">312</span>
                    <div className="orange-line"></div>
                    <h6 className="counterBoxDetails">Pizzas Ordered</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-5 text-center">
                <div id="conterbox-02" className="counterBox counterWithAnimation" data-delay="400" data-animation="fade-in-left" data-countNmber="980">
                    <span className="counterBoxNumber">980</span>
                    <div className="orange-line"></div>
                    <h6 className="counterBoxDetails">Happy Clients</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-5 text-center">
                <div id="conterbox-03" className="counterBox counterWithAnimation" data-delay="400" data-animation="fade-in-left" data-countNmber="810">
                    <span className="counterBoxNumber">810</span>
                    <div className="orange-line"></div>
                    <h6 className="counterBoxDetails">Projects Completed</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-5 last text-center">
                <div id="conterbox-04" className="counterBox counterWithAnimation" data-delay="400" data-animation="fade-in-left" data-countNmber="600">
                    <span className="counterBoxNumber">600</span>
                    <div className="orange-line"></div>
                    <h6 className="counterBoxDetails">Comments</h6>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
  */}
  {/* counter  */}
  {/* blog */}
  {/* 
  <section id="blog" className="blog gray-bg">
    <div className="container">
        <div className="row border-bottom os-animation text-center" data-os-animation="fadeInUp">
          <div className="col-md-6 col-sm-6 title-text border-right">
              <h2 className="title">our blog</h2>
          </div>
          <div className="col-md-6 col-sm-6 simple-text">
              <p className="description text-left">We are a fun mix of designers and strategists with a great passion for all things creative. We love what we do, it's a way of life.</p>
          </div>
        </div>
        <div id="group-01" className="row blog-content os-animation group show active" data-os-animation="fadeInUp">
          <div className="col-md-12 blog-image">
              <img src="images/blog-img-01.jpg" className="fadeIn blog-img" alt="blog-img-01" />
              <div className="col-md-1 blog-day text-center"> <span>15</span> </div>
          </div>
          <div className="col-md-12 frameOverlay">
              <div className="col-md-10 col-md-offset-2">
                <div className="blog-title">
                    <h5 className="title">standard post with preview picture</h5>
                    <span className="month">June 15, 2013  &nbsp;/&nbsp;  By Admin in Creative, Design</span> 
                </div>
                <div className="blog-content-out">
                    <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <a href="blog-list.html" className="small-button text-left">more details</a> 
                </div>
              </div>
          </div>
        </div>
        <div id="group-02" className="row blog-content os-animation group show" data-os-animation="fadeInUp">
          <div className="col-md-12 blog-image">
              <img src="images/blog-img-02.jpg" className="fadeIn blog-img" alt="blog-img-02" />
              <div className="col-md-1 blog-day text-center"> <span>20</span> </div>
          </div>
          <div className="col-md-12 frameOverlay">
              <div className="col-md-10 col-md-offset-2">
                <div className="blog-title">
                    <h5 className="title">standard post with gallery</h5>
                    <span className="month">June 20, 2013  &nbsp;/&nbsp;  By Admin in Creative, Design</span> 
                </div>
                <div className="blog-content-out">
                    <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <a href="blog-list.html" className="small-button text-left">more details</a>
                </div>
              </div>
          </div>
        </div>
        <div id="group-03" className="row blog-content os-animation group show" data-os-animation="fadeInUp">
          <div className="col-md-12 blog-image">
              <img src="images/blog-img-03.jpg" className="fadeIn blog-img" alt="blog-img-03" />
              <div className="col-md-1 blog-day text-center"> <span>25</span> </div>
          </div>
          <div className="col-md-12 frameOverlay">
              <div className="col-md-10 col-md-offset-2">
                <div className="blog-title">
                    <h5 className="title">simple post with preview video</h5>
                    <span className="month">June 25, 2013  &nbsp;/&nbsp;  By Admin in Creative, Design</span> 
                </div>
                <div className="blog-content-out">
                    <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <a href="blog-list.html" className="small-button text-left">more details</a>
                </div>
              </div>
          </div>
        </div>
        <div id="group-04" className="row blog-content os-animation group show" data-os-animation="fadeInUp">
          <div className="col-md-12 blog-image">
              <img src="images/blog-img-04.jpg" className="fadeIn blog-img" alt="blog-img-04" />
              <div className="col-md-1 blog-day text-center"> <span>27</span> </div>
          </div>
          <div className="col-md-12 frameOverlay">
              <div className="col-md-10 col-md-offset-2">
                <div className="blog-title">
                    <h5 className="title">standard post with preview picture</h5>
                    <span className="month">June 27, 2013  &nbsp;/&nbsp;  By Admin in Creative, Design</span> 
                </div>
                <div className="blog-content-out">
                    <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <a href="blog-list.html" className="small-button">more details</a>
                </div>
              </div>
          </div>
        </div>
        <div className="group">
          <div id="group-05" className="row blog-content os-animation" data-os-animation="fadeInUp">
              <div className="col-md-12 blog-image">
                <img src="images/blog-img-01.jpg" className="fadeIn blog-img" alt="blog-img-01" />
                <div className="col-md-1 blog-day text-center"> <span>29</span> </div>
              </div>
              <div className="col-md-12 frameOverlay">
                <div className="col-md-10 col-md-offset-2">
                    <div className="blog-title">
                      <h5 className="title">standard post with preview picture</h5>
                      <span className="month">June 29, 2013  &nbsp;/&nbsp;  By Admin in Creative, Design</span> 
                    </div>
                    <div className="blog-content-out">
                      <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <a href="blog-list.html" className="small-button">more details</a>
                    </div>
                </div>
              </div>
          </div>
          <div id="group-06" className="row blog-content os-animation" data-os-animation="fadeInUp">
              <div className="col-md-12 blog-image">
                <img src="images/blog-img-02.jpg" className="fadeIn blog-img" alt="blog-img-02" />
                <div className="col-md-1 blog-day text-center"> <span>30</span> </div>
              </div>
              <div className="col-md-12 frameOverlay">
                <div className="col-md-10 col-md-offset-2">
                    <div className="blog-title">
                      <h5 className="title">standard post with preview picture</h5>
                      <span className="month">June 30, 2013  &nbsp;/&nbsp;  By Admin in Creative, Design</span> 
                    </div>
                    <div className="blog-content-out">
                      <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <a href="blog-list.html" className="small-button">more details</a>
                    </div>
                </div>
              </div>
          </div>
          <div id="group-07" className="row blog-content os-animation" data-os-animation="fadeInUp">
              <div className="col-md-12 blog-image">
                <img src="images/blog-img-03.jpg" className="fadeIn blog-img" alt="blog-img-03" />
                <div className="col-md-1 blog-day text-center"> <span>31</span> </div>
              </div>
              <div className="col-md-12 frameOverlay">
                <div className="col-md-10 col-md-offset-2">
                    <div className="blog-title">
                      <h5 className="title">standard post with preview picture</h5>
                      <span className="month">June 31, 2013  &nbsp;/&nbsp;  By Admin in Creative, Design</span> 
                    </div>
                    <div className="blog-content-out">
                      <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <a href="blog-list.html" className="small-button">more details</a>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className="row buttons border-top os-animation text-center" data-os-animation="fadeInUp"> <a id="load-more" className="small-button text-center">Load More Blog</a>&nbsp;&nbsp;<a href="blog-list.html" className="small-button text-center">View All Blog</a> </div>
    </div>
  </section>
  */}
  {/* blog end  */}
  {/* client logos */}
  {/* 
  <section className="client-logos">
    <div className="color-overlay">
        <div className="container">
          <div className="row os-animation" data-os-animation="bounceIn">
              <div className="clients-slider text-center">
                <ul className="slides">
                    <li><img alt="Client Logo" src="images/client1.png" /></li>
                    <li><img alt="Client Logo" src="images/client2.png" /></li>
                    <li><img alt="Client Logo" src="images/client3.png" /></li>
                    <li><img alt="Client Logo" src="images/client4.png" /></li>
                </ul>
              </div>
          </div>
        </div>
    </div>
  </section>
  */}
  {/* client logos end  */}
  {/* contact */}
  <section id="contact" className="contact gray-bg">
    <div className="container">
        <div className="row border-bottom os-animation text-center" data-os-animation="fadeInUp">
          <div className="col-md-6 col-sm-6 title-text border-right">
              <h2 className="title">Contact</h2>
          </div>
          <div className="col-md-6 col-sm-6 simple-text">
              <p className="description text-left">How we can help you. We like to talk and on the strength of that you are invited for a coffee at our head office.</p>
          </div>
        </div>
        <div className="row contact-info os-animation" data-os-animation="fadeInUp">
          <div className="col-md-6 col-sm-6 left-part">
              <div className="head">
                <span className="contact-title">how to reach us</span>
                <p className="content contact-text">Pick a way from below as per your convenience</p>
              </div>
              <div className="head">
                <span className="contact-title">our address</span>
                <p className="content contact-text address">R.S Technology<br></br>
                    F-1, B-138, Dadu Dayal Nagar<br></br>
                    Mansarovar, Jaipur-302020, India.
                </p>
              </div>
              <ul className="icon-list">
                <li><i className="fa fa-phone"></i>+91-7737889813</li>
                <li className="divider"></li>
                <li><i className="fa fa-phone"></i>+91-7568561199</li>
                <li className="divider"></li>
                <li><i className="fa fa-envelope-o"></i><a href="mailto:no-reply@domain.com">contact@rs-tech.in</a></li>
                <li className="divider"></li>
                <li><i className="fa fa-globe"></i><a href="javascript:;">www.rs-tech.in</a></li>
              </ul>
          </div>
          <div className="col-md-6 col-sm-6 right-part">
              <div className="form-group">
                <form action="javascript:void(0)" method="post">
                    <input className="form-control" name="name" placeholder="Your Name" type="text" />
                    <input className="form-control" name="email" placeholder="Your Email" type="text" />
                    <input className="form-control" name="website" placeholder="Your Website" type="text" />
                    <textarea className="form-control" placeholder="Your Comment" name="comment"></textarea>
                    <button id="submit-button" className="small-button text-left">Send message</button>
                </form>
              </div>
              <div id="success"></div>
          </div>
        </div>
    </div>
  </section>
  {/* contact end */}
  {/* map */}
  <section className="map">
    <div className="map-overlay">
        <button className="map-button" value="Show map">Locate Us on Map</button>
    </div>
    <div id="googlemap">
        {/* <div id="map" data-address="Dadu Dayal Nagar,, Mansarovar, Sanganer, Jaipur, Rajasthan 302020" data-text="<p><strong>RS Technology Headquarter.</strong><br></br>Dadu Dayal Nagar,, Mansarovar, Sanganer, Jaipur, Rajasthan 302020</p>"></div> */}
    </div>
  </section>
  {/* map end */}
  {/* footer */}
  <footer id="footer" className="footer">
    <div className="color-overlay">
        <div className="container">
          <div className="row os-animation" data-os-animation="bounceIn">
              <ul className="social footer-social text-center">
                <li><a href="http://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                <li><a href="http://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                <li><a href="http://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="http://www.youtube.com/" target="_blank"><i className="fa fa-youtube"></i></a></li>
                <li><a href="http://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                <li><a href="javascript:;"><i className="fa fa-rss"></i></a></li>
              </ul>
          </div>
          <div className="row os-animation" data-os-animation="bounceIn">
              <div className="transparent-line"></div>
          </div>
          <div className="row os-animation" data-os-animation="bounceIn">
              <p className="text-center content-white copy">&copy; 2016 R.S Technology.</p>
          </div>
        </div>
    </div>
  </footer>
  {/* footer end  */}
  {/* scroll to top  */}
  <a href="javascript:;" className="scrollToTop"><i className="fa fa-angle-up"></i></a> 
  {/* scroll to top End...  */}
  </div>
</div>
  );
}

export default App;
