<template>
  <div>
    <!-- Input pour éditer le titre de la note -->
    <input
      type="text"
      v-model="note.title"
      @input="updateTitle"
      ref="title"
      class="editable-title"
    />
    <!-- Textarea pour éditer le contenu de la note -->
    <textarea v-model="note.content" @input="updateContent" class="editable-textarea"></textarea>
    <!-- Affichage des métadonnées de la note -->
    <p>Compteur de mots: {{ wordCount }}</p>
    <p>Créée le: {{ formatDate(note.created_at) }}</p>
    <p>Dernière mise à jour: {{ formatDate(note.updated_at) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    note: Object // Propriété pour passer la note sélectionnée
  },
  mounted() {
    // Focus automatique sur le titre lorsque le composant est monté
    if (this.$refs.title) {
      this.$refs.title.focus()
    }
  },
  computed: {
    // Calcul du nombre de mots dans le contenu de la note
    wordCount() {
      return this.note.content ? this.note.content.trim().split(/\s+/).length : 0
    }
  },
  methods: {
    // Mise à jour du titre de la note
    updateTitle(event) {
      this.note.title = event.target.value
      this.saveNote()
    },
    // Mise à jour du contenu de la note
    updateContent() {
      this.saveNote()
    },
    // Sauvegarde de la note mise à jour
    saveNote() {
      this.note.updated_at = new Date().toISOString()
      this.$emit('noteUpdated', this.note) // Émet un événement pour signaler que la note a été mise à jour
    },
    // Formatage de la date pour un affichage lisible
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
      return new Date(date).toLocaleDateString('fr-FR', options)
    }
  }
}
</script>
