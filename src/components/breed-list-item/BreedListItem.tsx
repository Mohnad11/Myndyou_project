import React, { MouseEventHandler } from "react";
import './BreedsListItem.scss';
import IBreed from "../../types/IBreed";
interface IProps{
    breed: IBreed;
    onClick: Function;
}
export default function BreedsListItem(props:IProps){
    const  item = props.breed;
    return(
        <div onClick={(e) =>  props.onClick(item)} className={'breed-item-container'}>
            <span className={'breed-item-text'}>{item.name}</span>
        </div>
    )
}
