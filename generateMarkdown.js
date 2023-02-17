// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

          ## Description

          ${data.description}

          <a href="https://github.com/${data.githubUsername}/${data.repositoryName}/blob/main/LICENSE"><img alt="" src=https://img.shields.io/github/license/${data.githubUsername}/${data.repositoryName}

          ## Table of Contents (Optional)

          - [Installation](#installation)
          - [Usage](#usage)
          - [Tests](#tests)
          - [Questions](#questions)
          - [Credits](#credits)
          - [Contributing](#howtocontribute)
          - [License](#license)


          ## Installation

          ${data.installation}

          ## Usage

          Provide instructions and examples for use. Include screenshots as needed.

              
              ![App Screenshot](assets/images/screenshot.png)


          ## Tests

          ${data.tests}

          ## Questions

          ${data.questions}
    
          ## Credits

          ${data.credits}


          ## Contributing

          Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

          ${data.contributing}

          ## License

          This project is licensed under the terms of the ${data.license}.
        


`;
}

module.exports = generateMarkdown;
