# DWG CODE TEST

## INTRODUCTION

This is a basic sample website that should showcase your skills in putting together well-coded, well-structured, responsive HTML5 sites.

## OVERVIEW

This repository features a base skeleton for you to use to create the project. Feel free to use what's here, or your own set up, as long as the requirements are met and the bulk of the code lands in the index.html.

The skeleton includes

### index.html

The primary HTML file where your work should be done. This file has a base HTML5 skeleton in it linking to the main.css and main.js files.

### sample.jpg

The image indicating what the final project should look like

### js/main.js

A base javascript file.

### css/main.css

The primary CSS files

### scss/main.scss

If you would like to use sass or scss to compile your styles, you can use this file. See [COMPILING STYLES](#compiling-styles) below for more information. You are not required to use this file; it is there for additional assistance if you want to use this build process.

### postcss/main.css

If you would like to use PostCSS to compile your styles, you can use this file. See [COMPILING STYLES](#compiling-styles) below for more information. You are not required to use this file; it is there for additional assistance if you want to use this build process.

## REQUIREMENTS

Since this project will feature your skills, there are few limits to this project.

### Site should match design in sample.jpg

As closely as possible, your site should match the basic design in the sample.jpg file.

### Site should be responsive using your best judgment

We are providing a desktop only design for this project. Your site should also be responsive on all mobile device screen sizes. For testing purposes, the navigation should become a hamburger menu, and should display the navigation when clicked.

### Site should utilize your own styles

In addition to using any CSS framework for your base styles, we would like to see custom css in the `css/main.css` file that is utilized on the page.

### Site code should be readable

Since you will be working as part of a team, it is crucial that team members can read your code and follow along. Ensure that code that is written is clear, and can be followed along by other devs on the team.

## NON-REQUIREMENTS

### USE ANY IMAGES

You are free to use any images or logos that you like, and are not required to use the images in the 

### USE ANY CSS FRAMEWORK

You are not required to code styles from scratch, and can use any CSS framework you feel comfortable.

### USE ANY JAVASCRIPT FRAMEWORK

You are able to use any JavaScript framework or code you find to implement the hamburger menu.

## SUBMISSION

You can submit by either sending us a git repo link (we use Github or Bitbucket internally, but you are free to use your tool of choice), or sending us a ZIP file of your completed submission.

<a id="compiling-styles" name="compiling-styles"></a>
## COMPILING STYLES

You are free to do any styling work unrelated to a CSS framework directly in the CSS file. We also provide Sass/SCSS and PostCSS implementations. You are free to compile these however you like; we also provide a base compilation utilizing Laravel Mix and Webpack.

If you are using your own compiling to compile Sass/SCSS/PostCSS, please include your pre-compiled code in the appropriate SCSS/PostCSS files before submitting.

You are also free to change the `webpack.mix.js` file to fit whatever needs you have. Again, we are more looking at your styles.

### Installation

From the document root in your terminal, run `npm install`.

### SCSS

The `webpack.mix.js` file is set up to utilize SCSS out of the box.

To run the code, from the document root in your terminal run:

`npm run dev`

To watch changes to your `scss/main.scss` file, run:

`npm run watch`

### PostCSS

To utilize PostCSS, in the `webpack.mix.js` file, comment out line 3, and uncomment line 6-8.

To run the code, from the document root in your terminal run:

`npm run dev`

To watch changes to your `postcss/main.scss` file, run:

`npm run watch`