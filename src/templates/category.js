import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import BodyClassName from 'react-body-classname';

class CategoryTemplate extends Component {
	render() {
		const category = this.props.data.wpgraphql.category;
		const categoryPosts = category.posts;

		return (
			<Layout>
				<BodyClassName className="archive category" />

				<header className="page-header">
					<h1 className="page-title">
						Category Archives: <span className="page-description">{category.name}</span>
					</h1>
				</header>

				{categoryPosts.edges.map((post) => (
					<article className="post type-post status-publish format-standard hentry entry">
						<header className="entry-header">
							<h2 className="entry-title">
								<Link to={post.node.slug}>{post.node.title}</Link>
							</h2>
						</header>
						<div className="entry-content" dangerouslySetInnerHTML={{ __html: post.node.content }}></div>
						<footer className="entry-footer">
							<span className="byline">
								<Link to={post.node.author.slug}>{post.node.author.name}</Link>
							</span>
							<span className="posted-on">{post.node.date}</span>
							<span className="cat-links">
								{post.node.categories.map((category) => (
									<Link to={category.slug}>{category.name}</Link>
								))}
							</span>
							<span className="comments-link"></span>
						</footer>
					</article>
				))}
			</Layout>
		);
	}
}

export default CategoryTemplate;

export const pageQuery = graphql`
	query($id: ID!) {
		wpgraphql {
			category(id: $id) {
				id
				name
				slug
				posts {
					edges {
						node {
							id
							slug
							title
							date
							content
							excerpt
							author {
								id
								name
								slug
							}
							categories {
								edges {
									node {
										name
										description
										slug
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;
