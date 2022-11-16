import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Design.css';
import { dataDigitalBestSeller } from './data';
import imgGirl from '../../assets/img/unnamed.png';

function DesignChosen() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [item,setItem] = useState();

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <div className='design-form'>
        <div className='design-title'>
            <p>デザインを選ぶ</p>
        </div>
        <div className="Design">
      
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card" onClick={()=>{setItem(item)}}>
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
           
            </div>
            
          </div>
        ))}
      </Slider>
      <div className='design-label'>あなたのデザインを追加</div>
      <div className='design-display' >
        <img src={`${item?item.linkImg:imgGirl}`}></img>
      </div>
      <div className='design-label2'>確認</div>
      <div className='design-comment'>
        <div>このデザインをフィードバックする</div>
        <div className='submit-button'>
          <input type='text' placeholder='comment here'></input>
          <Button variant="outline-primary">select</Button>{' '}
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default DesignChosen;
