<template>
  <div class="p-6 border border-muted rounded">
    <h3 class="text-lg font-bold mb-6">Academic Progress</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <p class="font-bold">Level Progress</p>
  <progress class="w-full custom-progress" max="100" value="75"></progress>
        <p class="text-sm text-gray-500">75% completed</p>
      </div>
      <div>
        <p class="font-bold">Credit Hours</p>
  <progress class="w-full custom-progress" max="100" value="60"></progress>
        <p class="text-sm text-gray-500">45/75 credits</p>
      </div>
	  <div>
        <p class="font-bold">Overall Performance</p>
        <progress class="w-full custom-progress" max="100" value="85"></progress>
        <p class="text-sm text-gray-500">Excellent</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-progress {
  --track: #d1fae5; /* Tailwind green-100 */
  --bar: #059669;   /* Tailwind primary-600 or green-600 */
  width: 100%;
  height: .85rem;
  border-radius: 0.5rem;
  background-color: var(--track);
  overflow: hidden;
}
.custom-progress::-webkit-progress-bar {
  background-color: var(--track);
  border-radius: 0.5rem;
}
.custom-progress::-webkit-progress-value {
  background-color: var(--bar);
  border-radius: 0.5rem;
  transition: width 0.3s;
}
.custom-progress::-moz-progress-bar {
  background-color: var(--bar);
  border-radius: 0.5rem;
}
.custom-progress::-ms-fill {
  background-color: var(--bar);
  border-radius: 0.5rem;
}
</style>
