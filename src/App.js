/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main } from './Main';
import { Sidebar } from './Sidebar';

import './App.css';

import Noteful from './Noteful';
import Folders from './Folders';
import Notes from './Notes';
import store from './store.js';

// Main Route
  // 1. Noteful
  // 1. Folders
  // 2. FolderForm*
  // 1. Notes
  // 2. NoteForm*
// Folder Route
  // 1. Noteful
  // 1. Folders-SelectFolder
  // 2. FolderForm*
  // 1. Notes-FilteredNotes
  // 2. PrintNote
  // 2. NoteForm*
// Note Route
  // Noteful
  // InsideFolder
  // NoteInfo
  
class App extends Component {
  state = {
    notes: null,
    folders: null,
    error: null
  };

  componentDidMount() {
    fetch('http://localhost:9090/folders')
    .then(res => res.ok ? res.json() : Promise.reject('Cannot get folders'))
    .then(folders => this.setState({folders}))
    .catch(error => this.setState({error}));

    fetch('http://localhost:9090/notes')
    .then(res => res.ok ? res.json() : Promise.reject('Cannot get notes'))
    .then(notes => this.setState({notes}))
    .catch(error => this.setState({error}));

    
  }
  

  render() {
    console.log(this.state.folders, this.state.notes);
    console.log(this.state.error);
    return (
      <>
        <Noteful />
        <Main/>
        <Sidebar/>
        <Route exact path='/' render={() => <Folders folders={this.state.folders}/>} />
<Notes notes={this.state.notes} />  
        </main>
        
      </>
    );
  }
}


export default App;

