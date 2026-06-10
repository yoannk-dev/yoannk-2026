import { useCursor } from '@/hooks/useCursor';
import styles from './Cursor.module.scss';

export default function Cursor() {
  const { dotRef, ringRef, glowRef } = useCursor();
  return (
    <>
      <div ref={glowRef} className={styles.glow} />
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}
