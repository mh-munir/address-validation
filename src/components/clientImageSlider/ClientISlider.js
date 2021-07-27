import React, {Component, Fragment} from 'react';
import  {Container, Row, Col} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import company from '../../asset/image/company.png';
import company2 from '../../asset/image/company-2.png';
import company3 from '../../asset/image/company-3.jpg';
import company4 from '../../asset/image/company-4.png';



class ClientISlider extends Component {

    render() {
        var settings = {
            dots: true,
            autoplay:true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 3,
            initialSlide: 0,
            speed:1500,
            loop:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 4,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
                }
            ]
        };
        return (
            <Fragment>

                <Container className="pY15 text-center">
                    <Row>
                        <Col>
                            <div className="ClientSliderTitle mB30">
                                <h4>YOU'RE IN GOOD COMPANY</h4>
                            </div>
                        </Col>
                    </Row>
                    <Slider {...settings}>

                        <div className="ClientImgItem p5">
                            <img src={company} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company2} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company3} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company4} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company2} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company3} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company2} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company4} alt="Client Logo" className="img-fluid" />
                        </div>
                        <div className="ClientImgItem p5">
                            <img src={company} alt="Client Logo" className="img-fluid" />
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientISlider;