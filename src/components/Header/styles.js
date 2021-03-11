import styled from 'styled-components'
import { COLORS as colors, QUERIES as queries } from '../../styles/rootStyles'
import banner from '../../img/banner.webp'

export const HeaderSection = styled.header`
    .header-info {
        min-height: 55vh;
        max-width: 100%;
        display: flex;
        justify-content: center;
        background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
        url(${banner});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        color: ${colors.white};

        h1 {
            position: absolute;
            top: 0;
            left: 0;
            margin: 2rem;
            font-family: 'Great Vibes', cursive;
            font-size: 3.125rem;

        }

        h2 {
            align-self: center;
            width: 80%; 
            text-align: center;
            font-family: 'Bebas Neue', sans-serif;
            font-size: 2.5rem;
        }
    }

    @media ${queries.medium} {
        .header-info {
            h1 {
                font-size: 2.1875rem;
                margin: 1rem;
            }

            h2 {
                width: 90%;
                font-size: 2rem;
            }
        }
    }
`