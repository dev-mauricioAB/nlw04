import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';
import { CompleteChallenges } from './CompleteChallenges';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSecceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFaleid() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount}xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFaleid}
            >
              Falhei
              </button>
            <button
              type="button"
              className={styles.challengeSucceedButton}
              onClick={handleChallengeSecceeded}
            >
              Completei
              </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Finalize um ciclo para receber desafios a serem completados
            </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up icon" />
                Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}