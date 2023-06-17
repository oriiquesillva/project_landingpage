import styles from "./loading.module.scss";

export const Loading = () => (
  <div className={styles.overlay}>
    <div className={styles.loading} />
  </div>
);