<template>
  <div>
    <Banner />
    <InfosCampaign />
    <Author />
    <InfosLessonDates />
  </div>
</template>

<script>
import Banner from '@/components/Sections/Banner'
import InfosCampaign from '@/components/Sections/InfosCampaign'
import Author from '@/components/Sections/Author'
import InfosLessonDates from '@/components/Sections/InfosLessonDates'
export default {
  components: {
    Banner,
    InfosCampaign,
    Author,
    InfosLessonDates
  }
}
</script>
