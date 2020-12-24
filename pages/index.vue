<template>
  <div>
    <Banner />
    <InfosCampaign />
    <Author />
  </div>
</template>

<script>
import Banner from '@/components/Sections/Banner'
import InfosCampaign from '@/components/Sections/InfosCampaign'
import Author from '@/components/Sections/Author'
export default {
  components: {
    Banner,
    InfosCampaign,
    Author
  }
}
</script>
