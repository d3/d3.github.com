// This is a Node.js script that migrates all .md files in this directory
// into a Jekyll-ready format.
//
// To use, first run the following command in this directory,
//
// npm install marked glob
//
// then execute this script with the following command
//
// node migrate.js
//
// Draws from
//
//  * http://stackoverflow.com/questions/2727167/getting-all-filenames-in-a-directory-with-node-js
//  * http://stackoverflow.com/questions/9168737/read-txt-file-using-node-js
//  * http://stackoverflow.com/questions/2496710/writing-files-in-node-js
//
// Created by Curran Kelleher March 2015
var glob = require("glob");
var fs = require("fs");

// List all .md files
glob("**/*.md", null, function (err, files) {

  files.forEach(function(mdFile){

    // Read each markdown file.
    var markdown = fs.readFileSync(mdFile, "utf8"),

        // Extract the title from the file name.
        title = mdFile.replace("-", " ").replace(".md", ""),

        // Generate the frontmatter string required by Jekyll.
        frontmatter = [
          "---",
          "title: " + title,
          "layout: page",
          "---"
        ].join("\n"),

        // Combine frontmatter with existing markdown.
        jekylMarkdown = frontmatter + "\n\n" + markdown;

    // Uncomment the following line to change all the files:

    // Write out the new markdown, overwriting the old files.
    //fs.writeFileSync(mdFile, jekylMarkdown);

    consoloe.log(jekylMarkdown);

    console.log("Jekylized " + mdFile);
  });
  console.log("Done");
})
