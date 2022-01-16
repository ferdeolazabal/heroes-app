import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


export const HeroScreen = ({ history }) => {
    
    const { heroeId } = useParams();
    
    // const hero = getHeroById( heroeId ); 
    const hero = useMemo(() => getHeroById( heroeId ), [heroeId]);


    if ( !hero ) {
        return <Redirect to="/" /> ;
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const handleReturn = () => {
        if( history.length <= 2 ) {
            history.push('/');
        } else {
            history.goBack();
        }
    }


    return (
        <div className="row mt-5">
            <div className="col-md-4">
                <img 
                    src={`/assets/heroes/${heroeId}.jpg`} 
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero} 
                />
            </div>
            <div className="col-md-8 text-center animate__animated animate__fadeInDown">
                <h2>{superhero}</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Name: </b> { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: </b> { first_appearance }
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> { publisher }
                    </li>
                </ul>
                <br />

                <h5>Characters</h5> 
                <p>{ characters }</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    <BsFillArrowLeftCircleFill />
                    <span> Return</span>
                </button>


            </div>


            
        </div>
    );
};
