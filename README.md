# Nepo Baby Calculator

An interactive web quiz that helps users assess how much privilege and family connections have shaped their journey in life and career.

https://waleedskhan2025-dotcom.github.io/nepometer/

## Description

The Nepo Baby Calculator is a fun, thought-provoking quiz that evaluates various aspects of privilege including:
- Educational background and opportunities
- Family financial situation and neighborhood quality
- Career connections and networking
- Access to unpaid internships and gap years
- Support for housing and living expenses
- Identity and cultural factors (code-switching, representation)
- Gender, sexuality, and identity considerations

The quiz features:
- **Dynamic scoring system** that automatically scales to 100%
- **Visual thermometer** (desktop) showing real-time score progress
- **Mobile score badge** with gradient color transitions
- **Responsive design** optimized for all screen sizes
- **22 comprehensive questions** across 6 thematic sections

Based on the responses, users receive a score and ranking from "Self-Made" to "Supreme Nepo Baby."

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
3. Watch your score update in real-time on the thermometer (desktop) or badge (mobile)
4. Click "Next Question" to proceed through all questions
5. View your personalized results with ranking and message
6. Click "Retake Test" to start over

## Score Rankings

- **80-100%**: Supreme Nepo Baby - Born with a platinum spoon
- **60-79%**: Certified Nepo Baby - Significant advantages
- **40-59%**: Nepo-Adjacent - Some privileges and connections
- **20-39%**: Mostly Self-Made - Worked for most achievements
- **0-19%**: Self-Made - Built everything from scratch

## Project Structure

```
nepometer/
├── index.html           # Main HTML with inline JavaScript (quiz logic)
├── styles.css           # All styling, animations, and responsive design
├── README.md            # Project documentation
├── QUIZ_STRUCTURE.md    # Quiz organization and question breakdown
├── DEPLOYMENT.md        # Deployment instructions
└── .github/workflows/   # CI/CD automation
    ├── deploy.yml       # Auto-deploy to GitHub Pages
    └── pr-checks.yml    # Pull request validation
```

## Technologies Used

- **HTML5** - Semantic structure with inline JavaScript
- **CSS3** - Advanced animations, gradients, glassmorphism, responsive design
- **Vanilla JavaScript (ES6+)** - Dynamic quiz logic, color interpolation, real-time scoring

## Architecture

This project uses an **inline JavaScript architecture** where all quiz logic is embedded directly in `index.html`. This approach:
- ✅ Reduces HTTP requests (faster initial load)
- ✅ Keeps everything in one file for simplicity
- ✅ Perfect for single-page applications
- ✅ No build tools or bundlers required

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
