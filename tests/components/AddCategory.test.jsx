import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing in AddCategory.jsx', () => { 
  
  test('must change the value of the text box', () => { 
    render( <AddCategory onNewCategory={ () => {}}  />);
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Saitama' }} );

    expect( input.value ).toBe('Saitama');
    // screen.debug();
  });

  test('Must call onNewCategory if the input has a value.', () => { 
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory }  />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');


    fireEvent.input( input, { target: { value: inputValue } });
    fireEvent.submit( form );
    // screen.debug();
    expect( input.value ).toBe('');

    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });

  test('Must not call the function if the entry is empty.', () => { 
    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory={ onNewCategory } />);

    const form = screen.getByRole('form');
    fireEvent.submit( form );
    // screen.debug();

    expect( onNewCategory ).toHaveBeenCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled();
  });

});