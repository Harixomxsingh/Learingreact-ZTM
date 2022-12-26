import { Component } from "react";
import "./css/cardList.style.css";
class cardList extends Component {
  render() {
    let monsters = this.props.monsters;
    // console.log(props);
    console.log(monsters);
    return (
      <div className="box__parent">
        <h1>Monsters Park</h1>
        <section className="box">
          {monsters.map((monster) => {
            return (
              <div key={monster.id} className="card-container">
                <img
                  src={`https://robohash.org/${monster.id}?set=set2`}
                  alt={`monster : ${monster.name}`}
                  className="monster__img"
                />
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
