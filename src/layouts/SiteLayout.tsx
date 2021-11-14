import React from "react";
import '../styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
interface IProps extends React.HTMLAttributes<HTMLDivElement>{

}
export default function SiteLayout(props:IProps){
    return(
        <div className={'site-layout'}>
            {props.children}
        </div>
    )
}
