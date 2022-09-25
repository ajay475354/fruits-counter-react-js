import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  mangoIncrement = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  bananaIncrement = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate
            <span className="span"> {count1}</span> mangoes
            <span className="span"> {count2}</span> bananas
          </h1>
          <div className="bouth-images-container">
            <div className="image-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="mango"
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.mangoIncrement}
              >
                Eat Mango
              </button>
            </div>

            <div className="image-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="banana"
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.bananaIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
