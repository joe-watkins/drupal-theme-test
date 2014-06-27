# UCSF Template Dev Configuration

## Front end notes:
At the top of the Gruntfile you can define project specific variables.

### Front end development utilizes a few helpful tools:
* Using Sass for CSS preprocessing.
* Using Grunt.js for the following tasks
 * Watch - watching changes in JS, HTML, Sass, images etc.
 * Autoprefixer - handles vendor prefixes - author simply writes standard
 * Browsersync - handles injection/browser reload
 * Imagemin - Minifies images
 * Uglify - Minifies JS
 * SVGmin - Minifies SVG
 * Sass - Scss format

### To use these tools:
1. Make sure you have NPM running on your computer (`npm -v`), if not go download: http://npmjs.org
2. Install GruntJS (if you haven't already): `npm install -g grunt-cli`
3. cd to the assets/grunt folder and run `npm install`
4. to run GruntJS tasks one time: `grunt` or `grunt serve` or `grunt build`
5. `grunt` = default taks watches for changes runs minification/preproccessing tasks.
6. `grunt serve` * Recommended * watches for changes runs tasks and starts a server. can external IP see Gruntfile.js
7. `grunt build` this task is for the minification process of images only.
8. Browsersync - upon starting the project if you want to run Browsersync visit the /scripts/_browser-sync-ip.js file and add your IP address. This helps with broadcasting an IP. You can also define Ghostmode for this task in the variables. browserSyncGhost: true Other browsers will track clicks and scroll.

### Javascript
Grunt.js handles the minification of all javascript files. /scripts/main.js is the parent JS file. All files that are to be concatenated, minified, and prepended to this file are defined in Gruntfile.js in the jsVendorFiles variable.

Because we are working within the template directory we are minifying to the same folders.. and simply adding .min. to the file name eg. /styles/main.min.css | /scripts/main.min.js

* `/scripts/main.js` - main .js file
  * `/scripts/main.min.js` - minified js file
  * `/scripts/_browser-sync-ip.js` - defines IP address for Grunt.js Browsersync.. git ignored.
  * `/scripts/vendor` - 3rd party js files

### Sass
We are leveraging a modular approach to Sass. Each .scss file includes inline media queries to keep dev/maintanence of these modules all in one place. Styles are setup like this:

* `/styles/main.scss` - main .scss file
* `/styles/main.min.css` - minified css file
  * `/styles/partials` - main partials
  * `/styles/partials/elements` - more granular elements
  * `/styles/vendor/` - 3rd party css

### Webfonts & Icon Fonts
Webfonts/Icon Fonts are stored in `/styles/fonts/` folder. The icon fonts are Icomoon based and .json file is located there as well for modification of that suite. You will find `/styles/svg` and it contains svg versions of these icons. Not currently being used but could be in the future.

Folder structure differs from that of Icomoons default export. Find the Sass file for icon fonts here: `/styles/partials/_icon-fonts.scss`

#### Some notes:
