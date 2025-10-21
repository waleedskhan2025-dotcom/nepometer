# Nepo Baby Calculator

[![Deploy to GitHub Pages](https://github.com/<your-username>/nepometer/actions/workflows/deploy.yml/badge.svg)](https://github.com/<your-username>/nepometer/actions/workflows/deploy.yml)

An interactive web quiz that helps users assess how much privilege and family connections have shaped their journey in life and career.

## Description

The Nepo Baby Calculator is a fun, thought-provoking quiz that evaluates various aspects of privilege including:
- Educational background and opportunities
- Family financial situation
- Career connections and networking
- Access to unpaid internships and gap years
- Support for housing and living expenses

Based on the responses, users receive a score and ranking from "Self-Made" to "Supreme Nepo Baby."

## Features

- **Interactive Quiz Interface**: Clean, modern UI with smooth transitions
- **10 Thought-Provoking Questions**: Covering education, career, finances, and opportunities
- **Weighted Scoring System**: Each answer contributes differently to the final score
- **Personalized Results**: Rankings with custom messages based on your score
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites

No dependencies or build tools required! This is a pure HTML/CSS/JavaScript project.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nepometer
```

2. Open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or simply double-click the `index.html` file.

## Usage

1. Click "Take the Test" to begin
2. Read each question carefully and select the answer that best applies to you
3. Click "Next Question" to proceed
4. After completing all 10 questions, view your results
5. Click "Retake Test" to start over

## Score Rankings

- **80-100%**: Supreme Nepo Baby - Born with a platinum spoon
- **60-79%**: Certified Nepo Baby - Significant advantages
- **40-59%**: Nepo-Adjacent - Some privileges and connections
- **20-39%**: Mostly Self-Made - Worked for most achievements
- **0-19%**: Self-Made - Built everything from scratch

## Project Structure

```
nepometer/
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
├── script.js       # Quiz logic and interactivity
└── README.md       # Project documentation
```

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## Deployment

This project is configured with GitHub Actions for automatic deployment to GitHub Pages.

### Setting Up GitHub Pages

1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Under "Build and deployment", select:
   - **Source**: GitHub Actions
4. Push to the `main` branch, and your site will automatically deploy!

### CI/CD Pipeline

The project includes two automated workflows:

**Deploy Workflow** (`.github/workflows/deploy.yml`):
- ✅ Runs on every push to main/master
- ✅ Validates HTML and JavaScript
- ✅ Automatically deploys to GitHub Pages
- ✅ Provides deployment URL

**PR Checks** (`.github/workflows/pr-checks.yml`):
- ✅ Runs on pull requests
- ✅ Validates code quality
- ✅ Checks file structure
- ✅ Warns about console.log statements

### View Your Site

After deployment, your site will be available at:
```
https://<your-username>.github.io/nepometer/
```

## Contributing

Contributions are welcome! Feel free to:
- Add new questions
- Improve the scoring algorithm
- Enhance the UI/UX
- Fix bugs or issues

## License

This project is open source and available for educational and entertainment purposes.

## Acknowledgments

Inspired by discussions around privilege, nepotism, and the role of family connections in career success.
