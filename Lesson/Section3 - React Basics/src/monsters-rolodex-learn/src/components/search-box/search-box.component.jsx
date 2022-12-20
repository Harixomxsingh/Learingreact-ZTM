import { Component } from "react";
import "./searchList.style.css";

class SearchBox extends Component {
  render() {
    let { searchBox, onSearchChange, placeholder } = this.props;

    return (
      <div>
        <input
          type="search"
          placeholder={placeholder}
          className="search__box"
          value={searchBox}
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
