import { useEffect } from "react";

function useInterval(fn, timeOut) {
    useEffect(() => {
        const intervalId = setInterval(() => {
            fn();
        }, timeOut);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
}

export default useInterval;
