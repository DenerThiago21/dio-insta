import { createGlobalStyle } from "styled-components";
import px2wv from "../utils/px2wv";

export const Global = createGlobalStyle`
    * 
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root
    {
        font-size: ${px2wv(24)};

        @media (min-width 768px)
        {
            font-size: ${px2wv(18)};
        }

        @media (min-width 1024px)
        {
            font-size: ${px2wv(16)};
        }
    }
`;

export default Global;