# 10-ObjectOrientedProgramming_TeamProfileGenerator_Node.js_andJestUnitTests

## Task

The task in this exercise is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so we’ll also write a unit test for every part of our code and ensure that it passes each test.

> **Note**: There is no starter code for this assignment.

## Installation Instructions: 
To generate your own team profile, first run 'npm install' or 'npm i' after cloning this repository to your local system in order to install the npm package dependencies as specified in the 'package.json'. Prior to proceeding type 'npm run test' to double check if the applications functioning using an embedded unit test called 'UnitTesting.test.js' in the tests folder. Upon reviewing the pass results, run this application using 'node index.js' and provide answers to the subsequent command line prompts. 

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

![Gif Demo](./supplemental/09-Professional_README_Node.js.gif)

```
GIVEN a command-line application that accepts user input
✓ WHEN I am prompted for my team members and their information THEN an HTML file is generated that displays a nicely formatted team roster based on user input
✓ WHEN I click on an email address in the HTML THEN my default email program opens and populates the TO field of the email with the address
✓ WHEN I click on the GitHub username THEN that GitHub profile opens in a new tab
✓ WHEN I start the application THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
✓ WHEN I enter the team manager’s name, employee ID, email address, and office number THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
✓ WHEN I select the engineer option THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
✓ WHEN I select the intern option THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
✓ WHEN I decide to finish building my team THEN I exit the application, and the HTML is generated
```

## DNB's SOLUTION:
#### UNC Boot Camp Submission: 
🗂️ [Github Repository](https://github.com/DionneNoellaBarretto/10-ObjectOrientedProgramming_TeamProfileGenerator_Node.js_andJestUnitTests)

📄 [Example Github Page](https://dionnenoellabarretto.github.io/10-ObjectOrientedProgramming_TeamProfileGenerator_Node.js_andJestUnitTests/FrontEnd%20Team)

📄 [Another Example Github Page](https://dionnenoellabarretto.github.io/10-ObjectOrientedProgramming_TeamProfileGenerator_Node.js_andJestUnitTests/Cloud%20Team)

## Mock-Up
Clickable link(s): navigate to github, university or local mail client
![Click](./supplemental/Click.png?raw=true "Click")

Unit Test Pass Report:
![Test](./supplemental/Test.png?raw=true "Test")

Input:
![Example](./supplemental/Example.png?raw=true "Example")

Responsive layout on different screen sizes looks as follows:

Desktop View:

![DesktopView](./supplemental/DesktopView.png?raw=true "DesktopView")
Laptop View:

![LaptopView](./supplemental/LaptopView.png?raw=true "LaptopView")
Tablet View:

![TabletView](./supplemental/TabletView.png?raw=true "TabletView")
Mobile View:

![MobileView](./supplemental/MobileView.png?raw=true "MobileView")


## Grading Requirements

This homework is graded based on the following criteria: 

### Deliverables: 15%
```
✅ A sample HTML file generated using the application must be submitted.
✅ Your GitHub repository containing your application code.
```

### Walkthrough Video: 32%

[Video Link - Demonstration](https://drive.google.com/file/d/1C7WvMXyLlGElx_YSUi8Msw4BTJFCmUTU/view?usp=sharing)

```
✅ A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.
✅The walkthrough video must show all four tests passing from the command line.
✅The walkthrough video must demonstrate how a user would invoke the application from the command line.
✅The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
✅The walkthrough video must demonstrate a generated HTML file that matches the user input.
```

### Technical Acceptance Criteria: 40%
```
✅Satisfies all of the preceding acceptance criteria plus the following:
✅Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).
✅Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.
✅The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes.
```
### Repository Quality: 13%
```
✅Repository has a unique name.
✅Repository follows best practices for file structure and naming conventions.
✅Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
✅Repository contains multiple descriptive commit messages.
✅Repository contains a high-quality readme with description and a link to a walkthrough video.
```
