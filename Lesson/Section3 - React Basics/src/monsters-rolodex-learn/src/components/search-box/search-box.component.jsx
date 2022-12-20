import { Component } from "react";

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
