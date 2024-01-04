import { render, screen, fireEvent } from "@testing-library/react";
import { GiflisApp } from "../src/GiflisApp";

describe('Testing in GiflisApp.jsx', () => { 

  // test('Must return initial state', () => {
  //   render(<GiflisApp />);
  //   screen.debug();
  //   expect(screen.getByText('GiflisApp'));
  // });

  test('second', () => {
    render(<GiflisApp />);
    expect( screen.getByText('Samurai X') ).toBeTruthy();
  });

});