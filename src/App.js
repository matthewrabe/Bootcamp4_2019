import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding'
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })

  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  addListing(val) {
    this.setState({
        data: this.state.data.concat(val)
    })
  }

  removeBuilding(removedBuilding) {
    this.setState({
      selectedBuilding: 0,
      data: removedBuilding
    })
  }

  render() {
    return (
      <div className="bg" class="container-fluid">
          <nav class="navbar navbar-dark" style={{background: "#3498db"}}>
            <span class="navbar-brand mb-0 h3">UF Directory App</span>
          </nav>

        <Search
         filterText={this.state.filterText}
         filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
               selectedBuilding={this.state.selectedBuilding}
               data={this.state.data}
              />
              <RemoveBuilding
               data={this.state.data}
               selectedBuilding={this.state.selectedBuilding}
               removeBuilding={this.removeBuilding.bind(this)}
              />
            </div>
          </div>
            <AddBuilding
             addListing={this.addListing.bind(this)}
             lastID={this.state.data[this.state.data.length - 1].id} //The id of the last element of data
            />
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
