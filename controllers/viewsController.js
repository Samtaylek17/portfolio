exports.getIndexPage = (req, res) => {
	res.status(200).render('index', {
		title: 'Temitayo Ogunsusi',
		page: 'index',
	});
};
