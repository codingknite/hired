import styled from 'styled-components'
import { COLORS as colors } from '../../styles/rootStyles'

export const HeaderSection = styled.header`

    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap'); 

    height: 50vh;
    background-image: url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100%;
    color: ${colors.white};

    .header-info {
        display: flex;    
        flex-direction: column;
        height: 100%;
    }
    .project-logo { 
        height: 50%;
        font-family: 'Great Vibes';

    }

    .slogan {
        align-self: center;
    }
`