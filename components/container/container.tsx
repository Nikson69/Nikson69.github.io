import Header from "../header"
import style from '../../public/styles/container.module.scss'
interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {

  return <div className={style.container}>
    <Header />
    <div className={style.content}>{children}</div>
  </div>
}
