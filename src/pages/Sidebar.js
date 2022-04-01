/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Sidebar(){

    const sideStyles = css`
    display: flex;
    color: white;
    background-color:gray;
    position: fixed;
    height: 100vh;
    width: 290px;
    background-color: rgb(0,1,0);

    @media screen and (max-width: 1400px) {
        display: none;
    }
  `;


    return(
        <div css={sideStyles}>some text</div>
    )
}

export default Sidebar;