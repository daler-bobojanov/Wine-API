import React from 'react';
import './App.css';
import axios from 'axios';

import ButtonsModal from './components/ButtonsModal';
import AddWineForm from './components/AddWineForm';
import DeleteWineBtn from './components/DeleteWineBtn';
/*
* Render the wines in the webpage. - DONE!
* When someone clicks a wine display information of that single wine in the webpage. HTTP GET method. - DONE!
* Make a form to create new wines. HTTP POST method. - DONE!
* Make an option to delete a chosen wine. - HTTP DELETE method. - DONE!
* Your app has to use React and Axios - Complete!
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wines: []
    }
  }

  componentDidMount() {
    this.getWines();
    // this.postWine();
  }

  async getWines() {
    try {
      const api_call = await axios.get('http://myapi-profstream.herokuapp.com/api/b6fbb2/wines');
      // console.log(api_call.data)
      this.setState({
        wines: api_call.data,
      })
    } catch (e) {
      console.error(e);
    }
  }

  async postWine(e) {
    // e.preventDefault();
    try {
      const newWine = {
        name: e.target.elements.name.value,
        year: e.target.elements.year.value,
        grapes: e.target.elements.grapes.value,
        country: e.target.elements.country.value,
        region: e.target.elements.region.value,
        description: e.target.elements.description.value,
        picture: e.target.elements.picture.value,
        price: e.target.elements.price.value
      }
      const response = await axios.post('http://myapi-profstream.herokuapp.com/api/b6fbb2/wines', newWine);
      return response;
      // console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  async deleteWine(e) {
    // e.preventDefault();
    try {
      const res = await axios.delete(`http://myapi-profstream.herokuapp.com/api/b6fbb2/wines/${e.target.elements.wineId.value}`)
      return res;
      // console.log(res);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <div className='container'>
          <header className='main-header'>
            Wine API
          </header>
          <DeleteWineBtn deleteWine={this.deleteWine} />
          <AddWineForm postWine={this.postWine} />
        </div>

        <div className='wrapper'>

          {this.state.wines.map((wine) => (

            < div className='child' key={wine.id} >

              <ul>
                <li>
                  <img className='picture' key={wine.id} src={wine.picture} alt='different kinds of wine bottles' />
                </li>

                <li key={wine.id}>
                  {wine.name}
                </li>
                <ButtonsModal value={wine} />
                <p style={{ fontSize: "0.8em" }}>id: {wine.id}</p>
              </ul>

            </div>

          ))}
        </div>
        <footer><h5>2020 &copy; Daler Bobojanov</h5></footer>
      </div >
    );
  }
}

export default App;

