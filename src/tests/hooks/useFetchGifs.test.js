import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hokk useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async () => {
        // const { data, loading } = useFetchGifs( 'One Punch' ); // Esto no funciona fuera de un componente funcional
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ));
        const { data, loading } = result.current; // valor actual del hook
        
        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect ( loading ).toBe( true );
    });

    test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect ( loading ).toBe( false );
    });
});