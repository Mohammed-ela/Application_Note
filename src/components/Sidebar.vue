<template>
  <div>
    <!-- Liste des notes (coté gauche)-->
    <div
      v-for="note in notes"
      :key="note.id"
      :class="['note-item', { 'selected-note': note.id === selectedNoteId }]"
      @click="selectNote(note)"
    >
      <div class="note-title"><i class="fas fa-sticky-note"></i> {{ note.title }}</div>
      <button @click.stop="deleteNote(note.id)" class="delete-note-button">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: Array,
    selectedNoteId: String // on passe l'id de la note
  },
  methods: {
    // on envois un événement pour sélectionner une note
    selectNote(note) {
      this.$emit('noteSelected', note)
    },
    // on envois un événement pour delete une note
    deleteNote(noteId) {
      this.$emit('deleteNote', noteId)
    }
  }
}
</script>
