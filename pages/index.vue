<template>
  <div>
    <Banner />
    <InfosCampaign />
    <Author />
    <InfosDates />
  </div>
</template>

<script>
import Banner from '@/components/Sections/Banner'
import InfosCampaign from '@/components/Sections/InfosCampaign'
import Author from '@/components/Sections/Author'
import InfosDates from '@/components/Sections/InfosDates'
export default {
  components: {
    Banner,
    InfosCampaign,
    Author,
    InfosDates
  }
}
</script>
