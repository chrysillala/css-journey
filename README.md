# Journey

## 🎯 Action Items:
1. prepare webpack: livereload, css (scss, autoprefix), js
1. develop using: atomic css
1. watch one line layout video
1. implement css purge, minify, uglify
1. compare css after implementing purge, minify, uglify
1. implement stylelint (optional)


## 🧩 Resources:
- https://1linelayouts.glitch.me/
- https://acss.io/
- https://purgecss.com/
- https://webpack.js.org/
- https://github.com/evanw/esbuild
- https://sass-guidelin.es/#the-7-1-pattern
- https://css-tricks.com/stylelint/
- webpack boilerplate / starter


### UI Design
https://www.uidesigndaily.com/
| Design # | URL         | One Line Layout |
|:--------:|-------------|-----------------|
| #1       | https://www.uidesigndaily.com/posts/figma-landing-page-website-day-955 | Deconstructed Pancake, Pancake Stack, Super Centered |
| #2       | https://www.uidesigndaily.com/posts/figma-people-list-card-day-1310 | RAM, Super Centered |
| #3       | https://www.uidesigndaily.com/posts/sketch-links-navigation-card-cards-day-1128 | Sidebar Says, RAM |
| #4       | https://www.uidesigndaily.com/posts/figma-real-estate-components-cards-profile-details-day-1166 | Line Up, Respect for Aspect |
| #5       | https://www.uidesigndaily.com/posts/sketch-ui-components-calendar-details-button-stats-day-1135 | Super Centered, Span Grid 12 |


## 🔧 Steps on How to Build This Webpack Configuration
https://webpack.js.org/guides/getting-started/
1. `yarn init`
1. `yarn add -D webpack webpack-cli`
1. `touch webpack.config.js`
1. `yarn add -D html-webpack-plugin`
1. `yarn add -D webpack-dev-server` : setup simple web server for live reloading
1. `yarn add -D express webpack-dev-middleware` : (optonal) setup simple web server with express
1. `yarn add -D style-loader css-loader`
1. `yarn add -D sass-loader sass` : https://webpack.js.org/loaders/sass-loader/
1. `yarn add -D @fortawesome/fontawesome-svg-core` : add font awesome core
1. `yarn add -D @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons` : add font awesome variants
1. `yarn add -D webpack-merge` : for separating webpack development and production configuration
1. `touch webpack.common.js webpack.dev.js webpack.prod.js` : split out the configuration on the following files. we are not going to use `webpack.config.js` anymore but i'll just leave it here for future reference


## 🛣 How to Use
1. Create html, js and scss file with the same name in the relevant directory. Example: `pages/test-page.html`, `scripts/test-page.js`, `styles/pages/_test-page.scss`
2. Add the name (e.g: `test-page`) to htmlPageNames variable on `webpack.config.js`
3. Add js file to `module.export.entry`
4. Import scss file to js
5. Now you are ready to go :D
