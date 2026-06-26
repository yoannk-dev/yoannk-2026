import { useEffect, useState } from 'react';

export function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Intl.DateTimeFormat('fr-FR', {
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'Europe/Paris',
          }).format(new Date())
        );
      } catch {
        setTime(new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' }));
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{time}</span>;
}
