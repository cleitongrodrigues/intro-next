import Image from "next/image";

import styles from './page.module.css'

export default function Home() {
  return (
    <div className="containerGlobal">
        <div className={styles.containerTitle}>
        <h1 className={styles.titulo}>Next</h1> 
        <h2>Teste H2</h2>
        <h3>Teste H3</h3>
        <p>Teste paragrafo</p>
        <div className={styles.containerImage}>
          <Image
          src={'/carro.jpg'} 
          width={500}
          height={500}
          alt='carro'
          className={styles.Image}/>
        
          <Image
          src={'/carro.jpg'} 
          width={100}
          height={100}
          alt='carro'
          className={styles.Image}/>
        </div>
      </div>
    </div>
  );
}
