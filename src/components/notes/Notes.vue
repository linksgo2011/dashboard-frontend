<template>
  <section class="notes" id="notes">
    <ul class="tabs">
      <li
        v-for="note in this.notes"
        :key="note.uuid"
        @click="switchTab(note.index)"
        :class="{active:(tabIndex == note.index)}"
      >
        {{note.tabName}}
      </li>
    </ul>

    <textarea
      class="stick"
      cols="30"
      rows="10"
      placeholder="You can put your notes here temporarily!"
      v-model="currentNote.text"
    ></textarea>
  </section>
</template>

<script>
export default {
  name: 'Notes',
  data: () => {
    return {
      tabIndex: 0,
      notes: [
        {
          index: 0,
          tabName: 'default',
          uuid: '1212121212',
          text: 'Default '
        },
        {
          index: 1,
          tabName: 'default',
          uuid: '12',
          text: 'Default textfs'
        }
      ]
    }
  },
  computed: {
    currentNote: function () {
      return this.notes.find(item => item.index == this.tabIndex)
    }
  },
  methods: {
    switchTab: function (index) {
      this.tabIndex = index
    }
  }
}
</script>
<style lang="scss" scoped>
@import "Notes.scss";
</style>
