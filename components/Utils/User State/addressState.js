export const addressState = () => {
  if (typeof window !== "undefined") {
    const addressInfo =
      localStorage.getItem("address") !== "undefined"
        ? JSON.parse(localStorage.getItem("address"))
        : localStorage.clear();

    return addressInfo;
  }
};
