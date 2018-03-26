import React, { Component } from 'react';
import Image1 from '../assets/myPhoto.jpg'
import Image2 from '../assets/chevron.png'
import {
    Carousel,
    CarouselItem,
    // CarouselControl,
    //CarouselIndicators,
    //CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: Image1,
        altText: 'Avatar',
        data: {
            name: 'Chandler Bing',
            designation: 'Web Designer',
            message: 'Akhilesh is just awesome. I am so happy to have met him!'
        }
    },
    {
        src: Image2,
        altText: 'Avatar',
        data: {
            name: 'Chris Fox',
            designation: 'CEO at Mighty Schools',
            message: 'Akhilesh saved us from a web disaster'
        }
    }
];

export default class BaseCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
    }

    onExiting = () => {
        this.animating = true;
    }

    onExited = () => {
        this.animating = false;
    }

    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} className="w3-left w3-circle w3-margin-right" style={{ width: "80px" }} />
                    <p><span className="w3-large w3-text-black w3-margin-right">{item.data.name}.</span> {item.data.designation}.</p>
                    <p>{item.data.message}</p><br />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                {slides}
                {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />

                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />  */}
            </Carousel>
        );
    }
}
