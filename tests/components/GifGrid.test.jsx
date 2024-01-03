import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Testing GifGrid.jsx', () => {  
  const category = 'dragon ball'

  test('must show the loading', () => {
    render( <GifGrid category={ category } />)
    // screen.debug()
    expect( screen.getByText( 'Loading...' ));
    expect( screen.getByText( category ));
  });

});