const readingTime = require('eleventy-plugin-reading-time');

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("displayDate", function(date) {
    var month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var ordinal = {
      1 : "st",
      2 : "nd",
      3 : "rd",
      21 : "st",
      22 : "nd",
      23 : "rd",
      31 : "st"
    };    
    let d = new Date(date);
    return `${month[d.getMonth()]} ${d.getDate()}${(ordinal[d.getDate()] || "th")}, ${d.getUTCFullYear()}`;
  });

  eleventyConfig.addPlugin(readingTime);  

};