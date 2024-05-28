<script>
export default {
  data() {
    return {
      // Chargement des notes qui sont dans le localstorage
      notes: JSON.parse(localStorage.getItem('notes')) || []
    }
  },
  methods: {
    // créer une nouvelle note avec les params
    createNote() {
      const newNote = {
        id: Date.now().toString(),
        title: 'Nouvelle Note',
        content: '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
      this.notes.push(newNote)
      localStorage.setItem('notes', JSON.stringify(this.notes)) // saves dans le localStorage
    }
  }
}
</script>
