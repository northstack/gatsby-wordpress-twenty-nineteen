# Proof of Concept - Gatsby + Headless WordPress + Twenty Nineteen

An example site using that uses Gatsby and a headless WordPress installation to re-create the Twenty Nineteen theme.

**Note:** This is entirely intended to be a proof of concept/example of how Gatsby can be used to create a frontend for WordPress. It is not checked for stability or security (or even code quality), so use it at your own risk.

## Features

* Post templates
* Category archives
* Author archives
* Comments
  * Static (server side) comment rendering
  * Dynamic (client side) comment rendering
  * Comment submissions
* Uses WPGraphQL

## To-Do

* [ ] General cleanup
* [ ] Better comments
* [ ] Comment replies
* [ ] Pagination
* [ ] Gravatars/user icons

## Requirements

* NodeJS/NPM
* Gatsby CLI
* A WordPress installation with the WPGraphQL plugin installed and activated

## Usage

Once again, this isn't intended to be a production-ready example. It's best used as a starting point for learning how to connect a WordPress backend to a Gatsby frontend. If you want to build it, do this:

1. Clone the repo.
2. Rename `config.example.js` to `config.js`.
3. Modify `config.js` to point to your WordPress site as the source.
4. Run `npm install`
5. Run `gatsby develop`
6. Navigate your browser to [http://localhost:8000](http://localhost:8000)
7. Use it to build your own Gatsby frontend for your WordPress site.

## Attribution/Acknowledgments

* This example uses CSS from WordPress' [Twenty Nineteen](https://wordpress.org/themes/twentynineteen/) theme, which is licensed under the GNU General Public License v2 or later.
* Thanks to [WPGraphQL](https://www.wpgraphql.com/) for making a great GraphQL plugin for WordPress.
* Shoutout to [Gatsby](https://www.gatsbyjs.org) for making an awesome static site generator.