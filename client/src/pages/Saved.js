import React, { Component } from "react";
import API from "../utils/API";

class Books extends Component {
	state = {
		books: [],
	};

	componentDidMount() {
		this.load_saved();
	}

	load_saved = () => {
		API.get_saved()
		.then(res => this.setState({books: res.data}))
		.catch(err => console.log(err));
	};

	delete_book = id => {
		API.delete_book(id)
		.then(res => this.load_saved())
		.catch(err => console.log(err));
	};

	render() {
		return (
			<div className="container">
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
						<img src={book.image} />
					</div>
					<div className="col-8">
						<a href={book.link}>
						<strong>
							{book.title} by {book.authors[0]}
						</strong>
						</a>
						<br />
						{book.description}
					</div>
					<div className="col-2">
						<button
						className="btn btn-danger"
						onClick={() => this.delete_book(book._id)}
						>
							Delete
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
