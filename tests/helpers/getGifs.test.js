import { getGifs } from "../../src/helpers/getGifs";

describe('Testing in getGifs.js', () => {

  test('must retorn an array of gifs', async() => {

    const gifs = await getGifs( 'valorant' );
    // console.log( gifs );

    expect( gifs.length ).toBeGreaterThan( 0 );
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String ),
    });
  
  });

});