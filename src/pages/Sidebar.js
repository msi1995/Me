/** @jsxImportSource @emotion/react */
import Portal from "../images/aperture2.png"

import { css } from '@emotion/react';
import { grey } from '@mui/material/colors';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import AboutIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Sidebar() {

    const bodyStyles = css`
        display: flex;
        flex-direction: column;
        font-family: 'Titillium Web', sans-serif;
        position: fixed;
        background-color: black;
        height: 100vh;
        width: 300px;
        @media screen and (max-width: 480px) {
            display: none;
        }
    `;

    const headerStyles = css`
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `;

    const titleStyles = css`
        font-weight: bold;
        font-size: 1.5em;
        color: white;
        margin-bottom: 2vh;
    `;

    const imageStyles = css`
        height: 150px;
        width: 150px;
        border: 10px solid #2C2F3F;
        margin-top: 2.5vh;
        margin-bottom: 2vh;
        border-radius: 50%;
    `;

    const iconContainerStyles = css`
        display: flex;
        flex-direction: row;        
    `;

    const iconStyles = css`
        background: #212431;
        padding: 5px;
        border-radius: 50%;
        margin-left: 5px;
        margin-right: 5px;
        &:hover{
            background: #109DDD;
        }
    `;

    const menuStyles = css`
        display: flex;
        flex-direction: column;
        flex: 2;
        margin-top: 35px;
    `;

    const menuItemStyles = css`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 4vh;
        color: grey;
        transition:color .25s;
        &:hover{
            color: white;
            .icon{
                color: #109DDD;
            }
        }
        text-decoration: none;
    `;
    
    const menuIconStyles = css`
        color: grey;
        transition: color .25s;
        &:hover{
            color: #109DDD;
        }
    `;
        
    const menuTextStyles = css`
        list-style-type: none;
        margin-left: 10px;
    `;

    const footerStyles = css`
        margin-top: auto;
        color: white;
        margin-left: 20px;
        margin-right: 20px;
        font-size: .85em;
        a{
            color: white;
        }
    `;

    return (
        <div css={bodyStyles}>
            <div css={headerStyles}>
                <img css={imageStyles} src={Portal}/>
                <p css={titleStyles}>Doug Lloyd</p>
                <div css={iconContainerStyles}>
                    <div css={iconStyles}>
                        <a href='https://github.com/msi1995' target="_blank"><GitHubIcon  style={{color: "white"}} /></a>
                    </div>
                    <div css={iconStyles}>
                        <a href='https://www.linkedin.com/in/doug-lloyd-29b149186/' target="_blank"><LinkedInIcon  style={{color: "white"}} /></a>
                    </div>
                </div>
            </div>
            <ul css={menuStyles}>
                <a href='#home' css={menuItemStyles}>
                    <HomeIcon className='icon' css={menuIconStyles} fontSize="large" sx={{ color: grey[500] }} />
                    <li css={menuTextStyles}>Home</li>
                </a>
                <a href='#about' css={menuItemStyles}>
                    <AboutIcon className='icon' css={menuIconStyles} fontSize="large" sx={{ color: grey[500] }} />
                    <li css={menuTextStyles}>About</li>
                </a>
                <a href='#contact' css={menuItemStyles}>
                    <EmailOutlinedIcon className='icon' css={menuIconStyles} fontSize="large" sx={{ color: grey[500] }} />
                    <li css={menuTextStyles}>Contact</li>
                </a>
            </ul>
            <p css={footerStyles}>Powered by <a href='https://reactjs.org/'>React</a></p>
        </div>
    );
}

export default Sidebar;