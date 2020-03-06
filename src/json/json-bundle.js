const myData = require('./my-data.json');
const { aboutParagraphs } = require('./about.json');
const { socialLinks } = require('./social-links.json');
const { education } = require('./education.json');
const { experience } = require('./experience.json');
const { skills } = require('./skills.json');
const { interestsParagraphs } = require('./interests.json');

module.exports = {
  ...myData,
  aboutParagraphs,
  socialLinks,
  education,
  experience,
  skills,
  interestsParagraphs,
};
