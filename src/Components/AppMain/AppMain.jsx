import { useState } from 'react';
import languages from '../../../database/languages.js'
import style from './AppMain.module.css'
import Button from '../Buttons/Button.jsx';
export default function AppMain() {

    const [active, setActive] = useState(null)

    function handleClick(e) {
        const newActive = Number(e.target.getAttribute('data-index'))
        console.log(newActive);
        setActive(newActive)
    }

    return (
        <main>
            <div className="container">
                <ul>
                    {languages.map((item, index) => (

                        <li key={item.id}>
                            <button onClick={handleClick} data-index={index}>{item.title}</button>
                            <div onClick={handleClick} data-index={index}>

                                <Button item={item} />
                            </div>
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