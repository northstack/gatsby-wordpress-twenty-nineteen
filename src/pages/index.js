import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

import PersonIcon from '../components/icons/person';
import ClockIcon from '../components/icons/clock';
import FolderIcon from '../components/icons/folder';
import CommentIcon from '../components/icons/comment';

class IndexTemplate extends Component {
	render() {
		const posts = this.props.data.wpgraphql.posts;

		return (
			<Layout>
				{posts.edges.map((post) => (
					<article className="post type-post status-publish format-standard hentry entry">
						<header className="entry-header">
							<h2 className="entry-title">
								<Link to={post.node.slug}>{post.node.title}</Link>
							</h2>
						</header>
						<div className="entry-content" dangerouslySetInnerHTML={{ __html: post.node.content }}></div>
						<footer className="entry-footer">
							<span className="byline">
								<PersonIcon />
								<Link to={'/author/' + post.node.author.slug}>{post.node.author.name}</Link>
							</span>
							<span className="posted-on">
								<ClockIcon />
								{post.node.date}
							</span>
							<span className="cat-links">
								<FolderIcon />
								{post.node.categories.edges.map((category) => (
									<Link to={'/category/' + category.node.slug}>{category.node.name}</Link>
								))}
							</span>
							<span className="comments-link">
								<CommentIcon />
							</span>
						</footer>
					</article>
				))}
			</Layout>
		);
	}
}

export default IndexTemplate;

export const pageQuery = graphql`
	query {
		wpgraphql {
			posts {
				edges {
					node {
						id
						postId
						slug
						status
						categories {
							edges {
								node {
									categoryId
									name
									slug
									link
								}
							}
						}
						title
						content
						date
						author {
							name
							slug
						}
					}
				}
			}
		}
	}
`;
