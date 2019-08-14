import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ siteTitle }) => (
	<footer id="colophon" className="site-footer">
		<div className="site-info">
			<Link className="site-name" href="/">
				{siteTitle}
			</Link>
		</div>
	</footer>
);

Footer.propTypes = {
	siteTitle: PropTypes.string,
};

Footer.defaultProps = {
	siteTitle: ``,
};

export default Footer;
