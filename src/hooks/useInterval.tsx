import React from "react";

function useInterval(callback: () => void, delay: number, refresh: number) {
  const savedCallback = React.useRef(callback);
  const intervalId = React.useRef<NodeJS.Timer>();

  const clear = React.useCallback(() => clearInterval(intervalId.current), []);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      if (savedCallback && savedCallback.current) {
        savedCallback.current();
      }
    }

    if (intervalId.current) {
      clear();
    }

    if (delay !== null) {
      intervalId.current = setInterval(tick, delay);
    }

    return clear;
  }, [delay, refresh]);
}

export default useInterval;
