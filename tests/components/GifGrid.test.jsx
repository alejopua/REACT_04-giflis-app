import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Testing GifGrid.jsx', () => {  
  const category = 'dragon ball'

  test('Must show the loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render( <GifGrid category={ category } />)
    expect( screen.getByText( 'Loading...' ));
    expect( screen.getByText( category ));
  });

  test('Must display items when loading images from useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      },
      {
        id: '123',
        title: 'Cell',
        url: 'https://localhost/cell.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category={ category } />)
    expect( screen.getAllByRole('img').length ).toBe( gifs.length );

  });

});