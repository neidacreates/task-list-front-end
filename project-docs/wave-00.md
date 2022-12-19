# Wave 00: Setup and Baseline

**Learn Topics: React Components and Props required for this wave**

## Setup

Use the following steps to get started:

1. One team member should fork and clone the repository.
1. Add other team member(s) as collaborators in GitHub
1. Run `yarn install` to install dependencies.
1. Run `yarn start` to run the local development server.

## Baseline

In Wave 00, we will explore the starter code for Task List Front End.

Read through the code in `App.js`, `TaskList.js` and `Task.js` and their style sheets to understand how data and events are being handled. You may use the following questions and suggestions to guide your exploration:

1. What `props` does `Task` have? Where do they come from? # Task has id, title, iscomplete props, they come from TaskList 
2. The `Task` component uses destructuring to read in the props `const Task = ({ id, title, isComplete }) => {props.id, props.title, props.iscomplete}
    - How would the code change if `{id, title, isComplete}` were replaced with `props`?
    - Consider making this change and the subsequent necessary changes through the rest of the component to deepen your understanding of the code.
3. What `props` does `TaskList` have? Where do they come from? # key, id, title, iscomplete. from Task
4. Where is the function `getTaskListJSX` called in `TaskList`? That is what tasklist returns(its embeded in the component output)/ when tasklist gets returned
    - How would the code change without this helper function?
5. What component is `TASKS` passed to in `App`? # TaskList
    - How does the component pass `TASKS`? using tasks prop
    - What element is the component wrapped in? div element 

The suggestions above should give you a strong foundation for working with Task List Front End. As time allows, follow your curiosity to explore more of the code and features.








