import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { Button, Icon } from 'semantic-ui-react'


import Image from '../images/show-time-logo-large.png';
import './LoginPage.css';

class LoginPage extends React.Component {

    onAuthButtonClick = () => {
        axios.get('/login/github')
            .then(response => {
                console.log("response",response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="landing-page">
                <div className="landing-page__content">
                    <div className="title">
                        <img alt="showtime-logo" className="showtime-logo-main" src={Image}></img>
                    </div>
                    <div className="auth-buttons__div">
                        <Button color='facebook' size='large' className="facebook-auth__button">
                            <Icon name='facebook' />
                            Facebook
                        </Button>
                        <a href="http://localhost:3001/login/github">
                        <Button color='green' size='large' className="github-auth__button">
                            <Icon name='github' />
                            GitHub
                        </Button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage