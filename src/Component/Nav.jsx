import React from "react"
import style from "./nav.module.css"
import {Link} from "react-router-dom"
const Nav=()=>{
    return(
        <div>
            <div id={style.Nav}>
            <nav>
                <ol>
                    <li id={style.name}><span>D</span>ilshad<span>.</span></li>
                    <li className={style.info}><Link to="/" className={style.Link}>About</Link></li>
                    <li className={style.info}><Link to="/Education"className={style.Link}>Education</Link></li>
                    <li className={style.info}><Link to="/Project"className={style.Link}>Project</Link></li>
                    <li className={style.info}><Link to="/Contact"className={style.Link}>Contact</Link></li>
                

                </ol>
                
            </nav>
            
            <h1> </h1>
            
            </div>
            
        </div>
    )
}
export default Nav;