const Config = require('./config');

module.exports = {
	siteMetadata: {
		title: `WordPress Headless + Gatsby + Twenty Nineteen Theme Example`,
		description: `Re-creating Twenty Nineteen with Gatsby and pulling content from WordPress.`,
		author: `@TheJeffMatson`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-graphql`,
			options: {
				typeName: `WPGraphQL`,
				fieldName: `wpgraphql`,
				url: Config.source.url + '/graphql',
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
	],
};
