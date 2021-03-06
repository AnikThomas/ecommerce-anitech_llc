import React,{ Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { ITEMS } from '../shared/carousel_items';


class CarouselHeader extends Component {
	constructor(props) {
		super(props);
		this.state = { 
            activeIndex: 0,
            items: ITEMS
        };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

    onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

    next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}
    render(){
        const {activeIndex} = this.state;
        const slides = this.state.items.map((item) => {
            return (
                
                <CarouselItem
                        onExiting={this.onExiting}
                        onExited={this.onExited}
                        key={item.src}>
                        <div>
                            <img className="d-block carouselItem" src={item.src} alt={""} style={{width: "100%"}}/> 
                        </div>
                    <CarouselCaption className="carouselCaption" captionText={item.caption} captionHeader={item.header}/>
                </CarouselItem>
                
            );
          });
    return(
        <div>
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}>
                <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        </div>  
    );
  }
}



export default CarouselHeader;
