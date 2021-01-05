<template>
  <footer class="footer">
    <div class="containerLogo">
      <Logo class="logo" />
    </div>
    <p class="copyright">
      Willian Leite | Todos os direitos reservados.
    </p>
  </footer>
</template>

<script>
import Logo from '~/assets/images/logoAuthor.svg?inline'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
