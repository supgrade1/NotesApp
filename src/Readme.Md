# Project Title
NotesApp

The Notes App is a simple and responsive React application that allows users to create, view, and delete notes. It handles loading, empty, and error states effectively.

# Prerequisites
Node.js version 18+ (recommended)

# Install Dependencies
npm install

# Start Development Server
npm run dev

# The app will run locally on:
local host

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
***************************************************COMPONENT BREAKDOWN**************************************************************************

*************************************************************************App.jsx***************************************************************

1.Root component of the application

2.Holds the notes state

Manages:

1.Loading state (simulated API call)

2.Empty state

3.Add and delete note logic

4.Passes data and handlers to child components



*******************************************************Note.jsx*********************************************************************************

1.Contains the note input form

Manages local state for:

1.title

2.description

3.error

4.Performs form validation and displays inline error messages

5.Sends new note data to App via callback

**************************************************************************NotesList.jsx******************************************************

1.Displays the list of all notes

2.Shows total note count

3.Iterates over notes and renders individual NoteCard components

*********************************************************NoteCard.jsx***************************************************************************

1.Displays a single note

2.Shows note title and description

3.Provides delete functionality for each note

*********************************************************************State Explanation & Data Flow******************************************


Global State (App.jsx):

notes: Stores all notes

loading: Controls loading UI state

Local State (Note.jsx):

Handles form inputs and validation errors

Data Flow:

User submits note in Note.jsx

Note data is sent to App.jsx using onAddNote

App.jsx updates notes state

Updated notes are passed to NotesList

Delete action flows upward from NoteCard → NotesList → App.jsx

This follows unidirectional data flow, as recommended in React.


**********************************************************Assumptions & Limitations*************************************************************

Notes are stored in memory only (no backend or database)

Page refresh will clear all notes

Loading state is simulated using setTimeout

No edit functionality implemented (add & delete only)

Styling is kept minimal to focus on logic and UX clarity



************************************************************************************UX Considerations Implemented******************************

Loading state on initial render

Empty state when no notes are present

Inline form validation errors (no browser alerts)

Clean conditional rendering

**************************************************************************************TECH STACK**********************************************
React (Functional Components + Hooks)

Vite

JavaScript (ES6)

CSS

*************************************************************************************AUTHOR****************************************************
SHUBHAM YADAV