import React, { Component } from 'react'; 
import { Container, Row, Col } from 'react-grid-system';
import rendered2 from './rendered2.jpg';
import './index.css';
import './content.css';






// Data for carousel


const carouselSlidesData = [
  {
    content:
      `"Providing high quality of web services is still something missing in the market. But, with us you fill this gap."`,
    author: "Digital-Tech -", 
    source: " Developers"
  }, {
    content:
      "We can help your business through providing a robust web applications that can meet your clients.",
    author: "Digital-Tech -",
    source: " All Staff"
   
  }, {
    content:
      "Our priority is to achieve a powerful user experience, smooth implementation of web solutions and effective usage of advanced digital technologies.",
    author: "Digital-Tech -",
     source: " CEO"
  }
];

class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </a>
    );
  }
}

class CarouselRightArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
    );
  }
}

class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <p className="carousel-slide__content">{this.props.slide.content}</p>

        <p>
          <strong className="carousel-slide__author">
            {this.props.slide.author}
          </strong>
          {" "}
          <small className="carousel-slide__source">
            {this.props.slide.source}
          </small>
        </p>
      </li>
    );
  }
}

// Carousel wrapper component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex==index} 
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>
    );
  }
}






class AccordionGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    isCollapsed: true,
                    isAriaExpanded: false,
                    isHidden: true,
                    title: 'Read more',
                    content: 'Digital-Tech provides offers a broad range of services for small to large business within Australia. This includes all web design/development solutions such as, App Development, Web Design, Mobile App and Web Optimization. '
                }
            
           
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, id) {
        const itemIndex = this.state.items.findIndex(i => i.id === id);
        const item = {...this.state.items[itemIndex]};
        const items = [...this.state.items];

        item.isCollapsed = !this.state.items[itemIndex].isCollapsed;
        item.isAriaExpanded = !this.state.items[itemIndex].isAriaExpanded;
        item.isHidden = !this.state.items[itemIndex].isHidden;

        items[itemIndex] = item;
        // Need to manage state based on which 'elem' triggered event?
        this.setState({ items: items });
    }

    render() {
        const items = this.state.items;

        return (
            <div className="accordion">
                { items.map(item =>
                    <AccordionItem
                        key={item.id}
                        item={item}
                        ariaExpanded={items[item.id].isAriaExpanded}
                        collapsed={items[item.id].isCollapsed}
                        hidden={items[item.id].isHidden}
                        expand={this.handleClick}
                    />
                )}
            </div>
        );
    }
}

const AccordionItem = ({...props}) => {
    const { item, ariaExpanded, collapsed, hidden, expand } = props;

    return (
        <div>
            <h2 className="accordion-title">
                <button
                    className="accordion-btn"
                    id={item.id}
                    aria-expanded={ariaExpanded}
                    onClick={(e) => expand(e, item.id)}>
                        <span className="accessibility">{ collapsed ? 'expand' : 'collapse' }</span>
                        <span className="accordion-icon" aria-hidden="true">{ collapsed ? '+' : '-' }</span>
                        {item.title} 
                </button>
            </h2>
            <div className="accordion-content" hidden={hidden}>
                <p>{ item.content }</p>
            </div>
        </div>
    );
}
class AccordionSpecific extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    isCollapsed: true,
                    isAriaExpanded: false,
                    isHidden: true,
                    title: 'Read more',
                    content: 'We can add value to your business through objective driven digital design solutions by offering Graphic Design techniques, UX Design tools and fully Responsive Websites. In addition, we can build E-commerce websites using the most powerful CMSs as well as working with SEO. Also, we can develop Native & Hybrid Android & iPhone Apps and provide complete testing to web and smartphone applications.'
                }
             
           
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, id) {
        const itemIndex = this.state.items.findIndex(i => i.id === id);
        const item = {...this.state.items[itemIndex]};
        const items = [...this.state.items];

        item.isCollapsed = !this.state.items[itemIndex].isCollapsed;
        item.isAriaExpanded = !this.state.items[itemIndex].isAriaExpanded;
        item.isHidden = !this.state.items[itemIndex].isHidden;

        items[itemIndex] = item;
        // Need to manage state based on which 'elem' triggered event?
        this.setState({ items: items });
    }

    render() {
        const items = this.state.items;

        return (
            <div className="accordion">
                { items.map(item =>
                    <AccordionItem
                        key={item.id}
                        item={item}
                        ariaExpanded={items[item.id].isAriaExpanded}
                        collapsed={items[item.id].isCollapsed}
                        hidden={items[item.id].isHidden}
                        expand={this.handleClick}
                    />
                )}
            </div>
        );
    }
}

