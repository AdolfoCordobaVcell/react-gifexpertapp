import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../componets/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //fiFinge que se recibe la información del hook

describe('Pruebas en <GifGrid />', () => {
    const category = 'One Punch';

    test('Debe hacer match con el snapshoot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imágenes en useFetchGifs', () => {
        const gifs = [{
            id: '123',
            url: 'https://localhost/prueba/cualquiera.jpg',
            title: 'Cualquier cosa para la prueba'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });



});