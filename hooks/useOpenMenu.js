import { useEffect, useState } from "react";

export const useOpenMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const hotdogClick = () => {
      setOpenMenu(!openMenu);
    };

    const button = document.getElementById("hotdog");
    const body = document.querySelector("body");

    button.addEventListener("click", hotdogClick);

    if (openMenu) body.classList.add("overflow-y-hidden");
    else body.classList.remove("overflow-y-hidden");

    return () => button.removeEventListener("click", hotdogClick);
  }, []);
  return openMenu;
};
