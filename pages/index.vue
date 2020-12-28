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
import Banner from '@/components/IndexSections/Banner'
import InfosCampaign from '@/components/IndexSections/InfosCampaign'
import Author from '@/components/IndexSections/Author'
import InfosLessonDates from '@/components/IndexSections/InfosLessonDates'
import Footer from '@/components/IndexSections/Footer'
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
