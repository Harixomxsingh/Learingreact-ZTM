import { Component } from "react";
import "./footer.style.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          Made with <span>❤</span> by{" "}
          <a href="https://www.twitter.com/Harixomxsingh" target={"_blank"}>
            Hari om Singh
          </a>
        </footer>
      </>
    );
  }
}

export default Footer;
