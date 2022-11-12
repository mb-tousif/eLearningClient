export const blogs = [
  {
    id: 1,
    user: "Soumya Ghosh",
    imgUrl: "https://miro.medium.com/max/828/0*1NM2UWUj_1RVaXbe",
    title: "What is the difference between Call, Apply and Bind?",
    description: "The difference between Call, Apply, and Bind can be explained below. Call: The call() method invokes a function with a given this value and arguments provided one by one. Apply: Invokes the function with a given this value and allows you to pass in arguments as an array. Bind: returns a new function, allowing you to pass any number of arguments. Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma-separated list of arguments. You can remember by treating Call as for comma (separated list) and Apply as for Array. Whereas Bind creates a new function that will have this set to the first parameter passed to bind().",
  },
  {
    id: 2,
    user: "Carlos Arguelles",
    imgUrl: "https://miro.medium.com/max/828/1*XPBvzvVo5u7s2jxmIJw-JQ.png",
    title: "What is a promise? Explained in details.",
    description: "A promise is an object that may produce a single value sometime in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending. Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing cleaner code. Promises have three states:Pending: This is an initial state of the Promise before an operation begins. Fulfilled: This state indicates that the specified operation was completed. Rejected: This state indicates that the operation did not complete. In this case, an error value will be thrown.",
  },
  {
    id: 3,
    user: "Mehdi Aoussiad",
    imgUrl: "https://miro.medium.com/max/1200/1*AJWhia2_QH77RYEWhsLsWA.jpeg",
    title: "What are closures?",
    description: "A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains- Own scope where variables defined between its curly brackets, Outer function variables, Global variables.",
  },
];