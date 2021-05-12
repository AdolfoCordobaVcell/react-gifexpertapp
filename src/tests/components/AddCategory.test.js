import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../componets/AddCategory';

describe('Pruebas en el componente', () => {
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => { //ciclo de vida, limpiar
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'

        input.simulate('change', { target: { value } } );
        expect( wrapper.find('p').text().trim() ).toBe( value );
    });

    test('No debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => {} } );

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        //1.- simular el inputValue
        // const value = 'Hola';
        // wrapper.find('input').simulate(change, { target: { value }});
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'Hola' } } );

        //2.- simular el submit
        wrapper.find('form').simulate('submit', { preventDefault: () => {} } );

        //3.- setCategories se debe haber llamado 
        //4.- el valor de input debe ser ''
        expect( setCategories ).toHaveBeenCalled();
        // expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); se debe  de llamar con una función
        
        expect( input.text() ).toBe( '' );

        // expect( wrapper.find('input').prop('value') ).toBe('');

    });

});