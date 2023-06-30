import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage";

test("Renders the BookingPage", () => {
   render(<BookingPage />);
   const submitBtn = screen.getByText("Make Reservation");
   expect(submitBtn).toBeInTheDocument();
});

test("Updates the time correctly", () => {
   render(<BookingPage />);
   const dateSelector = screen.getByLabelText(/Choose date/);
   fireEvent.change(dateSelector, { target: { value: "2023-06-30" } });
   const timeDropDown = screen.getByLabelText(/Choose time/);
   fireEvent.change(timeDropDown, { target: { value: "15:00" } });
   expect(timeDropDown.value).toEqual("15:00");
});