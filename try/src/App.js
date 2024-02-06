import './App.css';
import './media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Nav, Navbar, Row, Image, Collapse } from 'react-bootstrap';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

import img1 from './image/p1.png';
import img2 from './image/p2.png';
import img3 from './image/p3.png';

function App() {
  return (
    <>

      {/*  */}
      <div className='header_section'>
        <Container>
          <Nav className="navbar">
            <div className='d-flex'><Image src={require(`./image/logo.png`)}></Image></div>
            <button aria-expanded= "true" data-target= "#me" data-toggle="me" aria-controls="me">
              <Navbar.Toggle className='b ms-auto'/>
            </button>
            <div md={NaN} className='menu d-flex' id='me'>
              <ul className='navitem res d-flex mr-auto ps-5 pe-5 mb-0'>
                <li><a>HOME</a></li>
                <li><a>SERVICES</a></li>
                <li><a>ABOUT</a></li>
                <li><a>SHOP</a></li>
                <li><a>CONTACT</a></li>
              </ul>
              <form className='res form-inline my-2 my-lg-0'>
                <div className='search_icon'>
                  <ul className='d-flex'>
                    <li className='ps-3'><a><Image src={require(`./image/search.png`)}></Image></a></li>
                    <li className='ps-3'><a>LOGIN</a></li>
                  </ul>
                </div>
              </form>
            </div>
            <div className='banner_section'>
              <Container>
                <div className='carousel'>
                  <div className='carousel-inner'>
                    <div className='slid_text'>
                      <h1 className='furniture-text pb-2 mb-0'>FURNITURE</h1>
                      <p className='there_text w-50 m-auto'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
                      <div className='contact_bt_main'>
                        <div className='contact_bt'>
                          <Button className='bg-warning'>ABOUT US</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </Nav>
        </Container>
      </div>


      {/*  */}


      <div className='our-section'>
        <Container>
          <ul>
            <li className='our-ser-hed'><a>OUR SERVICES</a></li>
          </ul>
          <p className='p'>There are many variations of passages of Lorem Ipsum</p>
          <Row className='our'>
            <Col sm={6} lg={3} className='ps-3 pe-3'>
              <Image src={require(`./image/our1.png`)} className='icon1'></Image>
              <div className='box'>
                <h3 className='pt-3 pb-2 m-0'>FURNITURES</h3>
                <p className='mt-2 mb-3 me-3'>There are many variations of passages of Lorem Ipsum available, but the</p>
                <Button className='btn2 pt-2 pb-2' variant="warning">READ MORE</Button>
              </div>
            </Col>
            <Col sm={6} lg={3} className='ps-3 pe-3'>
              <Image src={require(`./image/our2.png`)} className='icon1'></Image>
              <div className='box'>
                <h3 className='pt-3 pb-2 m-0'>OFFICE</h3>
                <p className='mt-2 mb-3 me-3'>There are many variations of passages of Lorem Ipsum available, but the</p>
                <Button className='btn2 pt-2 pb-2' variant="warning">READ MORE</Button>
              </div>
            </Col>
            <Col sm={6} lg={3} className='ps-3 pe-3'>
              <Image src={require(`./image/our3.png`)} className='icon1'></Image>
              <div className='box'>
                <h3 className='pt-3 pb-2 m-0'>HOME</h3>
                <p className='mt-2 mb-3 me-3'>There are many variations of passages of Lorem Ipsum available, but the</p>
                <Button className='btn2 pt-2 pb-2' variant="warning">READ MORE</Button>
              </div>
            </Col>
            <Col sm={6} lg={3} className='ps-3 pe-3'>
              <Image src={require(`./image/our4.png`)} className='icon1'></Image>
              <div className='box'>
                <h3 className='pt-3 pb-2 m-0'>BADROOM</h3>
                <p className='mt-2 mb-3 me-3'>There are many variations of passages of Lorem Ipsum available, but the</p>
                <Button className='btn2 pt-2 pb-2' variant="warning">READ MORE</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      <div className='bg-warning'>
        <Container>
          <Row className='space about-us'>
            <Col xs={12} lg={6}>
              <div className='about'>
                <h2 className='pb-2'>ABOUT US</h2>
                <p className='pt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have able</p>
                <Button className='btn3 pt-2 pb-2 mt-5' variant="dark">READ MORE</Button>
              </div>
            </Col>
            <Col xs={12} lg={6} className='wi'>
              <div className='about-img'>
                <Image  src={require(`./image/bad.png`)} className='w-55'></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='space w-100'>
        <Container className='our-furniture'>
          <h2 className='pb-2 m-0'>OUR FURNITURES</h2>
          <p className='furp mt-2 me-3 mb-3'>There are many variations of passages of Lorem Ipsum</p>
          <div className='our-fur'>
            <Row>
              <Col sm={12} md={6} className='box1'>
                <div>
                  <Image src={require(`./image/k1.png`)} className='w-100'></Image>
                  <h5 className='pt-4 pb-2 m-0'>TEMPOR INCIDIDUNT UT LABORE ET DOLORE</h5>
                  <p className='mt-2 mb-3 me-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                </div>
              </Col>
              <Col sm={12} md={6} className='box1'>
                <div>
                  <Image src={require(`./image/k2.png`)} className='w-100'></Image>
                  <h5 className='pt-4 pb-2 m-0'>TEMPOR INCIDIDUNT UT LABORE ET DOLORE</h5>
                  <p className='mt-2 mb-3 me-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className='who_section'>
        <Container>
          <h1 className='who_title pb-2'>WHO WE ARE ?</h1>
          <h4 className='designer_text pb-2'>DESIGNERS & INNOVATORS</h4>
          <p className='lorem_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
        </Container>
        <div className='get_main'>
          <div className='get_bt w-100'>
            <Button variant="dark">GET A QUOTE</Button>
          </div>
        </div>
      </div>

      <div className='projects space'>
        <Container>
          <h1 className='our_text pb-2 mb-0 text-center'>OUR PROJECTS</h1>
          <p className='text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <div className='owl-1'>
            <OwlCarousel className='owl-theme' loop padding={10} nav dots={false}>
              <div class='item'>
                <img src={img1}></img>
              </div>
              <div class='item'>
                <img src={img2}></img>
              </div>
              <div class='item'>
                <img src={img3}></img>
              </div>
              <div class='item'>
                <img src={img1}></img>
              </div>
              <div class='item'>
                <img src={img2}></img>
              </div>
              <div class='item'>
                <img src={img3}></img>
              </div>
            </OwlCarousel>
          </div>
        </Container>
      </div>

      <div className='contant_section'>
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <h1 className='contant_text'>CONTACT US</h1>
              <div className='mail_section'>
                <input type='text' className='email-bt' placeholder='Name' name='Name'></input>
                <input type='text' className='email-bt' placeholder='Email' name='Name'></input>
                <input type='text' className='email-bt' placeholder='Phone Number' name='Name'></input>
                <textarea className='message-bt' placeholder='Message' rows={5} id='comment' name='Message'  ></textarea>
                <div className='send_bt'>
                  <button className='pt-2 pb-2'>SEND</button>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12} className='m-auto'>
              <div className='map_main'>
                <div className='map-respon text-center'>
                  <img src={require(`./image/map.png`)}></img>
                </div>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>

      <div className='footer space'>
        <Container>
          <Row>
            <Col lg={3} sm={6} xs={12}>
              <h1 className='customer_text mb-0 pb-2'>INFORMATION</h1>
              <p className='footer_text me-3 mt-3 mb-3'>There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
            </Col>
            <Col lg={3} sm={6} xs={12}>
              <h1 className='customer_text'>LET US HELP YOU</h1>
              <p className='footer_text me-3 mt-3 mb-3'>There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
            </Col>
            <Col lg={3} sm={6} xs={12}>
              <h1 className='customer_text'>USEFUL LINKS</h1>
              <p className='footer_text me-3 mt-3 mb-3'>About Us
                <br></br>
                Careers
                <br></br>
                Sell on shopee
                <br></br>
                Press & News
                <br></br>
                Competitions
                <br></br>
                Terms & Conditions</p>
            </Col>
            <Col className='col-lg-3 col-sm-6'>
              <h1 className='customer_text'>OUR DESIGN</h1>
              <p className='footer_text me-3 mt-3 mb-3'>There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
