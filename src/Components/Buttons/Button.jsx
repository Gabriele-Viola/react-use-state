import style from './Button.module.css'

export default function Button({ item }) {


    return (

        <button data-index={item.id - 1}>{item.title}</button>
    )
}