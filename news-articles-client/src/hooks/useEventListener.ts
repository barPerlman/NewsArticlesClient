import { useEffect } from 'react';

/**
 * add event listener, get event and handler function
 */
function useEventListener<T extends keyof WindowEventMap>(
    event: T,
    eventHandler: EventListenerOrEventListenerObject
) {
    useEffect(() => {
        document.addEventListener(event, eventHandler, true);
        return () => {
            document.removeEventListener(event, eventHandler, true);
        };
    }, [event, eventHandler]);
}

export default useEventListener;
