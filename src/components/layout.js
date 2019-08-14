/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				wpgraphql {
					generalSettings {
						title
						description
					}
				}
			}
		`}
		render={(data) => (
			<div id="page" className="site">
				<Header
					siteTitle={data.wpgraphql.generalSettings.title}
					siteDescription={data.wpgraphql.generalSettings.description}
				/>
				<div id="content" className="site-content">
					<section id="primary" className="content-area">
						<main id="main" className="site-main">
							{children}
						</main>
					</section>
				</div>
				<Footer siteTitle={data.wpgraphql.generalSettings.title} />
			</div>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
