## Props

so now how you pass the data to parent to child component,

**using props**

props is component attribute to pass data to parent component to child component

- props full name is properties

```jsx
// app.jsx
<CardList monsters={filteredMosters} />
```

```jsx
// card-list/card-list.component.jsx
import { Component } from "react";
class cardList extends Component {
  render() {
    let monsters = this.props.monsters;
    // console.log(props);
    console.log(monsters);
    return (
      <div>
        <section>
          {monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>Name: {monster.name}</h1>
                <p>Username: {monster.username}</p>
                <i>email: {monster.email}</i>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
export default cardList;
```

### but why our app ruing render 2 time

to prove it you can use console.log() att card-list component

because when ever our react state changed our component re-render, and when every our props changed our react state changed

- state changed component re-render
- props changed our component re-render

here then we first initialize the state at app.jsx then the monster state in empty array but then we change the empty arr to a list of monster array so here the component re-render

and then we push props to card-list component and when the props re-render then our react app re-render thing again
