import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Comment from './comment';
import Config from '../../config.js';

const commentQuery = gql`
	query($postId: ID!) {
		comments(where: { contentId: $postId }) {
			nodes {
				...CommentFields
			}
		}
	}

	fragment CommentFields on Comment {
		id
		date
		approved
		content
		author {
			...AuthorFields
		}
	}

	fragment AuthorFields on CommentAuthor {
		name
		url
	}
`;

const CommentList = ({ postId, comments }) => (
	<>
		{Config.commentList.dynamic === true ? (
			<>
				<Query query={commentQuery} variables={{ postId }}>
					{({ loading, error, data }) => {
						if (loading) return `Loading comments...`;
						if (error) return `Error loading comments...`;

						return (
							<ol className="comment-list">
								{data.comments.nodes.map((comment) => (
									<Comment
										key={comment.id}
										commentId={comment.id}
										date={comment.date}
										authorName={comment.author.name}
										authorUrl={comment.author.url}
									>
										{comment.content}
									</Comment>
								))}
							</ol>
						);
					}}
				</Query>
			</>
		) : (
			<ol className="comment-list">
				{comments.map((comment) => (
					<Comment
						key={comment.node.wordpress_id}
						commentId={comment.node.wordpress_id}
						date={comment.node.date}
						authorName={comment.node.author_name}
						authorUrl={comment.node.author_url}
					>
						{comment.node.content}
					</Comment>
				))}
			</ol>
		)}
	</>
);

export default CommentList;
