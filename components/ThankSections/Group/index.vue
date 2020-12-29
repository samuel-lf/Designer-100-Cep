<template>
  <section class="container">
    <h1 class="title">
      Importante
    </h1>

    <p class="text">
      Para garantir que você fique por dentro de todas as novidades e não perca nenhum dia do nosso evento, entre agora para o nosso grupo
      exclusivo no whatsapp clicando no botão abaixo.
    </p>

    <div class="containerBtn">
      <button class="btnGroup" @click="openGroup">
        Quero entrar no grupo exclusivo
      </button>
    </div>

    <p class="textWhite">
      Não se preocupe com mensagens inconvenientes, pois esse grupo é único e exclusivo para o nosso evento. somente eu e os administradores
      enviaremos mensagens pontuais para garantir que você consiga acompanhar toda a série.
    </p>
  </section>
</template>

<script>
export default {
  methods: {
    openGroup () {
      const urls = [
        'https://chat.whatsapp.com/DJfqdsnDV438Gy7JH7pYyl'
      ]
      const random = Math.floor(Math.random() * urls.length)
      window.open(`${urls[random]}`, 'blank')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
