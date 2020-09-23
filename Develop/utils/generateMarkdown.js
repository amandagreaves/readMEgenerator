// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description of Project
  ## ${data.description}
  ## Installation Instructions
  ## ${data.installation}
  ## Usage
  ## ${data.usage}
  ## License
  ## ${data.license}
  ## Contact Information
  ## Github Username: ${data.github}
  ## Email: ${data.email}
`;
}

module.exports = generateMarkdown;
