const path = require("path");
const router = require("express").Router();
const books = require("../controllers/books");

router.route("/api/books")
	.get(books.find_all)
	.post(books.create);

router.route("/api/books/:id")
	.delete(books.remove);

router.use(function(req, res)
{
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
