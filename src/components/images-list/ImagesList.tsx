import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import BreedsService from "../../services/BreedsService";
import IAppState from "../../types/IAppState";
import IBreed from "../../types/IBreed";
import { faSync } from '@fortawesome/free-solid-svg-icons'
import loadingAnimation from '../../assets/9629-loading.json'
import Lottie from 'react-lottie';
import './ImagesList.scss';

interface IProps{
    breed?: IBreed;
}
function ImagesList(props:IProps){
    const [images,setImages] = useState<string[]>([]);
    const [loading,setIsLoading] = useState(false);
    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    useEffect(()=>{
        fetchImages();
        
    },[props.breed])
    const fetchImages = ()=> {
        setImages([]);
        setIsLoading(true);
        if(props.breed){
            BreedsService.fetchRandomImages(props.breed.name).then(res=>{
                setImages(res);
            }).finally(()=>{
                setIsLoading(false);
            })
        }
    }
    return(
        <div className={'images-list-continer'} >
            <div hidden={!(images && images.length > 0 && !loading)}> 
                        <div className={'refresh-button'} onClick={fetchImages}>
                            <FontAwesomeIcon color={'#fff'} size={'lg'} icon={faSync} />
                        </div>
                        <Row>
                        {
                            images.map(x=>{
                                return(
                                    <Col className={'breed-image-col'} lg={6} xxl={6} xl={6} md={6}>
                                        <img className={'breed-image'} src={x}/>
                                    </Col>
                                )
                            })
                        }
                        </Row>
            </div>
            <div className={'empty-image-continer'} hidden={props.breed != null}>
                    <h4>please select a breed</h4>
            </div>
            <div className={'empty-image-continer'} hidden={(!loading || !props.breed)}>
                <Lottie 
                    options={animationOptions}
                    height={200}
                    width={200}
                />
            </div>
            
        </div>
    )
}
function mapStateToProps(state: IAppState) {
    return {
        breed: state.breedState.selected,
    };
}

export default connect(mapStateToProps)(ImagesList);