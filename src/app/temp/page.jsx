import Link from "next/link"
import style from './page.module.css'

export default function Temp(){
    return(
        <div className='containerGlobal'>
            <h1>Páginas de acesso teste</h1>
            <Link href={'/'}>
                 <span className={style.linktemp} >Home</span></Link>
            <Link href={'/sobre'}>
                 <span className={style.linktemp}>  Sobre</span></Link>
            <Link href={'/usuarios/cadastro'}>
                 <span className={style.linktemp}> Cadastro de usuários</span></Link>
            <Link href={'/usuarios/login'}>
                 <span className={style.linktemp}>Login</span></Link>
        </div>
    )
}