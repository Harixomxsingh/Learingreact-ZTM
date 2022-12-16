# Lifecycle Method: componentDidMount

component key thing in react when it's render and when its re-render, but when we wanna get the data from api

we gonna get the data when our app in actually mounted the moment it render by react

so to do that thing we have some method in our react component

- componentDidMount
- componentDidUpdate
- componentWillUnmount

### componentDidMount

componentDidMount it is a method in react component and inside you write your code, and what ever you write here it's run when ever the components mounts, _mounting it is the first time when a component render_

**its only happened at once in the components**

When every you need to call a api or need to took data from an api you always use _life cycle method_, _componentDidMount_

```jsx
  // componentDidMount - render once at the component
  componentDidMount() {
    // this is gonna a promises
    // fetch data from an api
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      // console.log(response);
      response.json().then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
    });
  }

```
