import React, {  } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

// .then( imgs => setImages( imgs )) /* .then( setImages ) otra opción porque solamente se manda un argumento en la función*/

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn" >{category}</h3>

            { loading && <p className="animate__animated animate__flash" >Loading</p>}

             <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} /> /* el operador spread sirve aqui para mandar todas las propiedades de img como props */
                     ))
                }
            </div>     
        </>
    );
};

export default GifGrid;