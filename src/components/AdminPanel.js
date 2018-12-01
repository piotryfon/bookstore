import React from 'react';

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            book: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: "",
            },
            books: []
        }
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
        let newBooks = [ ...this.state.books ];
        let newBook = { ...this.state.book };
        newBooks.push(newBook);
        this.setState({
            books: newBooks,
            book: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: "",
            }
        });
       
    }

    render() {
      
        return (
            <div className="adminPanel col-md-4">
               <form onSubmit={this.addNewBook}>
                   <div className="form-group">
                    <input type="text" placeholder="Book name" id="bookName" name="name" className="form-control" 
                        onChange={this.handleChange} value={this.state.book.name}/>
                   </div>
                   <div className="form-group">
                     <input type="text" placeholder="author" id="author" name="author" className="form-control"
                        onChange={this.handleChange} value={this.state.book.author}/>  
                   </div>
                   <div className="form-group">
                     <textarea placeholder="description" id="description" name="description" className="form-control"
                        onChange={this.handleChange} value={this.state.book.description}/>  
                   </div>
                   <div className="form-group">
                    <input type="checkbox" id="onStock" name="onStock" className="form-check-input"
                        onChange={this.handleChange} value={this.state.book.onStock}/>  
                    <label htmlFor="onStock" className="form-check-label">On stock</label>
                   </div>
                   <div className="form-group">
                     <input type="text" placeholder="Book image" id="image" name="image" className="form-control"
                        onChange={this.handleChange} value={this.state.book.image}/>  
                   </div>
                   <button type="submit" className="btn btn-primary">Add</button>
               </form>
            </div>
        )
    }
}
export default AdminPanel;