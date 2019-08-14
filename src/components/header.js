import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle, siteDescription, titleElementType }) => (
	<header id="masthead" className="site-header">
		<div className="site-branding-container">
			<div className="site-branding">
				<p className="site-title">
					<Link to="/" rel="home">
						{siteTitle}
					</Link>
				</p>
				<p className="site-description">{siteDescription}</p>
			</div>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
	siteDescription: PropTypes.string,
	titleElementType: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
	siteDescription: ``,
	titleElementType: `p`,
};

export default Header;
