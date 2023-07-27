import style from "./section.module.css"
import img from "./img1/dilshad1.png"
const Section=()=>{
    return(
        <div>
            <section id={style.about}>
                
                <div id={style.imgdiv}>
                    <img src={img} alt="" />
                </div>

                <div id={style.infodiv}>
                    <h2>Hey, I am Dilshad</h2>
                    <h3>Seeking position to utilize my skills and abilities in the information technology industry that offer
professional growth while being resourceful, innovative and flexible. Entry level position in Software
Development.</h3> 
                </div>
            </section>
        </div>
    )
}
export default Section;