# Document-Buddy
# Document-Buddy

## Project Overview
Document-Buddy is a web-based application that helps users find information about important documents and the services related to them.

## Features
- Information about Aadhaar-related documents
- Address document information
- Bank document information
- College document information
- Passport document information
- Scholarship document information
- Document checklists and progress tracking
- User status and reminder features

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB

## Project Structure
- `index.html` - Main webpage
- `css/` - Stylesheets
- `js/` - JavaScript files
- `pages/` - Document and service pages
- `models/` - Database models
- `backend.js` - Backend server
- `package.json` - Project dependencies

## Installation and Setup
1. Install Node.js.
2. Clone or download the project repository.
3. Open the project folder in Visual Studio Code.
4. Open the terminal and run:

   npm install

5. Configure the MongoDB connection using your local environment configuration.
6. Start the backend using the start command configured in `package.json`.

## Testing
The application should be tested for:
- Page navigation
- Document information display
- Checklist functionality
- Reminder functionality
- Backend and database connectivity
- Responsive design

## Team Responsibilities
- Member 1: Frontend and user interface
- Member 2: Backend and API integration
- Member 3: Database and schema
- Member 4: Checklist, status, and reminder features
- Member 5: Testing and documentation

## Future Improvements
- Improve user experience and accessibility
- Add more document information
- Improve validation and error handling
## Testing Report

The following service pages were tested manually:

| Service Page | Result |
|---|---|
| Aadhaar | Passed |
| Address | Passed |
| Bank | Passed |
| College | Passed |
| Passport | Passed |
| Scholarship | Passed |

### Features Tested
- Homepage loading and navigation
- Service page navigation
- Checklist progress tracking
- Document completion status
- Print / Save Checklist functionality
- Aadhaar reminder saving and persistence after refresh

### Testing Method
Manual testing was performed using the web browser.

### Testing Outcome
All six service pages passed the initial manual tests performed.