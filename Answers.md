# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a framework that allows programmers to create effective user interfaces.  React JS was created to solve the issue of largely used applications that have frequent data changes. Before, the changes were not done so easily and every time there was a data change, the entire application would re-render. Now, with React JS, renders are no longer so costly on time and they take into consideration components. React JS renders specific components and makes changes in the UI much quicker in this way. 

1. Describe component state.

component state, or hook, is typically is set up this way : const [data, setData] = setState([])
In this example, there is a component that has a variable I called data that is by default set to an empty array. The setData variable (where 'set' is the necessary keyword and 'Data' is just a variable) is a function that can change the defaulted state of the data. This is called a hook and allows React to monitor changes in information given to data.

1. Describe props.

props can be thought of as properties of a given component. Every component has props as an argument, which is an object that hold many key-value pairs. for example, in a component's props object, it can have a 'name' key with the value of 'ronald'. Props can be inherited from parent to child and is an effective way of passing on data to other components.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

side effects are effects that perpetuate or is present but no longer needed. You can sync effects in a react component to changes of certain state by using the useEffect function. It takes in a function that will allow the change, and then a parameter that is viewing a certain variable or component for changes.
