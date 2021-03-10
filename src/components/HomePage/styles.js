import styled from 'styled-components'
import { COLORS as colors, QUERIES as queries } from '../../styles/rootStyles'


/*
 * Responsove Typography
 */
export const MainContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const JobsSection = styled.section`
    background: ${colors.white};
    width: 60%;
    align-self: center;

    .search-form {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .form  {
            width: 100%;
            padding: 1rem;
            display: flex;

            #keyword,
            #location,
            #jobtype,  
            #search {
                width: 25%;
                padding: 0.8rem;
                border: none;
                border-radius: 2px;
                margin-left: 1rem;
                background: ${colors.gray};
            }

            #search {
                background: ${colors.lightBlue};
                cursor: pointer;

                
            }

            .formik-error {
                color: red;
                list-style: inside;
                text-align: center;
            }
        }
    }

    @media ${queries.large} {
        width: 90%;

        .search-form {
            .form  {
                width: 90%;
                padding: 0.75rem;

                #keyword,
                #location, 
                #jobtype, 
                #search {
                    width: 25%;
                    padding: 0.5rem;
                    margin-left: 0.7rem;
                }
            }
        }
    }

    @media ${queries.medium} {
        .search-form {
            .form  {
                width: 80%;
                flex-direction: column;

                #keyword,
                #location, 
                #jobtype, 
                #search {
                    width: 100%;
                    padding: 1rem;
                    margin-left: 0rem;
                    margin-top: 1rem;
                }
            }
        }
    }

    @media ${queries.small} {
        width: 100%;
        .search-form {
            .form  {
                width: 95%;
                padding: 0.5rem;
                flex-direction: column;

                #keyword,
                #location, 
                #jobtype, 
                #search {
                    width: 100%;
                    padding: 1rem;
                    margin-left: 0rem;
                    margin-top: 1rem;
                }
            }
        }

    }
`

export const DefaultJobs = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    button {
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.7rem 2rem 0.7rem 2rem;
        border-radius: 2px;
        cursor: pointer;
    }
`

export const SearchResults = styled(DefaultJobs)`
    button {
        width: 12%;
    }

    .jobs-not-found {
        width: 100%;
        flex-direction: column;
        text-align: center;
        padding: 0.2rem;
    }

    @media ${queries.small} {
        button {
            width: 30%;
        }

        .jobs-not-found {
        width: 50%;
    }
    }
`