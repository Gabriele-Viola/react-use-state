import { useState } from 'react';
import languages from '../../../database/languages.js'
import style from './AppMain.module.css'
import Button from '../Buttons/Button.jsx';
export default function AppMain() {

    const [active, setActive] = useState(null)

    function handleClick(e) {
        const newActive = Number(e.target.getAttribute('data-index'))
        active == newActive ? setActive(null) : setActive(newActive)
        console.log(newActive);

    }

    return (
        <main>
            <div className="container">
                <ul>
                    {languages.map((item, index) => (

                        <li key={item.id}>
                            <Button className={active == index ? item.title : ''} onClick={handleClick} item={item} />
                        </li>
                    ))}
                </ul>
                <div className="description">
                    <h3 className={active == null ? 'active' : 'hidden'}>Select a Language</h3>
                    {languages.map((item, index) => (
                        <div className={active == index ? 'active' : 'hidden'}>

                            <h3>{item.title}</h3>
                            <div className={style.content}>
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>




            </div>
        </main>
    )
}