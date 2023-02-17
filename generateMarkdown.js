// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

          ![GitHub License](https://img.shields.io/badge/License-${data.license}.svg)


          ## 🎯 Description

          ${data.description}


          ## Table of Contents (Optional)

          - [Installation](#installation)
          - [Usage](#usage)
          - [Tests](#tests)
          - [Questions](#questions)
          - [Credits](#credits)
          - [Contributing](#howtocontribute)
          - [License](#license)


          ## 🛠 Installation

          ${data.installation}


          ## 💻 Usage

          ${data.usage}
              
            ![App Screenshot](assets/images/screenshot.png)


          ## 🔍 Tests

          ${data.tests}


          ## 💬 Questions
          
          Contact me if you have any questions!

          - [Email](${data.email})
          - [GitHub profile](${data.githubUsername})
    

          ## 🤝 Credits

          ${data.credits}


          ## 💪 Contributing

          Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

          ${data.contributing}


          ## 📖 License

          This project is licensed under the terms of the ${data.license}.
        


`;
}

module.exports = generateMarkdown;
