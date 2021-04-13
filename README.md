# Journey

## Setup webpack
## 🎯 Action Items:
1. prepare webpack: livereload, css (scss, autoprefix), js
1. develop using: atomic css
1. watch one line layout video
1. implement css purge, minify, uglify
1. compare css after implementing purge, minify, uglify
1. implement stylelint (optional)


## 🧩 Resources:
https://1linelayouts.glitch.me/

### UI Design
https://www.uidesigndaily.com/
https://www.uidesigndaily.com/posts/figma-landing-page-website-day-955
https://www.uidesigndaily.com/posts/sketch-website-card-day-1270
https://www.uidesigndaily.com/posts/sketch-cards-list-ui-design-website-day-1218
https://www.uidesigndaily.com/posts/figma-customers-projects-project-management-card-invoice-day-518
https://www.uidesigndaily.com/posts/figma-stats-cards-statistics-profile-day-1141
https://www.uidesigndaily.com/posts/figma-people-list-card-day-1310
https://www.uidesigndaily.com/posts/sketch-calendar-components-tab-event-card-day-1211

## 🔧 Setup webpack
https://webpack.js.org/guides/getting-started/
1. `yarn init`
1. `yarn add -D webpack webpack-cli`
1. `touch webpack.config.js`
1. `yarn add -D html-webpack-plugin`
1. `yarn add -D webpack-dev-server` : setup simple web server for live reloading
1. `yarn add -D express webpack-dev-middleware` : (optonal) setup simple web server with express
1. `yarn add -D style-loader css-loader`
1. `yarn add -D sass-loader sass` : https://webpack.js.org/loaders/sass-loader/
