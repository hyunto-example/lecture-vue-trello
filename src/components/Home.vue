<template>
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="board in boards" :key="board.id">
          {{board}}
        </div>
      </div>

      <ul>
        <li>
          <router-link to="/b/1">Board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      boards: [],
      error: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true;

      /*
       * XMLHttpRequest
       */
      // const req = new XMLHttpRequest()
      // req.open('GET', 'http://localhost:3000/health')
      // req.send()
      // req.addEventListener('load', () => {
      //   this.loading = false
      //   this.apiRes = {
      //     status: req.status,
      //     statusText: req.statusText,
      //     response: JSON.parse(req.response)
      //   }
      // })

      /* 
       * Axios
       */
      axios.get('http://localhost:3000/boards')
        .then(res => {
          this.boards = res.data
        })
        .catch(err => {
          this.$router.replace('/login')
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style>

</style>