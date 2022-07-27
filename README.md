# Fiix Angular Interview Exercise

## Instructions

- Fork this repo
- In your forked version create a new branch different form the main one
- Make the changes of this exercise in your new branch 
- Set a timer for 2 hours and complete as many of the following tasks as you can
  - You will not be assessed on the amount completed - there is more than you are expected to complete in this time
  - Try to complete a range of different kinds of tasks (style, tests, components, etc.)
- When you complete the tasks push the changes to the new branch you created and create a Pull Request from this branch to main, this will be useful to see the changes more clearly 
- Use the git CLI (not a GUI like sourcetree) to make commits, as this will trigger a pre-commit hook to auto-format the code
  - So, no need to worry about code formatting (spacing, new lines, etc.) while writing code as this will be done automatically
- `BlogService` class provides a mock API to use
  - No changes are required in this file, you can treat it as a generated file
  - If you find you need to change this file you may - please add comments explaining reasoning if so
- Make use of Angular Material components where possible / where it will save time: https://material.angular.io/components/categories
- Feel free to use any resources at your disposal (Google, Stack Overflow, etc.)

### Tasks

- Refactor post list cards to use a new component `post-card`
- Add a new route, component, and form for creating a new post
  - A button already exists in the header to navigate to this form
  - Title is required
  - Description is optional
  - User should not be allowed to save the record if the form is invalid
- Make the post detail page fetch the post that the user clicked on
- Add an edit button onto the post cards that allows the user to edit a post via a new form
  - Title is required
  - Description is optional
  - User should not be allowed to save the record if the form is invalid
- Add a delete button onto the post cards that allows the user to delete a post
  - Should refresh the list once the delete is complete
- Add a footer component
  - Should stick to the bottom of the screen
- Add the ability to comment on a post from the post detail page
- Tests:
  - Complete stubbed tests
  - Add any additional tests you think would be valuable
  - Make any failing tests pass
- Misc style improvements:
  - Center create button and blog title veritcally within header
  - Remove active link styles from blog title
  - Improve style/layout of post detail page
  - Improve layout of post list so that multiple posts can appear on a single row

### Additional information

Project generated using Angular CLI to find out more about the project and how to run it go [here](blog-interview/README.md)
