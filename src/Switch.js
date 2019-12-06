import React, { Component } from "react";
import Switch from "react-switch";
import InputSlider from './InputSlider';
import MenuAppBar from './MenuAppBar';

class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
			<div>
          <label htmlFor="normal-switch">
            <span>Switch with default style</span>&nbsp;&nbsp;&nbsp;
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              id="normal-switch" />

          </label>
  				<InputSlider />
  				<br/>
  				<MenuAppBar />
				</div>
    );
  }
}

export default SwitchExample;
