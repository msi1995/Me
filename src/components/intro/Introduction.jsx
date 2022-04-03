/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import "./introduction.css"
import DownChevron from '../../svg/DownChevron';
import Resume from '../../files/Resume.pdf';


const intro = css`
        display: flex;
        height: 95vh;
        @media screen and (max-width: 480px) {
            flex-direction: column;
        }
    `;

const introTitleWrapper = css`
    height: 100%;
    animation: move 12s ease-in-out infinite alternate;
    width: 300px;
    z-index: 2;

    @media screen and (max-width: 480px){
        padding-left: 30px;
    }
`

const introTitleItem = css`
  font-weight: bold;
  height: 50px;
  font-size: 30px;
  color: rgb(41, 174, 251);
  display: flex;
  align-items: center;
`;

const ResumeDesktop = css`
    font-weight: bold;
    height: 50px;
    font-size: 30px;
    color: rgb(41, 174, 251);
    display: flex;
    align-items: center;
    display: flex;

    @media screen and (max-width: 480px) {
        display: none;
}
`;

const ResumeMobile = css`
  font-weight: bold;
  height: 50px;
  font-size: 30px;
  color: rgb(41, 174, 251);
  display: flex;
  align-items: center;
  display: none;

  @media screen and (max-width: 480px) {
      display: flex;
  }
`;

const intro_l_wrapper = css`
    height: 45%;
    width: 100%;
    padding: 50px;
    min-width: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 625px) {
            height: 50% !important;
            padding: 40px;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
`

const chevronwrap = css`
    position: relative;
    text-align: center;
    height: 5vh;
    width: 100%;
    animation: bounce 4s ease-in-out infinite;

    @media screen and (max-width: 450px){
        height: 5vh;
        margin-top: -12vh;
    }
`

function Introduction(){

    return(
        <div className="full-container-i">
        <div id="home" className="intro" css={intro}>
            <div className="intro-l">
                <div className="intro-l-wrapper" css={intro_l_wrapper}>
                    <h2 className="intro-msg">Hello, my name is</h2>
                    <h1 className="intro-name">Doug Lloyd</h1>
                    <div className="intro-title">
                            <div css={introTitleWrapper} onClick={ () => {}}>
                            <a className="resume" href={Resume} download="DougLloyd_Resume">
                                <div css={ResumeMobile}>Hold For Résumé!</div>
                                <div css={ResumeDesktop}>Click For Résumé!</div>
                                <div css={introTitleItem}>OSU Student</div>
                                <div css={introTitleItem}>Software Engineer</div>
                                <div css={introTitleItem}>Python Developer</div>
                                <div css={introTitleItem}>Fitness Enthusiast</div>
                                <div css={ResumeDesktop}>Click For Résumé!</div>
                                <div css={ResumeMobile}>Hold For Résumé!</div>
                            </a>
                            </div>
                    </div>
                    <p className="intro-para">
                        I am a Senior Computer Science student at Oregon State University, graduating in June 2022.
                        I specialize in full-stack development, and have an affinity for working with Python, C++ (my first language), and React.js. I'm always looking for new and interesting technology to learn!
                    </p>
                </div>
            </div>
            <div className="intro-r">
                <div className="i-bg"></div>
                {/* <img src={Portal} className="intro-img" /> */}
            </div>
        </div>
        <div css={chevronwrap}>
                    <a href="#about">
                        <DownChevron/>
                    </a>
                </div>
        </div>
    )
}

export default Introduction