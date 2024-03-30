import * as React from 'react'
import {render, screen, fireEvent} from '@testing-library/react-native'
import ColorText from "./ColorText";

test('color changes on button press', async () => {
  const expectedUsername = 'Ada Lovelace'

  // Given: The component renders
  render(<ColorText  text={expectedUsername}/>)

  // When: We click the button
  const button = screen.getByRole("button", { name: "Press Me" });
  fireEvent.press(button)

  // Then: The element should still be there
  const textAfterColor = await screen.findByText(expectedUsername)

  expect(textAfterColor).toBeTruthy();
  // Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
  expect(textAfterColor).toHaveTextContent(expectedUsername);
  expect(textAfterColor).toHaveStyle({
    fontSize: 18,
    textAlign: "center",
    paddingRight: "20%",
    paddingLeft: "20%"
  });

});