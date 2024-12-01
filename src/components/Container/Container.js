import styles from './Container.module.css';

const Container = ({ children, classes }) => {
    if (!children) {
        return
    }

    return (
        <div className={`${styles.container} ${classes ? classes : ''}`}>
            {children}
        </div>
    )
}

export default Container