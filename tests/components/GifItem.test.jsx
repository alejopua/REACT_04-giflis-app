import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Testing in GifItem.jsx', () => { 
  const title = 'A title';
  const url   = 'https://...';

  test('Must match the snapshot', () => {
    const { container } = render( <GifItem title={ title } url={ url } /> ) 

    expect( container ).toMatchSnapshot();
  });

  test('must show the image with the title and url', () => {
    render( <GifItem title={ title } url={ url } /> );
    // screen.debug();

    // expect( screen.getByRole('img').alt ).toBe( title );

    const { alt, src } = screen.getByRole('img');
    expect( alt ).toBe( title );
    expect( src ).toBe( url + '/');
  });

  test('must show the title in the component', () => {
    render( <GifItem title={ title } url={ url } /> );

    expect( screen.getByText( title ) ).toBeTruthy();
  });

})