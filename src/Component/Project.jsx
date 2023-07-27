import style from "./project.module.css"
const Project=()=>{
    return(
        <div>
            <section id={style.main}>
                <div id={style.info}>
                    <h2 className={style.hed}>PROJECTS</h2>
                    <h3 className={style.subhed}>Acedemic Projects:-</h3>
                    <h4 className={style.pro}>1.Solar Oven:-</h4>
                    <hr />
                    <p>In this projects used the EQAVATED TUBE COLLECTOR AND A STEEL
TRAY and create a PARABOLIC TROUGH COLLECTOR by the help of
these equipment we can boil the any like (potato, cheese, rotted
etc).</p>
                    <h4 className={style.pro}>2.Solar Water Heater System:-</h4>
                    <hr />
                    <p>In this project used the EQAVATED TUBE COLLECTOR AND
INSULATION BOX and create a 30 degree angle stand by the help of
this project we are boil the water.</p>
                    <h2 className={style.subhed}>IT-Projects:-</h2>
                    <h4 className={style.pro}>1.Myntra Website:-</h4>
                    <hr />
                    <p>It is made  used by HTML AND CSS.</p>
                    <h4 className={style.pro}>2.Portfolio:-</h4>
                    <hr />
                    <p>It is made only used by REACT-JS.</p>
                    <h4 className={style.pro}>3.Tik-Tac-Toe:-</h4>
                    <hr />
                    <p>It is made  used by HTML , CSS AND JAVASCRIPT.</p>


                    

                </div>
            </section>
        </div>
    )
}
export default Project;