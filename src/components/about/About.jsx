/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import "./about.css"
import Deadlift from "../../images/deadlift2.jpg"
import DownChevron from "../../svg/DownChevron";

const chevronwrap = css`
    display: flex;
    width: 5vh;
    height: 97vh;
    animation: bounce 4s ease-in-out infinite;

    @media screen and (max-width: 391px){
        position: absolute;
        height: 100vh;
        align-items: end;
        display: none;
    }
`

const chevronwrap2 = css`
    display: flex;
    width: 5vh;
    height: 97vh;
    animation: bounce 4s ease-in-out infinite;
    display: none;

    @media screen and (max-width: 391px){
        position: absolute;
        height: 100vh;
        align-items: end;
        display: inline-block;
    }
`

function About(){

    return(

    <div id="about" className="container">
        <div css={chevronwrap}>
                    <a href="#contact">
                        <DownChevron/>
                    </a>
                </div>
        <div className="container-left">
            <div className="card bg"></div>
            <div className="card">
                <img src={Deadlift} 
                alt="Me deadlifting!" 
                className="card-img" />
            </div>
        </div>
        <div className="container-right">
            <h1 className="title">About Me</h1>
            <p className="description">
                I'm finishing up my last year at Oregon State while also working as a developer for the University.
                I use Python more than any other language at work, either on its own or alongside some data processing 
                frameworks like Pandas when needed.
            </p>
            <p className="description">
            When I'm not in class or working, fitness and especially lifting are very important to me. 
                I place a lot of value on staying in shape (even though I hate doing cardio) 
                and may even attempt to compete at a powerlifting meet in the future!
            </p>
                
        </div>
    </div>
    )
}

export default About;