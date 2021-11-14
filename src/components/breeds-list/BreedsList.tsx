import React, { useEffect, useState } from "react";
import './BreedsList.scss';
import IBreed from "../../types/IBreed";
import BreedsListItem from "../breed-list-item/BreedListItem";
import IAppState from "../../types/IAppState";
import { connect } from "react-redux";
import { setSelectedBreeds } from "../../redux/breeds/BreedsActions";
import classNames from "classnames";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps{
    breeds:IBreed[],
    selected?:IBreed
    setSelectedBreeds:setSelectedBreeds
}
function BreedsList(props:IProps){
    const [showMenu,setShowMenu] = useState(false);
    const setCurrentBreed = (breed:IBreed)=>{
        props.setSelectedBreeds(breed);
    }
    useEffect(()=>{
        setShowMenu(false);
    },[props.selected])
    return(
        <div className={'breed-list-continer'}>
            <div onClick={()=>setShowMenu(!showMenu)} className='menu-button'>
                <FontAwesomeIcon color={'#000'} size={'lg'} icon={faBars} />
            </div>
            <div className={classNames({'breed-list':!showMenu,'breed-list-menu':showMenu})}>
                {props.breeds.map(x=>{
                    return (
                        <BreedsListItem breed={x} onClick={setCurrentBreed} />
                    )
                })}
            </div>
        </div>
    )
}
function mapStateToProps(state: IAppState) {
    return {
        breeds: state.breedState.breeds,
        selected:state.breedState.selected
    };
}
const mapDispatchToProps = {
    setSelectedBreeds: setSelectedBreeds,
};
export default connect(mapStateToProps, mapDispatchToProps)(BreedsList);
