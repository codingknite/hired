import styled from 'styled-components'
import { COLORS as colors, QUERIES as queries } from '../../styles/rootStyles'


export const MainContainer = styled.main`
    
    border: 1px solid black;
    background: ${colors.gray};
    margin: 1rem 5rem 1rem 5rem;
    display: flex;


    .logo {
        display: flex;
        align-items: center;
        margin: 1rem 0.8rem 0.8rem 0.8rem;
        border-radius: 3px;
        min-height: 110px;

        img {
            width: 100px;
            height: auto;
        }
    }

    .job-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 70%;
        padding: 0.3rem;
    }

    .job-date {
        align-self: center;
        justify-self: flex-end;
    }

    .job-tags {
        grid-area: tags;
        display: flex;

        .cat {
            border: 1px solid black;
            padding: 2px;
            margin: 0rem 1rem 0.5rem 0rem;
        }
    }

    @media ${queries.small} {
        margin: 1rem 1rem 1rem 1rem;

        .logo {
            min-height: 100px;

            img {
                width: 50px;
                border-radius: 2px;
            }
        }
        
        .job-info {
            width: 60%;
        }
    }
`
