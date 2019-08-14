import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import BodyClassName from 'react-body-classname';

class AuthorTemplate extends Component {
	render() {
		const author = this.props.data.wpgraphql.user;
		const authorPosts = author.posts;

		return (
			<Layout>
				<BodyClassName className="archive author" />

				<header className="page-header">
					<h1 className="page-title">
						Author Archives: <span className="page-description">{author.name}</span>
					</h1>
				</header>

				{authorPosts.edges.map((post) => (
					<article className="post type-post status-publish format-standard hentry entry">
						<header className="entry-header">
							<h2 className="entry-title">
								<Link to={post.node.slug}>{post.node.title}</Link>
							</h2>
						</header>
						<div className="entry-content" dangerouslySetInnerHTML={{ __html: post.node.content }}></div>
						<footer className="entry-footer">
							<span className="byline">
								<Link to={author.slug}>{author.name}</Link>
							</span>
							<span className="posted-on">{post.node.date}</span>
							<span className="cat-links">
								{post.node.categories.edges.map((category) => (
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

export default AuthorTemplate;

export const pageQuery = graphql`
	query($id: ID!) {
		wpgraphql {
			user(id: $id) {
				name
				slug
				posts {
					edges {
						node {
							status
							title
							content
							excerpt
							categories {
								edges {
									node {
										name
										description
										slug
									}
								}
							}
							date
						}
					}
				}
			}
		}
	}
`;
