import { useEffect } from 'react';

const useAutoplay = (api, delay) => {
useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
        api.scrollNext();
    }, delay);

    return () => clearInterval(interval);
    }, [api, delay]);
};

export default useAutoplay;
