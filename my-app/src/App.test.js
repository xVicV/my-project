import { render, screen, fireEvent } from "@testing-library/react";
import Form from './components/Form';

test('Renders the Form heading', () => {
   render(<Form />);
   const headingElement = screen.getByText("Reserve");
   expect(headingElement).toBeInTheDocument();
});

test("Updates the time correctly", () => {
   render(<Form />);
   const dateSelector = screen.getByLabelText(/Date & Time \*/);
   fireEvent.change(dateSelector, { target: { value: "2023-02-05T10:30" } });
   const selectedValue = dateSelector.value;
   expect(selectedValue).toBe("2023-02-05T10:30");
});