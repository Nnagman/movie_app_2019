import React from 'react';

function Food({name, picture}) {
    return <div>
        <h2>I like {name}</h2>
        <img src={picture} alt={name}/>
    </div>
}

const foodILike = [
    {
        id: 1,
        name: "Kimch",
        image: "image1"
    }, {
        id: 2,
        name: "ramne",
        image: "image2"
    }, {
        id: 3,
        name: "samgiopsal",
        image: "image3"
    }, {
        id: 4,
        name: "chukumi",
        image: "image4"
    }
]

function App() {
    return (
        <div>
            {
                foodILike.map(
                    dish => (<Food key={dish.id} name={dish.name} picture={dish.image}/>)
                )
            }
        </div>
    );
}

export default App;
