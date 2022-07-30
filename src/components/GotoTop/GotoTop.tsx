// A component to scroll back to top when router change
import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoToTop:FC = () => {
    const routePath = useLocation();
    const onTop: () => void = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop();
    }, [routePath]);

    return null;
}

export default GoToTop;