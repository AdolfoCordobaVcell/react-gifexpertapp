import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../componets/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('Debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );
    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.html()); para ver las propiedades del html
        // console.log(img.props()); para ver las propiedades del html como un objeto en enzime

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('Debe tener animate_fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );

    });
});