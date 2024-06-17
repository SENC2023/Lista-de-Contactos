import { createContext } from 'react';

const Context = createContext();

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContacts: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Juan/contacts');
					if (!response.ok) {
						throw new Error('Failed to fetch contacts');
					}
					const data = await response.json();
					console.log('Contacts data', data);
					setStore({ contacts: data.contacts || [] });  // Si no hay contactos, establecemos un arreglo vacío
				} catch (error) {
					console.error('Error loading contacts', error);
				}
			},
			addContact: async (newContact) => {
				try {
					// Verificar que los campos no estén vacíos
					if (!newContact.name || !newContact.email || !newContact.phone || !newContact.address) {
						console.log('Campos recibidos:', newContact);
						throw new Error('Todos los campos son obligatorios');
					}
			
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Juan/contacts", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							name: newContact.name,
							email: newContact.email,
							phone: newContact.phone,
							address: newContact.address
						})
					});
					if (!response.ok) {
						throw new Error('Failed to add contact');
					}
					const data = await response.json();
					setStore({ contacts: [...getStore().contacts, data] });
				} catch (error) {
					console.error('Error adding contact', error);
				}
			},
			updateContact: async (id, updatedContact) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Juan/contacts/${id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(updatedContact)
					});
					if (!response.ok) {
						throw new Error('Failed to update contact');
					}
					const data = await response.json();
					const updatedContacts = getStore().contacts.map(contact => {
						if (contact.id === id) {
							return { ...contact, ...data };
						}
						return contact;
					});
					setStore({ contacts: updatedContacts });
				} catch (error) {
					console.error('Error updating contact', error);
				}
			},
			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Juan/contacts/${id}`, {
						method: 'DELETE'
					});
					if (!response.ok) {
						throw new Error('Failed to delete contact');
					}
					const updatedContacts = getStore().contacts.filter(contact => contact.id !== id);
					setStore({ contacts: updatedContacts });
				} catch (error) {
					console.error('Error deleting contact', error);
				}
			}
		}
	};
};

export { Context };

export default getState;