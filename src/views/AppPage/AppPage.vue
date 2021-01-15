<template>
  <cv-side-nav id="side-nav" rail>
    <cv-side-nav-items>
      <cv-side-nav-menu title="L1 menu">
        <template v-slot:nav-icon
          ><Fade16
        /></template>
        <cv-side-nav-menu-item href="javascript:void(0)" active>
          L2 menu item
        </cv-side-nav-menu-item>
        <cv-side-nav-menu-item href="javascript:void(0)">
          L2 menu item
        </cv-side-nav-menu-item>
        <cv-side-nav-menu-item href="javascript:void(0)">
          L2 menu item
        </cv-side-nav-menu-item>
      </cv-side-nav-menu>
      <cv-side-nav-menu title="L1 menu">
        <template v-slot:nav-icon
          ><Fade16
        /></template>
        <cv-side-nav-menu-item href="javascript:void(0)">
          L2 menu item
        </cv-side-nav-menu-item>
        <cv-side-nav-menu-item href="javascript:void(0)" aria-current="page">
          L2 menu item
        </cv-side-nav-menu-item>
        <cv-side-nav-menu-item href="javascript:void(0)">
          L2 menu item
        </cv-side-nav-menu-item>
      </cv-side-nav-menu>
      <cv-side-nav-link href="javascript:void(0)">
        <template v-slot:nav-icon
          ><Fade16
        /></template>
        L1 link
      </cv-side-nav-link>
      <cv-side-nav-link href="javascript:void(0)">
        <template v-slot:nav-icon
          ><Fade16
        /></template>
        L1 link
      </cv-side-nav-link>
    </cv-side-nav-items>
  </cv-side-nav>
</template>

<script>
export default {};
</script>
