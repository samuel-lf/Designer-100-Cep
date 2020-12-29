<template>
  <section class="banner">
    <div class="containerBlocks">
      <div class="blockImage">
        <img class="image" src="../../../assets/images/logoCampaign.svg" alt="Logo do evento Designer 100 cep">
        <p class="text">
          17 à 20 de janeiro
        </p>
      </div>
      <div class="blockForm">
        <p class="text">
          Ei, Designer! Descubra como você pode conquistar o
          <span class="contrast">faturamento de 3 a 5 mil reais por mês </span>
          utilizando o Marketing Digital.
        </p>
        <div class="card">
          <p class="text">
            Cadastre-se gratuitamente para acompanhar a
            <span class="contrast">jornada designer 100 cep</span>
          </p>
          <form class="form" @submit="sendNewsletter">
            <label for="nome" class="label">Nome</label>
            <input
              id="nome"
              v-model="name"
              type="text"
              aria-labelledby="nome"
              placeholder="Digite seu nome"
              class="input"
            >
            <label for="email" class="label">E-mail</label>
            <input
              id="email"
              v-model="email"
              type="email"
              aria-labelledby="email"
              placeholder="Digite seu e-mail"
              class="input"
            >
            <label for="whatsapp" class="label">Whatsapp</label>
            <input
              id="whatsapp"
              v-model="phone"
              v-mask="'(##)#########'"
              type="text"
              aria-labelledby="whatsapp"
              placeholder="Digite seu whatsapp"
              class="input"
            >
            <button id="mc-embedded-subscribe" type="submit" class="btnSubmit">
              Iniciar minha jornada
            </button>
          </form>
          <p class="text">
            100% Online e 100% Gratuito
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { jsonp } from 'vue-jsonp'
import { mask } from 'vue-the-mask'

export default {
  directives: { mask },
  data () {
    return {
      url: 'https://willianleite.us7.list-manage.com/subscribe/post?u=6aad987a683c60bd65de47bc8&amp;id=39bb800807',
      name: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    sendNewsletter (e) {
      e.preventDefault()
      this.phone = this.phone.replace('(', '').replace(')', '')
      const urlRequest = this.makeUrl()
      jsonp(`${urlRequest}`, {
        callbackQuery: 'c',
        FNAME: this.name,
        EMAIL: this.email,
        PHONE: this.phone
      }).then((response) => {
        if (response.result) {
          this.$router.push('obrigado')
        }
      })
    },
    makeUrl () {
      const url = this.url.replace('/post?u=', '/post-json?u=')
      return url
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
