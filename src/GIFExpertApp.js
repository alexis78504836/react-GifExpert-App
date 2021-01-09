import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import {GifGrid} from './Components/GifGrid'

const GIFExpertApp = () => {
    const [categorias, setCategorias] = useState(['One Punch']);    

    // const handleAdd = (e) => {
    //     const catAuxiliar = [...categorias,'Hola']
    //     setCategorias(catAuxiliar);
    //     console.log(categorias.length);
    // };

        return (
        <>
            <h2>Gif Expert App</h2>
            
            <AddCategory setCategories={setCategorias}></AddCategory>
            <hr />
            <ol>
                {
                    categorias.map( categoria => {
                        return <GifGrid 
                            category={categoria}
                            key={categoria}
                            />;
                    })
                }
            </ol>
        </>
        );
};

export default GIFExpertApp;