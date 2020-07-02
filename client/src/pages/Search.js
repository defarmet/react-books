import React, { Component } from "react";
import API from "../utils/API";

class Books extends Component {
	state = {
		books: [],
		title: "",
	};

	handleInputChange = event => {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = e => {
		e.preventDefault();
		if (this.state.title) {
			API.search_books(this.state.title)
			.then(res => this.load_search(res))
			.catch(err => console.log(err));
		}
	};

	load_search = books => {
		this.setState({books: books.data.items});
	};

	save_book = book => {
		const new_book = {
			title: book.volumeInfo.title,
			authors: book.volumeInfo.authors,
			description: book.volumeInfo.description,
			image: book.volumeInfo.imageLinks.thumbnail,
			link: book.volumeInfo.infoLink
		}
		API.save_book(new_book)
		.catch(err => console.log(err));
	};

	render() {
		return (
			<div className="container">
			<form>
				<div className="form-row">
				<div className="col-10">
					<input
						className="form-control"
						value={this.state.title}
						onChange={this.handleInputChange}
						name="title"
						placeholder="Book Title"
					/>
				</div>
				<div className="col-2">
					<button
					className="btn btn-primary btn-block"
					onClick={this.handleFormSubmit}
					>
						Submit Book
					</button>
				</div>
				</div>
			</form>
			<div className="row">
			<div className="col-12">
			<ul className="list-group">
				{this.state.books.map(book => (
				<li
				className="list-group-item"
				key={book.id}
				>
					<div className="card card-body">
					<div className="row">
					<div className="col-2">
						<img
						src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "#" }
						/>
					</div>
					<div className="col-8">
						<a href={book.volumeInfo.infoLink}>
						<strong>
							{book.volumeInfo.title} by {book.volumeInfo.authors[0]}
						</strong>
						</a>
						<br />
						{book.volumeInfo.description}
					</div>
					<div className="col-2">
						<button
						className="btn btn-outline-success"
						onClick={() => this.save_book(book)}
						>
							Save
						</button>
					</div>
					</div>
					</div>
				</li>
				))}
			</ul>
			</div>
			</div>
			</div>
		);
	}
}

export default Books;
