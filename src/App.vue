<template>
  <div id="app">
    <TodoList/>
    <Navigator />
    <section id="notes"></section>
  </div>
</template>

<script>
import TodoList from './components/todo-list/TodoList.vue'
import Navigator from './components/navigator/Navigator.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    Navigator
  }
}
</script>

<style>
html,
  body {
    margin: 0;
    padding: 0;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    padding: 10px;
  }

  :focus {
    outline: 0;
  }

  .hidden {
    display: none;
  }

  #app {
    display: flex;
  }
  
  #app > section{
    flex: 1;
    background: #fff;
    position: relative;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
    margin:5px;
    height:100vh;
  }
</style>