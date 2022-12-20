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
