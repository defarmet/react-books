module.exports = {
	find_all: function(req, res)
	{
		db.Book
			.find(req.query)
			.sort({date: -1})
			.then(db_model => res.json(db_model))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res)
	{
		db.Book
			.create(req.body)
			.then(db_model => res.json(db_model))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res)
	{
		db.Book
			.findById({_id: req.params.id})
			.then(db_model => db_model.remove())
			.then(db_model => res.json(db_model))
			.catch(err => res.status(422).json(err));
	}
};
