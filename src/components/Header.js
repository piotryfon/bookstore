import React from 'react';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            bookstoreName: 'Black Books',
            clicked: true,
            textColor: "white",
            backgroundColor: "black"
        }
    }
    handleClick = () => {

        if(this.state.clicked) {
            this.setState({
                bookstoreName: 'White Books',  
                textColor: "black",
                backgroundColor: "white"  
            })
        } else {
            this.setState({
                bookstoreName: 'Black Books', 
                textColor: "white",
                backgroundColor: "black"    
            })  
        }
        this.setState({
            clicked: ! this.state.clicked
        })
    }

    render() {

        let headerCss = {
            color: this.state.textColor,
            backgroundColor: this.state.backgroundColor
        }
        return (
            <div className="header col-12" style={headerCss} onClick={this.handleClick}>
                <h1>{this.state.bookstoreName}</h1>
            </div>
        )
    }
}
export default Header;