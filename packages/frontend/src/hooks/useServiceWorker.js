import { useEffect, useState } from "react";
import * as serviceWorker from "../serviceWorker";

const useServiceWorker = () => {
  const [waitingServiceWorker, setWaitingServiceWorker] = useState(null);

  useEffect(() => {
    serviceWorker.waiting().then(setWaitingServiceWorker);

    serviceWorker.register({
      onUpdate: (registration) => {
        setWaitingServiceWorker(registration.waiting);
      },
    });
  }, []);

  const skipWaiting = () => {
    serviceWorker.skipWaiting(waitingServiceWorker);
    window.location.reload();
    setWaitingServiceWorker(null);
  };

  return [waitingServiceWorker !== null, skipWaiting];
};

export default useServiceWorker;
