import React, { Component } from 'react';
import lo from './lo.png';
import li from './li.png';
import './header.css';
import './index.css';


class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    isCollapsed: true,
                    isAriaExpanded: false,
                    isHidden: true,
                    title: 'Business',
                    content: 'Digital-Tech, based in Tasmania, Australia, provides full web solutions using the most advanced digital technologies.'
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
            <div className="Mid-header1">
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
        <div className="business">
            <h2 className="accordion-title">
                <button
                    className="accordion-btn"
                    id={item.id}
                    aria-expanded={ariaExpanded}
                    onClick={(e) => expand(e, item.id)}>
                        <span className="accessibility">{ collapsed ? 'expand' : 'collapse' }</span>
                        {item.title} 
                        <span className="accordion-icon" aria-hidden="true">{ collapsed ? '>>' : '<<' }</span>
                        
                </button>
            </h2>
            <div className="accordion-content" hidden={hidden}>
                <p>{ item.content }</p>
            </div>
        </div>
    );
}
class DropDown2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items2: [
                {
                    id: 0,
                    isCollapsed: true,
                    isAriaExpanded: false,
                    isHidden: true,
                    title: 'Mission',
                    content: 'We Strive to provide our clients with powerful web & digital solutions that meet their needs.'
                }
           
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, id) {
        const item2Index = this.state.items2.findIndex(i => i.id === id);
        const item2 = {...this.state.items2[item2Index]};
        const items2 = [...this.state.items2];

        item2.isCollapsed = !this.state.items2[item2Index].isCollapsed;
        item2.isAriaExpanded = !this.state.items2[item2Index].isAriaExpanded;
        item2.isHidden = !this.state.items2[item2Index].isHidden;

        items2[item2Index] = item2;
        // Need to manage state based on which 'elem' triggered event?
        this.setState({ items2: items2 });
    }

    render() {
        const items2 = this.state.items2;

        return (
            <div className="Mid-header2">
                { items2.map(item2 =>
                    <AccordionItem2
                        key={item2.id}
                        item2={item2}
                        ariaExpanded={items2[item2.id].isAriaExpanded}
                        collapsed={items2[item2.id].isCollapsed}
                        hidden={items2[item2.id].isHidden}
                        expand={this.handleClick}
                    />
                )}
            </div>
        );
    }
}

const AccordionItem2 = ({...props}) => {
    const { item2, ariaExpanded, collapsed, hidden, expand } = props;

    return (
        <div className="mission">
            <h2 className="accordion-title">
                <button
                    className="accordion-btn"
                    id={item2.id}
                    aria-expanded={ariaExpanded}
                    onClick={(e) => expand(e, item2.id)}>
                        <span className="accessibility">{ collapsed ? 'expand' : 'collapse' }</span>
                        <span className="accordion-icon" aria-hidden="true">{ collapsed ? '<<' : '>>' }</span>
                        {item2.title} 
                </button>
            </h2>
            <div className="accordion-content" hidden={hidden}>
                <p>{ item2.content }</p>
            </div>
        </div>
    );
}

class Header extends Component {
    
  render() {

    return (
     
        <header>
        <div className="Top-header">
           
          <img src={lo}  id="picture" alt="logo" style= {{position:'absolute'}}/>
          <img src={li}  className="Li" alt="logo" />
            
        </div>
        
          <DropDown  />
      <DropDown2  />

      
        <div  className="Low-header">
        <p>Powerfull Digital Solutions</p>
        </div> 
        </header>
    );
  }
}

export default Header;  