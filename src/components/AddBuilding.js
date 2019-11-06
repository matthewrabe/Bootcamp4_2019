import React from 'react'


class AddBuilding extends React.Component{

    addListing() {
        const val = {
            id: this.props.lastID + 1, //gives an id 1 greater than the last element
            code: this.code.value,
            name: this.name.value,
            address: this.address.value
        }
		this.props.addListing(val)
    }

    render() {
        
        return (
            <div className="row2">
                <h5>Add a New Building</h5>
                <form>
                    <input
                     type="text"
                     required="required"
                     ref={ (value) => this.name = value}
                     placeholder="Building Name"
                    />
                    <input
                     type="text"
                     required="required"
                     ref={ (value) => this.code = value}
                     placeholder="Building Code"
                    />
                    <input
                     type="text"
                     ref={ (value) => this.address = value}
                     placeholder="Building Address (optional)"
                    />
                    <button type="reset" onClick={this.addListing.bind(this)}>
                        Add Building
                    </button>
                </form>	
           </div>	
        );
    }
}
export default AddBuilding;
