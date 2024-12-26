import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="customFooter-pc">
                <a href="https://github.com/sanketrathod07?tab=repositories" className="customFooter-github" target="_blank" rel="noreferrer">
                    <ion-icon className="fa fa-github fa-3x" aria-hidden="true" name="logo-github" ></ion-icon>
                </a>
                <a href="https://leetcode.com/u/sanketrathod/" className="customFooter-codepen" target="_blank" rel="noreferrer">
                    <ion-icon className="fa fa-code fa-3x" aria-hidden="true" name="logo-codepen"></ion-icon>
                </a>
                <div className="customFooter-copyright">
                    <p>Made by<a href="https://www.linkedin.com/in/sanketrathod757/" target="_blank" rel="noreferrer"> <span>&nbsp;Sanket Rathod&nbsp;</span></a></p>
                </div>
            </div>

            <div className="customFooter-mobile">
                <a href="https://github.com/sanketrathod07?tab=repositories" className="customFooter-github" target="_blank" rel="noreferrer">
                    <ion-icon className="fa fa-github fa-3x" aria-hidden="true" name="logo-github"></ion-icon>
                </a>
                <a href="https://leetcode.com/u/sanketrathod/" className="customFooter-codepen" target="_blank" rel="noreferrer">
                    <ion-icon className="fa fa-code fa-3x" aria-hidden="true" name="logo-codepen"></ion-icon>
                </a>
                <div className="customFooter-copyright">
                    <p>@Made by <span>&nbsp;Sanket Rathod&nbsp;</span></p>
                </div>
            </div>
        </>
    );
};

export default Footer;
