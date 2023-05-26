import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Toy Shop | ${title}`;
  }, [title]);
};
export default useTitle;
