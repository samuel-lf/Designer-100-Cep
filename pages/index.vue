<template>
  <div>
    <main>
      <Banner />
      <InfosCampaign />
      <Author />
      <InfosLessonDates />
    </main>
    <Footer />
  </div>
</template>

<script>
import Banner from '@/components/Sections/Banner'
import InfosCampaign from '@/components/Sections/InfosCampaign'
import Author from '@/components/Sections/Author'
import InfosLessonDates from '@/components/Sections/InfosLessonDates'
import Footer from '@/components/Sections/Footer'
export default {
  components: {
    Banner,
    InfosCampaign,
    Author,
    InfosLessonDates,
    Footer
  }
}
</script>
