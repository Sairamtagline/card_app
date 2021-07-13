const ghpages = require('gh-pages');

ghpages.publish(
	'docs',
	{
		repo: 'git@github.com-sairamtagline:LetsBench/card_app_frontend.git',
		message: 'published git@github.com-sairamtagline:LetsBench/card_app_frontend.git',
		user: {
			name: 'Sairam',
			email: 'sairam.tagline@gmail.com',
		},
	},
	function(err) {
		if (err) {
			console.error(err);
		} else {
			console.log('published git@github.com-sairamtagline:LetsBench/card_app_frontend.git');
		}
	},
);
