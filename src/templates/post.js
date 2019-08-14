import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import BodyClassName from 'react-body-classname';

import PersonIcon from '../components/icons/person';
import ClockIcon from '../components/icons/clock';
import CommentIcon from '../components/icons/comment';
import FolderIcon from '../components/icons/folder';

import CommentList from '../components/comment-list';
import CommentForm from '../components/comment-form';
import Config from '../../config';

class PostTemplate extends Component {
	render() {
		const post = this.props.data.wpgraphql.post;

		return (
			<Layout>
				<BodyClassName className="single single-post" />
				<article
					id="post-1"
					className="post-1 post type-post status-publish format-standard hentry category-uncategorized entry"
				>
					<header className="entry-header">
						<h1 className="entry-title" dangerouslySetInnerHTML={{ __html: post.title }}></h1>
						<div className="entry-meta">
							<span className="byline">
								<PersonIcon />
								<span className="screen-reader-text">Posted by</span>
								<span className="author vcard">
									<Link className="url fn n" to={'/author/' + post.author.slug}>
										{post.author.name}
									</Link>
								</span>
							</span>
							<span className="posted-on">
								<ClockIcon />
								<Link to={post.slug} rel="bookmark">
									<time className="entry-date published updated">{post.date}</time>
								</Link>
							</span>
							<span className="comment-count">
								<span className="comments-link">
									<CommentIcon />
									<a href="#comments">{post.commentCount} Comments</a>
								</span>
							</span>
						</div>
					</header>
					<div className="entry-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
					<footer className="entry-footer">
						<span className="byline">
							<PersonIcon />
							<span className="screen-reader-text">Posted by</span>
							<span className="author vcard">
								<Link className="url fn n" to={'/author/' + post.author.slug}>
									{post.author.name}
								</Link>
							</span>
						</span>
						<span className="posted-on">
							<ClockIcon />
							<Link to={post.path} rel="bookmark">
								<time className="entry-date published updated">{post.date}</time>
							</Link>
						</span>
						<span className="cat-links">
							<FolderIcon />
							{post.categories.edges.map((category) => (
								<Link key={category.slug} to={'/category/' + category.slug}>
									{category.name}
								</Link>
							))}
						</span>
					</footer>
				</article>
				<div id="comments" className="comments-area">
					<div className="comments-title-wrap">
						<h2 className="comments-title">Join the Conversation</h2>
						<div className="discussion-meta">
							<ol className="discussion-avatar-list">
								<li>
									<div className="comment-user-avatar comment-author vcard">
										<img alt="" src="" className="avatar avatar-60 photo" height="60" width="60" />
									</div>
								</li>
							</ol>
						</div>
					</div>
					{Config.commentList.dynamic ? (
						<CommentList postId={post.postId} />
					) : (
						<CommentList comments={post.comments.edges} />
					)}

					<CommentForm postID={post.postId} />
				</div>
			</Layout>
		);
	}
}

export default PostTemplate;

export const pageQuery = graphql`
	query($id: ID!) {
		wpgraphql {
			post(id: $id) {
				id
				postId
				title
				status
				content
				slug
				author {
					name
					slug
				}
				commentCount
				categories {
					edges {
						node {
							id
							name
							slug
						}
					}
				}
				date
				comments {
					edges {
						node {
							id
							commentId
							content
							approved
							author {
								...AuthorFields
							}
						}
					}
				}
			}
		}
	}

	fragment AuthorFields on WPGraphQL_CommentAuthor {
		name
		url
	}
`;
