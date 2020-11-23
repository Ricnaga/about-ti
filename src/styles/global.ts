import styled, {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

#root{
    --color-all-text: #4A4848;
    
}

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    width:100vw;

    background:linear-gradient(to bottom right, #00ACD6, #02FFC9) no-repeat fixed;

    text-align:justify;
    font:16px 'Acme', sans-serif;
    color:var(--color-all-text);
}
`;

export const Buttons = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    padding:0.5em;

    button{
        text-align:center;
        background:linear-gradient(to bottom right, #02FFC9, #00ACD6);        

        padding:0.2em;
        
    }

    #Dashboard{
        border-radius:1em 0 0 1em;
        transition: opacity 0.2s;
    }

    #Network{
        border-radius:0 1em 1em 0;
    }

    @media(min-width: 760px){
        #Dashboard, #Development, #Network{
            cursor: pointer;
            transition: padding 0.2s;

            &:hover{
                padding:0.4em;
                text-decoration:underline;
                opacity:0.8;
            }
        }
    }
`;