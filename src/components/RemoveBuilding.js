import React from 'react'

class RemoveBuilding extends React.Component{
    
    removeBuilding() {
        const { data } = this.props;

		const removedBuilding = data
		.filter(directory => {
            return directory.id !== this.props.selectedBuilding
        })
        
        this.props.removeBuilding(removedBuilding)
    }

    render() {

        if (this.props.selectedBuilding !== 0){
            return(
                <div>
                    <button type="button" onClick={this.removeBuilding.bind(this)}>
                        Remove Building
                    </button>
                </div>
            )
        }
        else{
            return (<div></div>)
        }
    }
}
export default RemoveBuilding;