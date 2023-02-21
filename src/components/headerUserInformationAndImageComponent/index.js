import React from 'react';
import { Row, Col} from 'react-bootstrap';
import foto from './../../assets/foto.png';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import './style.scss';

const HeaderImage = () => {
    return (
        <Row className="header_background_and_size">
            <Col xs={12} sm={12} md={5} lg={4} >
                <img src={foto} className="user_image_formatter" alt="Imagem pessoal, Herrison" width="240" height="240"/>
            </Col>
            <Col xs={12} sm={12} md={5} lg={8} className="text_container_header"> 
                    <div className="header_user_name">Herrison Féres</div>
                    <div className="header_user_degree"> Analista de Sistemas / Mobile Software Engineer</div>
                    <Col xs={12} md={8} className="header_user_address_info_container">
                        <div>{(new Date().getFullYear() - 1997)} anos</div>
                        <div>Valentim Gentil - São Paulo</div>
                        <div>Herrisonf_nascimento@hotmail.com</div>
                    </Col>
                    <div className="social_media_container">
                        <a href="https://www.linkedin.com/in/herrison-f%C3%A9res-423023103/"> 
                            <SiLinkedin className="linkedin_icon" />
                        </a>
                        <a href="https://github.com/HerrisonF">
                            <SiGithub className="github_icon"/>
                        </a>
                    </div>
            </Col>
        </Row>
    );
}

export default HeaderImage;