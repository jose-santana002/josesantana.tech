import React, { Component } from "react";
import styles from '../styles/PopUp.module.css'

export default class PopUp extends Component {
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div>
            <div className={styles.body}></div>
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={this.handleClick}>
                            &times;
                        </span>
                        <h3 className={styles.title}>Credits</h3>
                        <p className={styles.subtitle}>A huge thanks to the following!</p>
                        <p className={styles.text}>Thank you <span className={styles.link}><a target="_blank" href="https://www.fiverr.com/james_simple_3d?source=order_page_user_message_inner_link">james_simple_3d</a></span> for the custom character model!</p>
                        <p className={styles.text}>Thank you Glowbox 3D for the awesome <span className={styles.link}><a target="_blank" href="https://skfb.ly/6WPGM">"Computer Desk"</a></span> model, licensed under <span className={styles.link}><a target="_blank" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution</a></span>.</p>

                        <p className={styles.text}>Website was built by Jose Santana using React, NextJS, and ThreeJS. Hosted using AWS.</p>
                    </div>
                </div>
            </div>
        );
    }
}
