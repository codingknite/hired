import styled from 'styled-components'
import { COLORS as colors, QUERIES as queries } from '../../styles/rootStyles'

export const Main = styled.main`

    header {
        display: inline-block;
        cursor: pointer;
        .logo-text {
            margin: 1.5rem;
            font-size: 3.5rem;
            font-family: 'Great Vibes';
        }
    }

    .back-button {
        button {
            display: flex;
            justify-content: space-around;
            cursor: pointer;
            padding: 0.8rem;
            margin: 3rem;
            display: flex;
            align-items: center;
            border: none;
            border-radius: 2px;

            .back-arrow {
                margin-right: 1rem;
            }
        }
    }


    @media ${queries.medium} {
        .back-button {
            button {
                margin: 2rem;
                padding: 0.5rem;
                .back-arrow {
                    margin-right: 0.7rem;
                }
            }
        }
    }

    @media ${queries.small} {
        header {
            display: inline-block;
            cursor: pointer;
            .logo-text {
                margin: 1.5rem;
                font-size: 2.5rem;
                font-family: 'Great Vibes';
            }
        }
        .back-button {
            button {
                margin: 1rem;
            }
        }
    }

`

export const TitleSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    line-height: 2rem;

    .title-info {
        align-self: center;
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        

        h1 {
            font-size: 1.75rem;
            font-weight: 800;
            margin-bottom: 2rem;
        }

        .tags {
            display: flex;
            justify-content: space-around;
            width: auto;
            p {
                display: flex;
                align-items: center;
                margin-left: 1rem;
            }
        }
    }

    @media ${queries.large} {
        .title-info {
            width: 100%;
        }
    }

    @media ${queries.medium} {
        margin: 1rem;

        .title-info {
            h1 {
                font-size: 1.375rem;
            }
            .tags {
                p {
                    font-size: 0.9375rem;
                }
            }
        }
    }

    @media ${queries.extrasmall} {

        .title-info {
            .tags {
                p {
                    font-size: 0.875rem;
                }
            }
        }
    }
`

export const Description = styled.section`
    display: flex;
    justify-content: center;

    .container {
        background: ${colors.gray};
        width: 70%;
        align-self: center;
        padding: 2rem;
        display: flex;
        flex-direction: row-reverse;

        .company-info {
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 110px;

            .company-logo {
                width: 100px;
                height: auto;
            }

             p {
                 padding: 1rem;
                 width: auto;
                 text-align: center;
             }
        }

        .job-info {
            width: 80%;
            margin: 1rem;
            line-height: 2rem;

            .description {
                text-align: justify;
            }

            h1 {
                margin: 1rem;
            }
        }
    }

    @media ${queries.large} {
        .container {
            width: 95%;
        }
    }

    @media ${queries.small} {
        .container {
            width: 100%;
            padding: 1rem;
            flex-direction: column;

            .company-info {
                width: 100%;
                align-items: center;
            }

            .job-info {
                width: 90%;
            }
        }
    }
`