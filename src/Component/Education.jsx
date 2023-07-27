import img from "./img1/dil.png"
import style from "./education.module.css"
const Education=()=>{
    return(
        <div>
            <section id={style.main}>
                <div id={style.imgi}>
                    <img src={img} alt="" />
                </div>
                <div id={style.info}>
                    <h2 id={style.hed}> QUALIFIACTION</h2>
                    <h3 className={style.subhed}>1. Highest Qualification:-</h3>
                    <hr />
                      <p>I did Completed B.tech with Speacilization Mecahnical Engineering from Rakshpal Bahadur College of Engineering & Technology , in Year 2022.</p> 
                      <h3 className={style.subhed}>2. Intermidiate:-</h3>
                      <hr />
                      <p>I did Completed Intermidiate from S.S INTER COLLEGE , in Year 2018.</p>
                      <h3 className={style.subhed}>3. High School:-</h3>
                      <hr />
                      <p>I did Completed High School from S.S INTER COLLEGE , in Year 2016.</p>
                      <h3 className={style.subhed}>4. IT-Skills:-</h3>
                      <hr />
                      <p>1.CORE-JAVA 2.SQL 3.MYSQL 4.HTML 5.CSS 6.JAVASCRIPT 7.HIBERNATE 8.JDBC 9.SERVLET 10.REACT-JS</p>
                      

                    
                </div>
            </section>
        </div>
    )
}
export default Education;