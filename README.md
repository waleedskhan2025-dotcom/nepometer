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
- **Ultimate Privilege Indicators** (trust funds, family businesses, celebrity connections, board seats, property portfolios, and financial safety nets)

The quiz features:
- **Dynamic scoring system** that automatically scales to 100%
- **"Exodia Effect"** tier floor system - extreme privilege indicators guarantee minimum tier placement
- **Visual thermometer** (desktop) showing real-time score progress
- **Mobile score badge** with gradient color transitions
- **Responsive design** optimized for all screen sizes
- **28 comprehensive questions** across 7 thematic sections

Based on the responses, users receive a score and ranking from "Self-Made" to "Supreme Nepo Baby."

## Getting Started

The quiz can be launched via GitHub Pages at the following URL:
https://waleedskhan2025-dotcom.github.io/nepometer/

### Prerequisites

No dependencies or build tools required! This is a pure HTML/CSS/JavaScript project.

## Score Rankings

- **80-100%**: Supreme Nepo Baby - Born with a platinum spoon
- **60-79%**: Certified Nepo Baby - Significant advantages
- **40-59%**: Nepo-Adjacent - Some privileges and connections
- **20-39%**: Mostly Self-Made - Worked for most achievements
- **0-19%**: Self-Made - Built everything from scratch

## Exodia Questions

The quiz includes **6 nuclear "Exodia" questions** that carry extreme weight in the scoring system. These questions identify the most extreme privilege indicators:

1. **Trust Fund / Inheritance** (7-figure+ family wealth)
2. **Family Business Empire** (major corporations or industry leaders)
3. **Celebrity / Political Family** (national/international public figures)
4. **Executive Positions Gifted** (C-suite or board seats through family)
5. **Property Portfolio** (4+ properties or significant real estate holdings)
6. **Financial Safety Net** (indefinite family support with no concerns)

### Tier Floor System

The Exodia Effect implements a **tier floor guarantee**:

- **1 nuclear answer** = Minimum 60% score (Certified Nepo Baby tier floor)
- **2+ nuclear answers** = Minimum 80% score (Supreme Nepo Baby tier floor)

This means if you have a 7-figure trust fund, you **cannot** score below Certified Nepo Baby, regardless of other answers. The system recognizes that certain privilege indicators are so extreme they categorically define your nepotism level.

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

## Deployment

This project is configured with GitHub Actions for automatic deployment to GitHub Pages.

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
