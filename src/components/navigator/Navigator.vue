<template>
  <section class="navigator" id="navigator">
    <form @submit.stop.prevent="handSumit()" class="navigator-add-form">
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
        <button type="submit" v-if="form.createdModeIndex === undefined">Add</button>
        <button type="submit" v-else>Edit</button>
      </div>
    </form>
    <ul class="links-wrapper">
      <li v-for="(link,index) in links" :key="link.uuid" v-dragging="{item:link,list:links,group:'links'}">
        <a @click.prevent="directTo(link.link)" v-if="!!link.link" :href="link.link">{{link.text}}</a>
        <span v-else>{{link.text}}</span>
        <v-icon small @click="enableEditMode(link,index)" class="icon-edit">edit</v-icon>
        <v-icon small @click="deleteLink(link)" class="icon-delete">delete</v-icon>
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
        link: '',
        createdModeIndex:undefined
      }
    }
  },
  methods: {
    handSumit: function(){
      if(this.form.createdModeIndex === undefined){
        this.addLink()
      }else{
        this.editLink()
      }
    },
    addLink: function () {
      this.links = [
        ...this.links,
        {
          uuid: this.links.length + 1,
          text: this.form.text,
          link: this.form.link
        }
      ]
      linkStore.save(this.links)

      this.form.text = ''
      this.form.link = ''
    },
    editLink: function () {
      const currentLink = this.links[this.form.createdModeIndex]
      currentLink.text = this.form.text
      currentLink.link = this.form.link

      this.links = [
        ...this.links
      ]
      linkStore.save(this.links)
    
      this.quitEditMode()
    },
    enableEditMode(link,index){
      this.form.text = link.text
      this.form.link = link.link
      this.form.createdModeIndex = index
    },
    quitEditMode(){
      this.form.text = ''
      this.form.link = ''
      this.form.createdModeIndex = undefined
    },
    deleteLink (link) {
      this.links = [
        ...this.links.filter(current => current.uuid !== link.uuid)
      ]
      linkStore.save(this.links)
    },
    directTo (link) {
      window.open(link)
    }
  },
  mounted: function () {
    this.links = linkStore.fetch()

    this.$dragging.$on('dragged', ({ value }) => {
        if(value.group === 'links'){
          this.links = value.list
          linkStore.save(this.links)
        }
      })
  }
}
</script>

<style lang="scss" scoped>
@import "Navigator.scss";
</style>
