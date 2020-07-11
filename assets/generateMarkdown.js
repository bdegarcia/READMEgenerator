function generateMarkdown(data) {
  let licenseLink = `https://img.shields.io/badge/license-${data.license}-blue.svg`
  return `# ${data.title}
  [![License](${licenseLink})](https://shields.io/)
  ## Description 
      ${data.description}
## Table of Contents
1.[Usage](#Usage)
2.[Contribution](#Contribution)
3.[Questions](#Questions)
## Usage
    ${data.usage} 
## Installation Requirements
    ${data.install}            
## Contribution 
    ${data.contributions}
## Questions
  
If you have questions, contact me at [GitHub](https://github.com/${data.username}) or my email is ${data.email}`;
};

module.exports = generateMarkdown;
