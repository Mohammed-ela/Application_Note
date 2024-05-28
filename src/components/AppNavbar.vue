<template>
  <div class="navbar">
    <!-- btn pour créer une nouvelle note (utilsiation de licon)-->
    <button @click="createNote" class="create-note-button">
      <i class="fas fa-plus"></i> Créer une nouvelle note
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    //on envois un événement pour créer une nouvelle note
    createNote() {
      this.$emit('createNote')
    }
  }
}
</script>
