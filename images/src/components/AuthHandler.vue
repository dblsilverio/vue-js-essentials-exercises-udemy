<template>
  <div class="ui active inverted dimmer">
    <div class="ui text loader">Authentication in progress...</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: { ...mapActions(["finalizeLogin"]) },
  mounted() {
    this.finalizeLogin(window.location.hash);
  }
};
</script>