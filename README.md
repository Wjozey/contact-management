# Contact Management Application

## Overview

This project aims to create a simple yet functional web application for contact management. The application allows users to view, add, and delete contacts, which are stored in an Airtable base. The frontend is built using Next.js with TypeScript, styled with Tailwind CSS, and the backend data is managed through Airtable's API.

## Functional Requirements

1. **Contact Management**:
   - View a list of contacts.
   - Add new contacts.
   - Delete existing contacts.

2. **Data Storage**:
   - Store contact data in an Airtable base.
   - Fields for each contact include at least a name and email address.

3. **User Interface**:
   - A clean, responsive user interface using Tailwind CSS.
   - Forms for adding new contacts and buttons for deleting them.

4. **Error Handling**:
   - Display informative error messages for any unsuccessful operations or API calls.

## Non-Functional Requirements

1. **Performance**: The application should load and respond to user actions promptly.
2. **Scalability**: While initially serving a small user base, the app should be scalable to accommodate more users and data.
3. **Security**: Sensitive data, such as API keys, should not be exposed in the client-side code.
4. **Usability**: The application should be user-friendly, with intuitive navigation and clear instructions.

# Architecture Documentation

## High-Level Architecture Overview

The application is structured into two main parts: the frontend and the backend.

- **Frontend**: Built with Reactjs, offering a dynamic and responsive user interface. CSS is used for styling, ensuring a modern look and feel.
- **Backend**: Utilizes Airtable as a backend service. Airtable acts as a database, storing contact information that is accessed and manipulated through its RESTful API.

## Frontend Architecture

1. **Pages**:
   - `index.tsx`: The main page, displaying the list of contacts and including the form to add new contacts.
2. **Components**:
   - `ContactForm.tsx`: A form component for adding new contacts.
   - `ContactList.tsx`: Lists all contacts fetched from Airtable.
   - `ContactCard.tsx`: Represents a single contact in the list, with an option to delete.
3. **Utilities**:
   - `airtable.ts`: Handles API requests to the Airtable backend, including fetching contacts, adding a new contact, and deleting a contact.

## Backend Architecture (Airtable)

1. **Airtable Base**:
   - Contains a table for contacts with fields for names, emails, and other relevant information.
2. **API Integration**:
   - Uses Airtable's REST API for CRUD operations.
   - API requests are authenticated using an API key, securely stored and accessed from environment variables.

## Deployment

- The application is deployed on a cloud platform (e.g., Vercel, AWS Amplify), allowing it to be accessed over the internet.
- Continuous deployment is set up to automatically deploy new versions of the app upon updates to the source code.

## Security Considerations

- API keys and sensitive data are stored in environment variables and not exposed in the frontend code.
- Input validation is implemented to prevent malicious data entry.

## Future Enhancements

- Implement user authentication for personalized contact management.
- Enhance the UI/UX with additional features like contact search and pagination.
