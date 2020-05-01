import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import natash_img from './natash.jpg'
import Card from './components/Card';

function App() {

  const firstCardClick = (obj) => {
    console.log('First card click');
  };

  const secondCardClick = (obj) => {
    console.log('Уже встаю... Встаю!');
  }


  const cards = [ {title:'Card title', 
                 text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                 buttonCaption: 'Do something',
                 onButtonClick: firstCardClick},
                {title: 'Наташ! Вставай!',
                 text: 'Мы все уронили! Вообще все!',
                 buttonCaption: 'Встаю!',
                 onButtonClick: secondCardClick}];

  return (
    <React.Fragment>
      <div className="card-list">
      <Card {...cards[0]}/>
      <Card {...cards[1]}>
        <img src={natash_img} className="card-img-top" alt="Наташ! Вставай! Мы все уронили..." />        
      </Card>
      </div>
    </React.Fragment>
  );
}

export default App;
