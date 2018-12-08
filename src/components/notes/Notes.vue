<template>
  <section class="notes" id="notes">
    <ul class="tabs">
      <li
        v-for="note in this.notes"
        :key="note.uuid"
        @click="switchTab(note.index)"
        :class="{active:(tabIndex === note.index)}"
      >
        {{note.tabName}}
      </li>
      <li alt="add new file">
        <v-icon @click="createNote()" small>control_point</v-icon>
      </li>
    </ul>

    <textarea
      v-if="currentNote"
      class="stick"
      cols="30"
      rows="10"
      placeholder="You can put your notes here temporarily!"
      v-model="currentNote.text"
      @change="handleContentChange"
    ></textarea>
  </section>
</template>

<script>
import notesStorage from '../../store/notes.js'

export default {
  name: 'Notes',
  data: () => {
    return {
      tabIndex: 0,
      notes: []
    }
  },
  computed: {
    currentNote: function () {
      return this.notes.find(item => item.index === this.tabIndex)
    }
  },
  methods: {
    switchTab: function (index) {
      this.tabIndex = index
    },
    handleContentChange: function () {
      notesStorage.save(this.notes)
    },
    createNote: function () {
      const tabIndex = this.notes.length

      this.notes = [
        ...this.notes,
        {
          index: tabIndex,
          tabName: 'note' + (tabIndex + 1),
          text: ''
        }
      ]

      notesStorage.save(this.notes)
    }
  },
  mounted: function () {
    this.notes = notesStorage.fetch()
    if (!this.notes.length) {
      this.createNote()
    }
  }
}
</script>
<style lang="scss" scoped>
@import "Notes.scss";
</style>
