import axios from "axios";

export default {
	search_books: function(title)
	{
		return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title + "&key=AIzaSyBZ5fDcxwwyk2ZlEHFVkaowqjujexbUWGs");
	},
	get_saved: function()
	{
		return axios.get("/api/books");
	},
	delete_book: function(id)
	{
		return axios.delete("/api/books/" + id);
	},
	save_book: function(book)
	{
		return axios.post("/api/books", book);
	}
};
