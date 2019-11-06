import React from 'react';

export default ({data, selectedBuilding}) => {
	
	const infoPanel = data
	.filter(directory => {
		return directory.id === selectedBuilding
	})
	.map(directory => {
		return(
			<p>
				<h3>{directory.name}</h3>
				{directory.code}<br />
				{directory.address}
			</p>
		)
})

	if (selectedBuilding === 0) {
		return (
			<div className="selectedBuilding">
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
	}
	else {
		return (
			<div className="selectedBuilding">
				<p>
					{' '}
					{infoPanel}
				</p>
			</div>
		);
	}
}
