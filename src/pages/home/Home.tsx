import React, {useEffect, useState} from "react";
import SiteLayout from "../../layouts/SiteLayout";
import {Col, Container, Row} from "react-bootstrap";
import './home.scss';
import BreedsList from "../../components/breeds-list/BreedsList";
import ImagesList from "../../components/images-list/ImagesList";
import BreedsService from "../../services/BreedsService";
import IBreed from "../../types/IBreed";
import IAppState from "../../types/IAppState";
import {saveBreeds} from "../../redux/breeds/BreedsActions";
import {connect} from "react-redux";
import Lottie from "react-lottie";
import {animationOptions} from "../../utils/Consts";

interface IProps{
    breeds:IBreed[],
    saveBreeds: saveBreeds;
}
function Home(props:IProps){
    const [loading,setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true)
        BreedsService.fetchAll().then(x=>{
            props.saveBreeds(x);
        })
        .catch(e=>console.log(e))
        .finally(()=>setIsLoading(false))
    },[])
    return(
        <SiteLayout>
            <Container className={'main-container'}>
               <Row className={'main-row'} hidden={loading}>
                   <Col sm={5} md={4} lg={3} xl={2} xxl={2} className={'breed-list-col'}>
                        <BreedsList />
                   </Col>
                   <Col sm={7} md={8} lg={9} xl={10} xxl={10} className={'images-list-col'}>
                        <ImagesList/>
                   </Col>
               </Row>
                <Row className={'main-loader'} hidden={!loading}>
                    <Lottie
                        options={animationOptions}
                        height={200}
                        width={200}
                    />
                </Row>
            </Container>
        </SiteLayout>
    )
}
function mapStateToProps(state: IAppState) {
    return {
        breeds: state.breedState.breeds,
    };
}
const mapDispatchToProps = {
    saveBreeds: saveBreeds,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
