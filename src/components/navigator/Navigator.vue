<template>
  <section class="navigator" id="navigator">
    <form @submit.stop.prevent="addLink()" class="navigator-add-form">
      <div class="contrls">
        <div class="input-contrl">
          <label for="text">Text</label>
          <input type="text" v-model="form.text" name="text">
        </div>

        <div class="input-contrl">
          <label for="text">Link</label>
          <input type="text" v-model="form.link" name="link">
        </div>
      </div>
      <div class="buttons">
        <button type="submit">Add</button>
      </div>
    </form>
    <ul class="links-wrapper">
      <li v-for="link in links" :key="link.uuid">
        <a :href="link.link">{{link.text}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import linkStore from '../../store/links.js'

export default {
  name: 'Navigator',
  data: function () {
    return {
      links: [],
      form: {
        text: '',
        link: ''
      }
    }
  },
  methods: {
    addLink: function () {
      this.links = [...this.links, {
        uuid: this.links.length + 1,
        text: this.form.text,
        link: this.form.link
      }]
      linkStore.save(this.links)

      this.form.text = ''
      this.form.link = ''
    }
  },
  mounted: function () {
    this.links = linkStore.fetch()
    console.log(this.links)
  }
}
</script>

<style lang="scss" scoped>
@import "Navigator.scss";
</style>
