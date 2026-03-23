export function useContact() {
  return {
    mutate: (data: any) => {
      console.log("Contact form submitted:", data);
      alert("Form submitted successfully (mock)");
    },
    isLoading: false,
  };
}

export function useCorporateInquiry() {
  return {
    mutate: (data: any) => {
      console.log("Corporate inquiry submitted:", data);
      alert("Corporate inquiry sent (mock)");
    },
    isLoading: false,
  };
}