import React from 'react';
import './App.css';
import axios from 'axios';

import ButtonsModal from './components/ButtonsModal';
import WineForm from './components/WineForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: undefined,
      // name: undefined,
      // year: undefined,
      // grapes: undefined,
      // country: undefined,
      // region: undefined,
      // description: undefined,
      // picture: undefined,
      // price: undefined,
      wines: [],
      // winePictures: []
    }
  }

  componentDidMount() {
    this.getWines();
  }

  async getWines() {
    try {
      const api_call = await axios.get('http://myapi-profstream.herokuapp.com/api/b6fbb2/wines');

      // const getWinePicsURL = api_call.data.map((picture) => [picture.picture]);
      this.setState({
        wines: api_call.data,
        //   winePictures: winePics
      })
      // console.log(getWinePicsURL);
      // const promise1 = axios.get(getWinePicsURL[0]);
      // const promise1 = axios.get("https://s3-us-west-2.amazonaws.com/sandboxapi/saint_cosme.jpg");
      // const promise2 = axios.get(getWinePicsURL[1]);
      // const promise3 = axios.get(getWinePicsURL[2]);
      // const promise4 = axios.get(getWinePicsURL[3]);
      // const promise5 = axios.get(getWinePicsURL[4]);
      // const promise6 = axios.get(getWinePicsURL[5]);
      // const promise7 = axios.get(getWinePicsURL[6]);
      // const promise8 = axios.get(getWinePicsURL[7]);
      // console.log(promise1.picture);
      // const allPromises = [promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8]

      // Promise.all(allPromises).then(res => {
      //   const winePics = [];
      //   for (let i = 0; i < res.length; i++) {
      // console.log(res[i].data.picture)
      // winePics.push(res[i].data.picture);
      // }
      // console.log(winePics, "WinePics")


      // console.log(this.state.winePictures, 'Wine Pic');
      // })


    } catch (e) {
      console.error(e);
    }
  }

  //   function buttonClicked(e){
  // e.preventDefault();

  //   }
  render() {
    return (
      <div>
        <div className='container'>
          <header className='main-header'>
            Wine API
          </header>
          <WineForm />
        </div>

        <div className='wrapper'>

          {this.state.wines.map((wine) => (
            <div className='child' key={wine.id}>

              <ul>
                <li>
                  <img className='picture' key={wine.id} src={wine.picture} alt='different kinds of wine bottles' />
                </li>

                <li key={wine.id}>
                  {wine.name}
                </li>
                <ButtonsModal value={wine} />

              </ul>

            </div>

          ))}

        </div>

        <footer><h5>2020 &copy; Daler Bobojanov</h5></footer>

      </div>

    );
  }
}

export default App;

/*
* Render the wines in the webpage. - DONE!
* When someone clicks a wine display information of that single wine in the webpage. HTTP GET method. - DONE!
* Make a form to create new wines. HTTP POST method.
* Make an option to delete a chosen wine. - HTTP DELETE method.
* Your app has to use React and Axios - Complete!
*/