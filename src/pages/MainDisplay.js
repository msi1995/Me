
/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import Introduction from '../components/intro/Introduction';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';

function MainDisplay() {
    const bodyStyle = css`
        padding-left: 190px;
        @media screen and (max-width: 1400px) {
            padding-left: 0px;
        }
    `;

    return (
        <div css={bodyStyle}>
            <Introduction />
            <About />
            <Contact/>
        </div>
    );
}

export default MainDisplay;