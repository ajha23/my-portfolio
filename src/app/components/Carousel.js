import React, { Component } from 'react';
import ImagePunit from '../assets/punitNayak.jpg'
import ImageGaurov from '../assets/gaurovOjha.jpg'
import {
    Carousel,
    CarouselItem,
    // CarouselControl,
    //CarouselIndicators,
    //CarouselCaption
} from 'reactstrap';

const items = [
    {
        id:"1",
        src: ImagePunit,
        altText: 'Punith',
        data: {
            name: 'Punith Nayak',
            designation: 'Software Engineer',
            message: 'Akhilesh is an independent problem solver with a focus on implementing latest technologies in the front end space.'
        }
    },
    {
        id:"2",
        src: ImageGaurov,
        altText: 'Gaurov',
        data: {
            name: 'Gaurov Ojha',
            designation: 'Full Stack Developer',
            message: 'Akhilesh is a blast to work with. His energy, creativity and demeanor make meetings and projects more interesting. His understanding of the strengths/limitations of different technologies helps projects to excel.'
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
                    key={item.id}
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
