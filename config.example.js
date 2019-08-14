const Config = {
	source: {
		protocol: 'http',
		baseUrl: 'source.example.com',
	},
	destination: {
		protocol: 'http',
		baseUrl: 'localhost:8000',
	},
	commentList: {
		dynamic: true,
	},
	dynamicPosts: false,
};

Config.source.url = Config.source.protocol + '://' + Config.source.baseUrl;
Config.destination.url = Config.destination.protocol + '://' + Config.destination.baseUrl;

module.exports = Config;
