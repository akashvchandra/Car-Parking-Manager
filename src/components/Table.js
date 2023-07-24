import React from "react";

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterByColor:false,
      filterColor:'',
      filterByRegNo:false,
      filterRegNo:'',
		};
		console.log(this.props);
    this.onRegNoInputChange = this.onRegNoInputChange.bind(this)
    this.onColorInputChange = this.onColorInputChange.bind(this)
	}
	onRegNoInputChange(e){
    if(e.target.value!==""){
      this.setState({filterByRegNo:true})
    }else{
      this.setState({filterByRegNo:false})
    }
    this.setState({filterRegNo:e.target.value.toUpperCase()})
    console.log(this.state)
  }
  onColorInputChange(e){
    if(e.target.value!==""){
      this.setState({filterByColor:true})
    }else{
      this.setState({filterByColor:false})
    }
    this.setState({filterColor:e.target.value.toUpperCase()})
  }
	render () {
		return (
			<div>

				<div className="filter-content">
					<p>Filter By</p>
					<input onChange={this.onRegNoInputChange} type="text" placeholder="TN-49-AB-1234"/>
					<input onChange={this.onColorInputChange} type="text" placeholder="Car Color"/>
				</div>

        <table>
					<tbody>
						{Object.keys(this.props.parkingLot).map((slot) => (
							!this.state.filterByRegNo && !this.state.filterByColor && this.props.parkingLot[slot].isOccupied ? ( 
								<tr>
									<td><button onClick={() => this.props.removeCar(slot)}>Remove</button></td>
									<td>{slot}</td>
									<td>{this.props.parkingLot[slot].regNo}</td>
									<td>{this.props.parkingLot[slot].carColor}</td>
								</tr>
							) : ('') 
						))} 
						{Object.keys(this.props.parkingLot).map((slot) => (
              this.state.filterByRegNo && this.props.parkingLot[slot].regNo.includes(this.state.filterRegNo) && this.props.parkingLot[slot].isOccupied ? (
                <tr>
                  <td><button onClick={() => this.props.removeCar(slot)}>Remove</button></td>
                  <td>{slot}</td>
                  <td>{this.props.parkingLot[slot].regNo}</td>
                  <td>{this.props.parkingLot[slot].carColor}</td>
                </tr>
              ) : ('')
						))}
						
						{Object.keys(this.props.parkingLot).map((slot) => (
              this.state.filterByColor && this.props.parkingLot[slot].carColor.includes(this.state.filterColor) && this.props.parkingLot[slot].isOccupied  ? (
                <tr>
                  <td><button onClick={() => this.props.removeCar(slot)}>Remove</button></td>
                  <td>{slot}</td>
                  <td>{this.props.parkingLot[slot].regNo}</td>
                  <td>{this.props.parkingLot[slot].carColor}</td>
                </tr>
              ) : ('')
            ))}
					</tbody>
        </table>
      </div>
		);
	}
}

export default Table;