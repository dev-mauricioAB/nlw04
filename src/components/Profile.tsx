import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/dev-mauricioAB.png" alt="Mauricio AB" />

      <div>
        <strong>Mauricio AB</strong>
        <p>
          <img src="icons/level.svg" alt="level svg" />
          Level {level}</p>
      </div>
    </div>
  );
}