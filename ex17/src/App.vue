<script setup>
import { ref } from 'vue';
const dataBase = ['a123', 'b1234', 'c12345']
const user = ref('')
const pass = ref('')




const logIn = () => {
  const usePass = user.value + pass.value
  if (dataBase.includes(usePass)) {
    alert('logged in')
  }else {
    alert('try again')
  }
}



</script>
<template>
  <div>
    <div>
      username : <input v-model="user" type="text">
    </div>
    <div>
      password : <input v-model="pass" type="password">
    </div>
    <div>
      <button @click="logIn">log in</button>
    </div>
    <div>valid username & passwords : </div>
    <div>{username: a, password: 123}</div>
    <div>{username: b, password: 1234}</div>
    <div>{username: c, password: 12345}</div>
  </div>
</template>
<style></style>