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
          <form class="form">
            <label for="nome" class="label">Nome</label>
            <input id="nome" type="text" placeholder="Digite seu nome" class="input">
            <label for="email" class="label">E-mail</label>
            <input id="email" type="email" placeholder="Digite seu e-mail" class="input">
            <label for="whatsapp" class="label">Whatsapp</label>
            <input id="whatsapp" type="text" placeholder="Digite seu whatsapp" class="input">
            <button class="btnSubmit">
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
export default {

}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
