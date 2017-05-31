<template>
  <div class="wrapper">
    <va-navibar></va-navibar>
    <va-slider :slideMenuItems="slideMenuItems"></va-slider>
    <va-content-wrap></va-content-wrap>
    <Modal></Modal>
  </div>
</template>

<script>
import VANaviBar from 'NaviBar.vue'
import VASlider from 'Slider.vue'
import VAContentWrap from 'ContentWrap.vue'
import Modal from './components/Modal.vue'
// nemu 菜单
import slideMenuItems from './lib/slideMenuItems'

export default {
  name: 'home',
  data () {
    return {
      slideMenuItems: slideMenuItems
    }
  },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
    'va-content-wrap': VAContentWrap,
    Modal
  }
}
</script>
