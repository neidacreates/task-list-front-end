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

1. What `props` does `Task` have? Where do they come from?
id, title, isComplete; they come from the variable list of tasks in App.js (line 5)

2. The `Task` component uses destructuring to read in the props `const Task = ({ id, title, isComplete }) => {...`
    - How would the code change if `{id, title, isComplete}` were replaced with `props`? We would put props in line 6 of Task.js, and then use props.id etc.
    - Consider making this change and the subsequent necessary changes through the rest of the component to deepen your understanding of the code.
3. What `props` does `TaskList` have? Where do they come from? tasks; they come from the variable TASKS in App.js
4. Where is the function `getTaskListJSX` called in `TaskList`? Defined on line 7 of TaskList.js and called on line 17
    - How would the code change without this helper function? The function is looking through the Task and giving us the id, title, and isComplete of each element in the task list. If we didn't have this helped function, we would have to manually check every task in the list probably with like a loop.
5. What component is `TASKS` passed to in `App`? it's passed into the TaskList component
    - How does the component pass `TASKS`? as a dictionary 
    - What element is the component wrapped in? TaskList is wrapped in a div?

The suggestions above should give you a strong foundation for working with Task List Front End. As time allows, follow your curiosity to explore more of the code and features.








