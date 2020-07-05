<template>
  <div class="dropper">
    <div class="ui active inverted dimmer" v-if="isUploadInProgress">
      <div class="ui text loader">Uploading Images...</div>
    </div>
    <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*" />
    <span>Drop image here to upload!</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UploadForm",
  methods: {
    ...mapActions(["uploadImages"])
  },
  computed: {
    ...mapGetters(["isUploadInProgress"])
  }
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.dropper:hover {
  background-color: #eee;
}

input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>