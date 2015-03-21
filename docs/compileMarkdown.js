// This is a Node.js script that compiles all .md files in this directory
// into HTML files with the same name.
//
// To use, first run the following command in this directory,
//
// npm install marked glob handlebars
//
// then execute this script with the following command
//
// node compileMarkdown.js
//
// Draws from
//
//  * http://stackoverflow.com/questions/2727167/getting-all-filenames-in-a-directory-with-node-js
//  * http://stackoverflow.com/questions/9168737/read-txt-file-using-node-js
//  * http://stackoverflow.com/questions/2496710/writing-files-in-node-js
//  * https://github.com/wycats/handlebars.js#usage
//  * https://github.com/wycats/handlebars.js#escaping
//
// Created by Curran Kelleher March 2015
var marked = require("marked");
var glob = require("glob");
var Handlebars = require("handlebars");
var fs = require("fs");

// Read the HTML template file.
var templateSrc = fs.readFileSync("htmlTemplate.hbs", "utf8");

// Compile the handlebars template.
var template = Handlebars.compile(templateSrc);

// List all .md files
glob("**/*.md", null, function (err, files) {

  files.forEach(function(mdFile){

    // Derive the HTML file name.
    var htmlFile = mdFile.replace(".md", ".html");

    // Read each markdown file.
    var markdown = fs.readFileSync(mdFile, "utf8");

    // Compile each markdown source into HTML.
    var html = template({
      title: mdFile.replace("-", " ").replace(".md", ""),
      content: marked(markdown)
    });

    // Write out the HTML file.
    fs.writeFileSync(htmlFile, html);

    console.log("Compiled " + mdFile);
  });
  console.log("Done");
})
