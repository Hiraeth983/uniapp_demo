<template>
  <view class="content bg-yellow-100">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text class="title">{{ $t('test') + $t('hello') }}</text>
    </view>
    <view>{{ counter.count + counter.name }}</view>
    <button @click="counter.increment()">+</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCounterStore } from '@/stores/counter'
const title = ref('Hello')

useI18n().locale.value = 'zh-CN'
const counter = useCounterStore()
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
