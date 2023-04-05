import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPharse: ''}

  onChangeInputPharse = event => {
    const {value} = event.target

    this.setState({inputPharse: value})
  }

  render() {
    const {inputPharse} = this.state
    return (
      <div className="bg-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-pharse-container">
              <label className="label" htmlFor="pharseText">
                Enter the phrase
              </label>
              <input
                type="text"
                placeholder="Enter the phrase"
                className="letters-input"
                value={inputPharse}
                id="pharseText"
                onChange={this.onChangeInputPharse}
              />
            </div>
            <p className="letters-count">No.of letters:{inputPharse.length}</p>
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
