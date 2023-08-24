// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    const {value} = event.target

    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="letters-container">
        <div className="letters">
          <div className="calculator">
            <h1 className="main-heading">Calculate the Letters you enter</h1>
            <div>
              <label htmlFor="phraseText" className="label" type="">
                Enter the Phrase
              </label>

              <input
                type="text"
                className="text-Input"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                placeholder="Enter the phrase"
                id="phraseText"
              />
            </div>
            <p className="letters-count">No.of letters: {searchInput.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
