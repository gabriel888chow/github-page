import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Slider.css';
import { Container, Row, Col } from 'react-bootstrap';


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
      <Container>
        <Row>
          <Col className='col d-flex justify-content-center align-items-center'>
              <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
              {/* <Button className='left-arrow col-2' onClick={prevSlide} /> */}
          </Col>
          <Col className='col d-flex justify-content-center'>
            {SliderData.map((slide, index) => {
              return (
                <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
                >
                  {index === current && (
                    <img src={slide.image} alt='travel image' className='image' />
                    )}
                </div>
              );
            })}
          </Col>
          <Col className='col d-flex justify-content-center align-items-center'>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {/* <Button className='right-arrow' onClick={nextSlide} /> */}
          </Col>
        </Row>
      </Container>
  );
};


export default ImageSlider;