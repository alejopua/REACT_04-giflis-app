import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Testing in hook useFetchGifs.js', () => {  

  test('Must return initial state', () => {  
    const { result } = renderHook( () => useFetchGifs('valorant') );
    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  });

  test('Must return  an array the images and isLoading in false', async() => {  
    const { result } = renderHook( () => useFetchGifs('valorant') );
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  });

});