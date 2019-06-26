import React from 'react';

import styles from './index.module.css';

import Button from '../Button';

function Card({ title, subtitle, img, adopt, onClick }) {
  const isAdopted = !adopt
    ?
      <Button onClick={onClick} text="Adoptar" />
    :
      'Ya esta adoptado';

  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={img}
        alt="card-header"
      />

      <div className={styles.body}>
        <h2 className={styles.subtitle}>
          { subtitle }
        </h2>

        <h1 className={styles.title}>
          { title }
        </h1>
      </div>

      <hr className={styles.divider} />

      <footer className={styles.footer}>
        { isAdopted }
      </footer>
    </div>
  )
}

export default Card;
