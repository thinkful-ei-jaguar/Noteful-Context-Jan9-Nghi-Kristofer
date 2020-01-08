import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Noteful from './Noteful';
import Folders from './Folders';
import Notes from './Notes';
import store from './store.js';

// Main Route
  // 1. Noteful
  // 1. Folders
  // 2. FolderForm
  // 1. Notes
  // 2. NoteForm
// Folder Route
  // 1. Noteful
  // 1. Folders-SelectFolder
  // 2. FolderForm
  // 1. Notes-FilteredNotes
  // 2. PrintNote
  // 2. NoteForm
// Note Route
  // Noteful
  // InsideFolder
  // NoteInfo
  
class App extends Component {
  state = {
    notes: store.notes,
    folders: store.folders,
  };

  render() {
    return (
      <>
        <Noteful />
        <Folders folders={this.state.folders}/>
        <Notes notes={this.state.notes} />
      </>
    );
  }
}


export default App;

