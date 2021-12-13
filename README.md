# CV Builder

## Description

The CV Builder App is a Single Page Application that allows a user to enter details and create a printable/downloable formatted resume.  This app utilizes a multi-step form to input user information, a custom progress bar to indicate which step the user is in the process, and local storage to save the information until a user chooses to clear the data.  This app solves the problem of not knowing how to format a resume, as well as not knowing what information should be included in a resume.

## Built With
- React
- Styled Components
- React-To-Print
- Local Storage

## Challenges I faced while building this project

- **Problem**: How to handle the state of multiple inputs inside a single form?
- **Solution**:  I utilized the name attribute for all inputs and used bracket notation to dynamically create and match the name of the event with the value in the onChange event handler.

- **Problem**: How to only validate current form entry?
- **Solution**:  I added a state variable called currentEntry that represented the index of the entry the user has just typed in in.  Once the user presses the Save button, the index of that entry is passed as a parameter to the onSubmit event handler.  Inside the onSubmit event hander is a function call to the validate method.  The index is also passed to the validate method which tells the function which entry to check for validation.  In the render function, the currentEntry state variable is compared against the index of the entry.  If a match, only that entry will display error messages under the input fields.

- **Problem**:  How to handle dynamic radio buttons with the same name attribute?
- **Solution**:  Since radio buttons that have the same name attribute all belong to the same group.  When I had duplicate entries, its only allowed one set of radio buttons to be selected.  To fix this, I used a template string for the name attribute and appended the index after the actual name attribute, so that each set of radio buttons would belong to their own group.  In the onChange function, I set a conditional so that if the event type is radio, the original name attribute is set to the value, which allows each individual entry forms radio buttons to all be selected.


## Available Scripts
To run the project:

- Click on Code in the Github respository
- Click on SSH
- Copy the link below, or press the copy button
- In your terminal run:
    - `git clone ctrl + v`
    - Ctlr + v, will paste the copied link into the terminal
    - press Enter
- Type `npm install` 
    - This will install needed dependencies for the project
- Type `npm start `
    - This will run the project in development mode