const AccordionItem2 = ({...props}) => {
    const { item, ariaExpanded, collapsed, hidden, expand } = props;

    return (
        <div>
            <h2 className="accordion-title">
                <button
                    className="accordion-btn"
                    id={item.id}
                    aria-expanded={ariaExpanded}
                    onClick={(e) => expand(e, item.id)}>
                        <span className="accessibility">{ collapsed ? 'expand' : 'collapse' }</span>
                        <span className="accordion-icon" aria-hidden="true">{ collapsed ? '+' : '-' }</span>
                        {item.title} 
                </button>
            </h2>
            <div className="accordion-content" hidden={hidden}>
                <p>{ item.content }</p>
            </div>
        </div>
    );
}

class Content extends Component {

 
  render() {
    return (

 
    <div id="content" style={{textAlign: 'center'}}> 
      <div id="content-part-one">
      <h3 className="text" style={{}}>General Services</h3>
      <img src={rendered2} style={{}} width="1529" height="281" className="image2" alt="image"/>
    <AccordionGeneral />
    </div>
<div class="h_line"></div>
    <div id="content-part-two">
   <h3 className="text" style={{}}>Specific Services</h3>
   <div id="row_grids">
   <div className="row_grid">
   <Container>
  <Row>
    <Col sm={3} xs={6} className="rows row1">
     <span><i class="material-icons">palette</i> <i class="material-icons">brush</i> <i class="material-icons">
collections</i></span> 
<p>Graphic Design Techniques</p>
    </Col>
    <Col sm={3} xs={6} className="rows row2">
    <span><i class="material-icons">
assignment</i> <i class="material-icons">
create</i> <i class="material-icons">
dvr</i></span> 
<p>UX Design Tools</p>
    </Col>
    <Col sm={3} xs={6} className="rows row3">
      <span> <i class="material-icons">code</i> <i class="material-icons">transform</i> <i class="material-icons">devices</i></span> 
<p>Fully Responsive Websites</p>
    </Col>
    <Col sm={3} xs={6} className="rows row4">
      <span><i class="material-icons">shopping_cart</i> <i class="material-icons">settings</i> <i class="material-icons">
device_hub</i></span>
<p>E-commerce, CMS & SEO</p>
    </Col>


  </Row>
</Container>
</div>
  <div className="row_grid">
   <Container>
  <Row>
    <Col sm={3} xs={6} className="rows row5">
     <span><i class="material-icons">developer_mode</i> <i class="material-icons">phone_android</i> <i class="material-icons">phone_iphone</i></span> 
<p>Native & Hybrid Android & iPhone Apps</p>
    </Col>
    <Col sm={3} xs={6} className="rows row6">
    <span><i class="material-icons">settings_applications</i> <i class="material-icons">pageview</i> <i class="material-icons">verified_user</i></span> 
<p>Automation & Functional Testing</p>
    </Col>
    <Col sm={3} xs={6} className="rows second-last-row">
      <span><i class="material-icons">build</i> <i class="material-icons">
gavel</i> <i class="material-icons">alarm_on</i></span> 
<p>Usability & Performance Testing</p>
    </Col>
    <Col sm={3} xs={6} className="rows last-row">
      <span> <i class="material-icons">phonelink_setup</i> <i class="material-icons">phonelink_lock</i> <i class="material-icons">mobile_friendly</i></span> 
<p>Smartphone App Security Testing</p>
    </Col>


  </Row>
</Container>
</div>
 </div>
<AccordionSpecific />

   </div>
<div class="h_line"></div>
   <div className="carousel-container">
<Carousel slides={carouselSlidesData} />
   </div>
    </div>
 
    );
  }
}

export default Content;