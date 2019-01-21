import React from 'react';
import {fbase, firebaseApp} from '../fbase';
class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [],
            book: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: "",
            },
        }
    }
    handleLoginChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleChange = (event) => {
      
        let newBook;
        if(event.target.name === "onStock") {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.checked
            };
        } else {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value
            }
        }
        this.setState({book: newBook}) 
    };

    addNewBook = (event) => {
        event.preventDefault();
   
        let newBook = { ...this.state.book };

        this.setState({
            books: [...this.state.books, newBook],
            book: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: "",
            },
            loggedIn: false,
            email: "",
            password: ""
        });   
    }

    componentDidMount() {
        if(localStorage.getItem("loggedIn")) {
            this.setState({loggedIn: localStorage.getItem("loggedIn")})
        }
        this.ref = fbase.syncState('bookstore/books',{
            context: this,
            state: 'books'
        });
    }
    componentWillUnmount() {
        fbase.removeBinding(this.ref)
    }
    authenticate = (event) => {
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then( ()=> {
                this.setState({loggedIn: true});
                localStorage.setItem("loggedIn", true);
            })
            .catch( ()=> {
                console.log("Unable to authenticate");
            })
    }
    render() {
        return (
            <div>
                {!this.state.loggedIn &&
                <div className="col-sm-6 offset-sm-3">
                    <br/>
                    <form onSubmit={this.authenticate}>
                        <input type="text" placeholder="email" id="email" name="email" className="form-control"
                            onChange={this.handleLoginChange} value={this.state.email}/>
                            <br/>
                        <input type="password" id="password" name="password" className="form-control"
                            onChange={this.handleLoginChange} value={this.state.password}/>
                            <br/>
                        <button type="submit" className="btn btn-primary">Log in</button>
                    </form>
                </div>
                  
                }
                {this.state.loggedIn &&
                <div className="adminPanel col-md-4 offset-md-4">
                    <form onSubmit={this.addNewBook}>
                        <div className="form-group">
                            <input type="text" placeholder="Book name" id="bookName" name="name" className="form-control"
                                onChange={this.handleChange} value={this.state.book.name} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="author" id="author" name="author" className="form-control"
                                onChange={this.handleChange} value={this.state.book.author} />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="description" id="description" name="description" className="form-control"
                                onChange={this.handleChange} value={this.state.book.description} />
                        </div>
                        <div className="form-group">
                            <input type="checkbox" id="onStock" name="onStock" className="form-check-input"
                                onChange={this.handleChange} value={this.state.book.onStock} />
                            <label htmlFor="onStock" className="form-check-label">On stock</label>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Book image" id="image" name="image" className="form-control"
                                onChange={this.handleChange} value={this.state.book.image} />
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
                }
            </div>

        )
    }
}
export default AdminPanel;