import React from "react";

class Form extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      newCarColor: "BLUE",
      newCarRegNo: ""
    }
    this.addCar = this.addCar.bind(this);
    this.onRegNoInputChange = this.onRegNoInputChange.bind(this);
    this.setSelectedColor = this.setSelectedColor.bind(this);
	}
	
	checkRegNoFormat(regNo) {
    if (regNo.match("^[A-Z]{2}-[0-9]{2}-[A-Z]{2}-[0-9]{4}$")) {
      return true;
    } else {
      alert("Write your registration no in the following format: TN-01-AB-1234");
      return false;
    }
  }

   addCar(e) {
		e.preventDefault(); 
    if (!this.checkRegNoFormat(this.state.newCarRegNo)) {
      return false;
		}
		
		var newSlotNo = 0; 
		Object.keys(this.props.parkingLot).map((slot) => {
      if (!this.props.parkingLot[slot].isOccupied && newSlotNo === 0) {
        newSlotNo = slot;
				this.props.addCar(newSlotNo, this.state.newCarRegNo, this.state.newCarColor);
				return
      }
    })

		if (newSlotNo === 0) {
			alert('All parking slots are occupied atm!')
		}
	}
	
	onRegNoInputChange(e) {
    this.setState({ newCarRegNo: e.target.value.toUpperCase()});
    
  }

  setSelectedColor(e) {
    this.setState({ newCarColor: e.target.value.toUpperCase()});
  }

	render () {
		return (
			<form>
        <input
          onChange={this.onRegNoInputChange}
          type="text"
          name="regno"
          placeholder="TN-54-AB-1234"
        />
        <select name="select" onChange={this.setSelectedColor}>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Black">Black</option>
        </select>
        <button onClick={this.addCar}>Park Car</button>
      </form>
		);
	}
};

export default Form;
