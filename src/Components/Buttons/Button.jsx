import style from './Button.module.css'

export default function Button({ item, onClick, className }) {
    console.log(fixTitle(className));

    function fixTitle(title) {
        return title.toLowerCase().replace('.', '')
    }
    return (

        <button onClick={onClick} className={style[fixTitle(className)]} data-index={item.id - 1}>{item.title}</button>
    )
}