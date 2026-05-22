import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        &copy; 2025 Feito por <a href="https://github.com/renatastephanie" target='_blank' rel='noreferrer'>
          Renata Stephanie
        </a>
      </p>
    </div>
  );
}