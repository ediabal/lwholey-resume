const myData = require('./my-data.json');
const { socialLinks } = require('./social-links.json');
const { education } = require('./education.json');
const { experience } = require('./experience.json');
const { skills } = require('./skills.json');

module.exports = {
  ...myData,
  socialLinks,
  education,
  experience,
  skills,
};
