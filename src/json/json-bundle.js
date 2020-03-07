const myData = require('./my-data.json');
const about = require('./about.json');
const social = require('./social-links.json');
const education = require('./education.json');
const experience = require('./experience.json');
const skills = require('./skills.json');
const interests = require('./interests.json');

module.exports = {
  ...myData,
  ...about,
  ...social,
  ...education,
  ...experience,
  ...skills,
  ...interests,
};
