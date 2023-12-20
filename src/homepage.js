import React from 'react';

function HomePage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Firebase Project</h1>
            <button style={styles.button}>Se connecter à Google</button>
        </div>
    );
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f7f7f7',
    },
    heading: {
        color: '#333',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

export default HomePage;
