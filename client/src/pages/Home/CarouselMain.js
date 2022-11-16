import React, {  Component } from 'react';
import {Carousel} from 'react-bootstrap';


class CarouselMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,  //index which u want to display first
            direction: null, //direction of the carousel..u need to set it to either 'next' or 'prev' based on user click
            nextIcon: <span className="glyphicon glyphicon-glass"></span>,
            prevIcon: <span className="glyphicon glyphicon-glass"></span>
        }
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const {nextIcon,prevIcon}=this.state;
        return (
            <Carousel nextIcon ={nextIcon} prevIcon={prevIcon}  index={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                <Carousel.Item>
                    <img width={900} height={500} alt='900x500'  src="https://blog.swio.vn/wp-content/uploads/2021/12/QUAN-CAFE-DEP-SON-TRA-DA-NANG-CHUDU43.COM-Cloud-3.jpg"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt='900x500' src="https://noithatkendesign.vn/storage/app/media/---------Asuoi/mikazuki-japanese-resorts-6.jpg"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt='900x500' src='https://xevati.com/wp-content/uploads/2021/10/Gara-o-to-Dai-Thong-da-nang.jpg'/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default CarouselMain;