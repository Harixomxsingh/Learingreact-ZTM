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
      id: 0,
    },
    {
      name: "Frank",
      id: 1,
    },
    {
      name: "Jacky",
      id: 2,
    },
    {
      name: "Sparky",
      id: 3,
    },
    {
      name: "Tomy",
      id: 4,
    },
  ],
};

{
  this.state.monsters.map((monster) => {
    return <h1>{monster.name}</h1>;
  });
}
```

## Key

### What is key and we need it

so now you render the data from an array, now you see that a waring is waiting for you,

because react need a unique value to render each item

that why we need to gave a key attribute to each element that we return from our map's callback function

```jsx
this.state = {
  monsters: [
    {
      name: "Linda",
      id: 0,
    },
    {
      name: "Frank",
      id: 1,
    },
    {
      name: "Jacky",
      id: 2,
    },
    {
      name: "Sparky",
      id: 3,
    },
    {
      name: "Tomy",
      id: 4,
    },
  ],
};

{
  this.state.monsters.map((monster) => {
    return <h1 key={monster.id}>{monster.name}</h1>;
  });
}
```

### Why use?

now if you want to change _tomy_ then and you changed the value of _Tomy_ to _steven_ then react not gonna re-render all of our list data, react gonna find the key that match to element and then render to other data

> using key making for website very fast and efficient
