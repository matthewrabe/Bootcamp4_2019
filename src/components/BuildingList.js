import React from 'react';

class BuildingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data } = this.props;

		const buildingList = data
		.filter(directory => {
			return directory.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0
		})
		.map(directory => {
			return (
				<tr key={directory.id} onClick={() => this.props.selectedUpdate(directory.id)}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
