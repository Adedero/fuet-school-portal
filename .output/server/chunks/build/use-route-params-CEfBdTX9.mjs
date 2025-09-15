import { computed } from 'vue';
import { i as useRoute } from './server.mjs';

function useRouteParams(name) {
  const route = useRoute();
  return computed(() => {
    return Object.fromEntries(
      Object.entries(route.params).map(([key, value]) => [
        key,
        Array.isArray(value) ? value[0] ?? "" : String(value)
      ])
    );
  }).value;
}

export { useRouteParams as u };
//# sourceMappingURL=use-route-params-CEfBdTX9.mjs.map
