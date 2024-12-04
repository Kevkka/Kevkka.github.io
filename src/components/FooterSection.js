import React from 'react';
import styles from './FooterSection.module.css';

const FooterSection = () => {
    return (
        <footer className={styles.footer}>
            <h2> Cia galejo buti jusu reklama</h2>
            <ul className={styles.ul}>
                    <a href='/'>Home</a>
                    <br />
                    <a href='/movies'>Movies</a>
                    <br />
                    <a href='/series'>Series</a>
                    <br />
                    <a href='/news'>News</a>
            </ul>
        </footer>
    );
};

export default FooterSection;