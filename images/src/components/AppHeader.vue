<template>
  <div class="ui secondary pointing menu">
    <router-link class="active item" to="/">Image Storage</router-link>

    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <img class="ui mini image" :src="userProfile.avatar" />
        <a class="item" @click="visitProfile">{{userProfile.url}}</a>

        <router-link class="item" to="/">Galleries</router-link>
        <router-link class="item" to="/upload">Upload</router-link>        
        <a class="item" @click="logout">Logout</a>
      </div>

      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login", "logout"]),
    visitProfile() {
      window.location = `https://imgur.com/user/${this.userProfile.url}`;
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn", "userProfile"])
  }
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>