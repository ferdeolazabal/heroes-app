import React, { useMemo } from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../Heroes/HeroCard'
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
    
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search)

    const [ formValues, handleInputChange ] = useForm( {
        find: q
    } );
    const { find } = formValues;

    // const heroresFiltered = getHeroesByName( find );
    
    // const heroresFiltered = useMemo(getHeroesByName( find ), [find]);
    const heroresFiltered = useMemo(() => getHeroesByName( q ), [q]);

    const handleSearch  = (e) => {
        e.preventDefault();
        history.push(`?q=${find}`)
    }


    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className='row'>
                
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={ handleSearch }>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Find your hero'
                            name='find'
                            onChange={ handleInputChange }
                            value={ find }
                            autoComplete='off'
                        />
                        <button
                            type='submit'
                            className='btn mt-2 btn-outline-primary btn-block form-control'
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                
                    <h4>Results</h4>
                    <hr/>
                    
                    {
                        (q === '') 
                            && 
                            <div className='alert alert-info'>
                                Search a hero...
                            </div>
                    }

                    {
                        (q !== '' && heroresFiltered.length === 0)
                            &&
                            <div className='alert alert-danger'>
                                There are no results for { q }...
                            </div>
                    }

                    {
                        
                        heroresFiltered.map( hero => (
                            <HeroCard
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }
                
                </div>

            </div>




        </div>
    )
}
