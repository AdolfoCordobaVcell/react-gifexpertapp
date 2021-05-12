import React, { useState } from 'react';
import AddCategory from './componets/AddCategory';
import GifGrid from './componets/GifGrid';

const GifExpertApp = ({ defaultCategories = ['One Punch'] }) => {

    // const [categories, setCategories] = useState( ['One Punch'] );
    const [categories, setCategories] = useState( defaultCategories );

    /* const handleAdd = () => {
        setCategories([...categories, 'Seven Deadly Sins']);
        //setCategories( cats => [...cats, 'Seven Deadly Sins']); //otra opción de agregar al estado
        
    } */

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick={ handleAdd } >Agregar</button>
            <button onClick={ () => handleAdd() } >Agregar</button> otra opción de dar click al botón */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category } />
                    ))
                }
            </ol>

        </div>
    );
};

export default GifExpertApp;