import React from 'react';

function Food({name, picture}) {
    return <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={picture}/>
    </div>
}

const foodILike = [
    {
        name: "Kimch",
        image: "image1"
    }, {
        name: "ramne",
        image: "image2"
    }, {
        name: "samgiopsal",
        image: "image3"
    }, {
        name: "chukumi",
        image: "image4"
    }
]

function App() {
    return (
        <div>
            {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
        </div>
    );
}

export default App;
