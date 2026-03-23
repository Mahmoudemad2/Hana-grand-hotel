import { useState } from "react";

export function useBookings() {
  return {
    data: [],
    isLoading: false,
  };
}

export function useBooking(id: number) {
  return {
    data: id
      ? {
          id,
          name: "Test User",
          room: "Deluxe Room",
        }
      : null,
    isLoading: false,
  };
}

export function useCreateNewBooking() {
  const [isLoading, setIsLoading] = useState(false);

  return {
    mutate: (data: any) => {
      setIsLoading(true);
      console.log("Booking created:", data);

      setTimeout(() => {
        setIsLoading(false);
        alert("Booking created successfully (mock)");
      }, 1000);
    },
    isLoading,
  };
}