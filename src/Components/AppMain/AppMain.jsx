import { useState } from 'react';
import languages from '../../../database/languages.js'
import style from './AppMain.module.css'
export default function AppMain() {

    const [active, setActive] = useState(0)

    function handleClick(e) {
        console.log('hello');

    }

    return (
        <main>
            <div className="container">
                <ul>
                    {languages.map((item, index) => (

                        <li key={item.id}>
                            <button onClick={handleClick}>{item.title}</button>
                        </li>
                    ))}

                </ul>
                {languages.map((item, index) => (

                    <div className={style.description} key={item.id}>
                        <h3>{item.title}</h3>
                        <div className={style.content}>
                            {item.description}
                        </div>
                    </div>
                ))}

            </div>
        </main>
    )
}