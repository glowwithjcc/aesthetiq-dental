"use client";

import { createContext, useContext, useState } from "react";

const BookingContext = createContext<any>(null);

export function BookingProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = () => setIsOpen(true);
  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ isOpen, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
