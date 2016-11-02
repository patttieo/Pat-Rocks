# Boilerplate

Boilerplate code for starting a frontend project.

## Setup

To setup the project run the following commands:

```bash
cd project
./init.sh
```

Then update the file `package.json` with the `name` of the project, and update the S3 bucket name in `gruntfile.js` if applicable.

## Structure

* `style` - all sass files
* `style/app.scss` - the starting less file
* `static/style.css` - the compiled css file from less
* `dist` - all compiled assets for frontend deployment
* `scripts` - custom script files
* `scripts/main.js` - entry file for js
* `templates` - handlebars templates
* `templates/browser` - handelbars templates compiled for browser
* `templates/partials` - partials for handelbars templates
* `gruntfile.js` - build script
