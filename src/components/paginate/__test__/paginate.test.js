import React from "react";
import { render, fireEvent } from "@testing-library/react";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import Pagination from "..";
import '@testing-library/jest-dom/extend-expect'

test("test the state of the item", async () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Pagination />
    </ThemeProvider>
  );

  const bgcolor = await getByText("2");

  expect(bgcolor.style.color).toBe('black');
  expect(bgcolor.style.color).toMatchSnapshot();
});

test('test background color of active state', () => {
    const { getByText } = render( 
    <ThemeProvider theme={theme}>
        <Pagination />
    </ThemeProvider>
    )
    const bg = getByText('1')
    expect(bg.style.backgroundColor).toBe('black')
    expect(bg.style.color).toBe('white')
    expect(bg.style.backgroundColor).toMatchSnapshot();
})
