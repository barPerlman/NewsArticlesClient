import { useCallback } from 'react';
import useEventListener from './useEventListener';

type Keys = 'Escape';

/**
 * get a callback to run when the check for the event specified pass and register them as event to listen with its
 * handler
 */
function useKeyPress(key: Keys, callback: () => void) {
    const onKeyPress = useCallback(
        (event: Event) => {
            if ((event as KeyboardEvent).key === key) {
                callback();
            }
        },
        [key, callback]
    );

    useEventListener('keydown', onKeyPress);
}

export default useKeyPress;
