import style from './Button.module.css'

export default function Button({ item }) {


    return (

        <button className={style[item.title.toLowerCase().replace('.', '')]} data-index={item.id - 1}>{item.title}</button>
    )
}