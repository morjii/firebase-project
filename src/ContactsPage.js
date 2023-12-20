import React, { useState } from 'react';

function ContactsPage() {
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState({ nom: '', prenom: '', numero: '' });

    const handleInputChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setContacts([...contacts, newContact]);
        setNewContact({ nom: '', prenom: '', numero: '' });
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2>Ajouter un Contact</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        name="nom"
                        value={newContact.nom}
                        onChange={handleInputChange}
                        placeholder="Nom"
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="prenom"
                        value={newContact.prenom}
                        onChange={handleInputChange}
                        placeholder="Prénom"
                        style={styles.input}
                    />
                    <input
                        type="tel"
                        name="numero"
                        value={newContact.numero}
                        onChange={handleInputChange}
                        placeholder="Numéro de téléphone"
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Ajouter</button>
                </form>
            </div>
            <div style={styles.contactsContainer}>
                <h2>Contacts</h2>
                <ul style={styles.contactsList}>
                    {contacts.map((contact, index) => (
                        <li key={index} style={styles.contactItem}>
                            {contact.nom} {contact.prenom} - {contact.numero}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// Styles
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    formContainer: {
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        margin: '5px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        width: '200px',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    },
    contactsContainer: {
        marginTop: '20px',
    },
    contactsList: {
        listStyle: 'none',
        padding: 0,
    },
    contactItem: {
        margin: '5px',
    }
};

export default ContactsPage;
