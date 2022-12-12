# Section Roadmap

- [x] Why React?
- [x] The Birth of React.js
- [x] Component Architecture
- [x] UI Layer

---

## The Birth of React.js / What React build for?

Back in the 90s or in early 20s our frontend model is very basic and traditional, we only serve to the client **HTML, CSS, JAVASCRIPT**

when every any user hit a website then the website server give them to HTML,CSS, JS and when the user submit there form the client send the file to server to store the information

when every any user click a anchor tag the server send a new html page and that take too much time and reload everytime

eventually we have _jQuery_ to modify the **DOM** easily, so Developer now make bigger application using JQuery rather then making the small app using normal and hard DOM API. ex - facebook

now our javascript file getting bigger and developer now start to use jQuery to make a massive application, so there is the **BIRTH OF SPA(Single page Application)**

traditionally we just had Html files for each page and every time we moved to a different page we would req from the server. Well the html,css, javascript file usually contain jQuery for each time we clicked on a link

### What is spa

now in spa we called the server and server gives us html css and javascript but we just fetch those file once then after when every we click on a link then our DOM handle those problem and render different kind of html css, so now we interact the application without reloading using dom, without every speaking to server anymore and its feel like a desktop application

while facebook have problem to there platform to handle all those thing and facebook have a solution in 2013 and that help the whole front-end community they build a so called library _react_

---

## React success

so React become the best front-end tool to build application, big company like _netflix airbnb wix twitter facebook uber pinterest reddit paypal strip walmart_ etc.

### React key concepts

1. Don't touch the DOM, i'll do it

> traditionally dom just handle the data flow and it's a havey task for a website, it effect the website performance, so react say that don't think to much i would handle the DOM but not directly you gave me your data in _State_ and that gonna save in memory then we will render, we not gonna render any sort of data directly on the Dom, react name me give me the data in state form i will react it

2. Building website like lego block (Components)

> React have a important note called components, in react we build everything in components based it can be function based or a class based, if you want to build the navbar you build using components, and reuse it any where in the website without writing code from scratch you build a btn you can reuse it , in react everything in components, components is nothing just a function/class that return _jsx_

3. Unidirectional Data flow (One way data flow)

> now we take data in _State_ and make component using _jsx_, now when react read all those data react build a so called VirtualDOM(javascript version of dom) that is the blueprint of our data changes, how it should update the dom , now react look at the blueprint mean VirtualDom What its need to build and then change the Dom

4. I'M JUST UI, the rest is up to you

> like react is a ui library , unlike all those framework, framework mean a hole kitchen there you have all sort of item for cooking, but react is ui library that tells that i also care fo your ui not for other thing if you need other thing you need to import another library so now once you write you react you can make any thing like for mobile use react-native for desktop use elctron for VR use react360 and also for terminal so react also handle the ui no another thing, you well notice when we start building our project so we import two libraries in react 1. the core react library and 2. React Dom that only know how to interact with DOM or web , for cross platform we have another libraries use those
