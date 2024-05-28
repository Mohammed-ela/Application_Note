<template>
  <div class="app-container">
    <Navbar @createNote="createNote" />
    <div class="content">
      <div class="sidebar">
        <!-- Passe ID de la note sélectionnée -->
        <Sidebar
          @noteSelected="selectNote"
          @deleteNote="deleteNote"
          :notes="notes"
          :selectedNoteId="selectedNote ? selectedNote.id : null"
        />
      </div>
      <div class="main-content">
        <!-- Composant pour afficher et éditer une note -->
        <NoteDetail v-if="selectedNote" :note="selectedNote" @noteUpdated="updateNote" />
        <!-- Message affiché lorsqu'aucune note n'est sélectionne -->
        <div v-else class="no-note-selected">
          <p>
            Sélectionnez une note pour la visualiser ou cliquez sur "Créer une nouvelle note" pour
            en ajouter une.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Importation des composants nécessaires
import Navbar from './components/AppNavbar.vue'
import Sidebar from './components/Sidebar.vue'
import NoteDetail from './components/NoteDetail.vue'

export default {
  // on selectionne les composants a importés
  components: {
    Navbar,
    Sidebar,
    NoteDetail
  },
  data() {
    return {
      // on charge des notes depuis le localStorage
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      selectedNote: null // la note sélectionnée
    }
  },
  methods: {
    // sélectionner une note
    selectNote(note) {
      this.selectedNote = note
    },
    // créer une nouvelle note
    createNote() {
      const newNote = {
        id: Date.now().toString(),
        title: 'Nouvelle Note',
        content: '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
      this.notes.push(newNote)
      localStorage.setItem('notes', JSON.stringify(this.notes)) // save dans le localStorage
      this.selectNote(newNote)
    },
    // mettre à jour une note
    updateNote(updatedNote) {
      const index = this.notes.findIndex((note) => note.id === updatedNote.id)
      if (index !== -1) {
        this.notes.splice(index, 1, updatedNote)
        localStorage.setItem('notes', JSON.stringify(this.notes)) // Maj dans le localStorage
      }
    },
    // supprimer une note
    deleteNote(noteId) {
      this.notes = this.notes.filter((note) => note.id !== noteId)
      localStorage.setItem('notes', JSON.stringify(this.notes)) // Maj dans le localStorage
      if (this.selectedNote && this.selectedNote.id === noteId) {
        this.selectedNote = null
      }
    }
  }
}
</script>
