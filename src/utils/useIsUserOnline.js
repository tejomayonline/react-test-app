import { useState } from "react";

const useIsUserOnline = () => {
  const [isUserOnline, setIsUserOnline] = useState(true);

  window.addEventListener("offline", () => setIsUserOnline(false));
  window.addEventListener("online", () => setIsUserOnline(true));

  return isUserOnline;
};

export default useIsUserOnline;
