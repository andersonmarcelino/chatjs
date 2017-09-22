<template>
  <div class="hello">
    <div class="header">
      <input v-model="nickname" placeholder="nickname">
    </div>
    <div class="chat">
      <div v-for="message in messagelist" class="chat-message">
        {{message}}
      </div>
    </div>
    <div class="message">
      <input v-model="message" v-on:keyup.enter="send">
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    var that = this;
    window.socket.on('message', function(message){
      that.messagelist.push(message);
      console.log(that.messagelist);
    });
    return {
      nickname: "",
      message: "",
      messagelist: [],
    }
  },
  methods:{
    send: function () {
      window.socket.emit('message',{
        message: this.message,
        nickname: this.nickname
      });
      this.message = '';
    }
  }
}
</script>
<style src='./Hello.css'></style>
