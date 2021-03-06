import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/dev-mauricioAB.png" alt="Mauricio AB" />

      <div>
        <strong>Mauricio AB</strong>
        <p>
          <img src="icons/level.svg" alt="level svg" />
          Level 1</p>
      </div>
    </div>
  );
}