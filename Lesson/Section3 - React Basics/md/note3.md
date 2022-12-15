# Render element using Map method

now we know how to store data in react using state

now it's time to learn how to render data using map method

so we have a data

```jsx

this.state = {
    monsters = {
        name1:{
            name: "tomy"
        },
        name2:{
            name: "budy"
        },
        name3: {
            name: "skylar"
        }
    }
}
```

so if you wanted to render the data

```jsx
<h1>{this.state.monster.name1.name}</h1>
<h1>{this.state.monster.name2.name}</h1>
<h1>{this.state.monster.name3.name}</h1>
```

> but let's imagine you have 1000 data of name or you have 1000 name of person or monsters then it will be a nightmare

### map

so there i use map function, map is noting just map the data of an array

- so we store our all data in array, then we call our map method and loop through each time

```jsx
this.state = {
  monsters: [
    {
      name: "Linda",
    },
    {
      name: "Frank",
    },
    {
      name: "Jacky",
    },
    {
      name: "Sparky",
    },
    {
      name: "Tomy",
    },
  ],
};

{
  this.state.monsters.map((monster) => {
    return <h1>{monster.name}</h1>;
  });
}
```
