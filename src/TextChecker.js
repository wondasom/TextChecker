import React from "react";

import Button from "./components/Button";
import "./styles.css";

export default class TextChecker extends React.Component {
  state = {
    originalText: "",
    betterText: "",
    unnecessaryWords: ["extremely", "literally", "actually"],
    overUsedWords: ["really", "very", "basically"],
    reallyCount: 0,
    veryCount: 0,
    basicallyCount: 0
  };

  handleClick = event => {
    event.preventDefault();
    let story = this.state.originalText;
    const storyWords = story.split(" ");

    let reallyCount = 0;
    let veryCount = 0;
    let basicallyCount = 0;

    for (const word of storyWords) {
      if (word === "really") {
        reallyCount += 1;
      } else if (word === "very") {
        veryCount += 1;
      } else if (word === "basically") {
        basicallyCount += 1;
      }
    }
    this.setState({
      reallyCount,
      veryCount,
      basicallyCount
    });
  };

  handleChange = event => {
    event.preventDefault();
    let story = this.state.originalText;
    const storyWords = story.split(" ");
    const betterWords = storyWords.filter(
      words => !this.state.unnecessaryWords.includes(words)
    );
    const betterText = betterWords.join(" ");

    // Number of Sentences
    //let sentenceCount = 0;
    //for (const word of storyWords) {
    // if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
    //    sentenceCount += 1;
    // }
    //}

    this.setState({
      betterText
    });
  };

  render() {
    return (
      <div>
        <div className="guide">
          <h2>
            Welcome to mini text checker! <br />
            There are two features you can use with this checker.
          </h2>
          <p>
            1. Let's delete those words below. They are unnecessary.
            <br />
            <span>{this.state.unnecessaryWords.map(word => word + ", ")}</span>
          </p>

          <p>
            2. Let's try not repeat those words too much. Keep in mind how many
            times you used them.
            <br />
            <span>{this.state.overUsedWords.map(word => word + ", ")}</span>
          </p>
        </div>

        <div className="originalText">
          <h3>Original Text</h3>
          <p className="textLength">{this.state.originalText.length} Characters</p>
          <textarea
            className="textBox"
            rows="10"
            cols="20"
            placeholder="Put your text here"
            onChange={event =>
              this.setState({ originalText: event.target.value })
            }
          />
          
          <Button label="DELETE WORDS" onClick={this.handleChange} />
        </div>

        <div className="betterText">
          
          <h3>Better Text</h3>
          <p className="textLength">{this.state.betterText.length} Characters</p>
          <p className="textBox"> {this.state.betterText} </p>
          <Button label="SHOW WORDS" onClick={this.handleClick} />
          <table className="overUsedWords">
            <tr>
              {this.state.overUsedWords.map(element => {
                return <th>{element}</th>;
              })}
            </tr>
            <tr>
              <td>{this.state.reallyCount}</td>
              <td>{this.state.veryCount}</td>
              <td>{this.state.basicallyCount}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
