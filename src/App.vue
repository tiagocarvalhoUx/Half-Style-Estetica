<script setup>
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import HeroSection from "./components/HeroSection.vue";
import PricingSection from "./components/PricingSection.vue";
import ProcedureDetails from "./components/ProcedureDetails.vue";
import ProceduresCarousel from "./components/ProceduresCarousel.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import TestimonialsSection from "./components/TestimonialsSection.vue";
</script>

<template>
  <SiteHeader />
  <main id="top">
    <HeroSection />
    <AboutSection />
    <ProceduresCarousel />
    <ProcedureDetails />
    <TestimonialsSection />
    <PricingSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
