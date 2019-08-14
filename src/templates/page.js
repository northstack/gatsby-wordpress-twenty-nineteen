import React, { Component } from 'react';
import { graphql } from 'gatsby';

class PageTemplate extends Component {
	render() {
		const page = this.props.data.wpgraphql.page;

		return <h1 dangerouslySetInnerHTML={{ __html: page.title }}></h1>;
	}
}

export default PageTemplate;

export const pageQuery = graphql`
	query($id: ID!) {
		wpgraphql {
			page(id: $id) {
				title
				content
			}
		}
	}
`;
