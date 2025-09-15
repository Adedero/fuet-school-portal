import { useRoute } from "#imports";
import { computed } from "vue";

// overload signatures
export function useRouteParams(): Record<string, string>;
export function useRouteParams(name: string): string | undefined;

// implementation
export function useRouteParams(name?: string) {
  const route = useRoute();

  return computed(() => {
    if (name) {
      const value = route.params[name];
      if (value === undefined) return undefined;
      return Array.isArray(value) ? value[0] : String(value);
    }

    // all params
    return Object.fromEntries(
      Object.entries(route.params).map(([key, value]) => [
        key,
        Array.isArray(value) ? value[0] ?? "" : String(value)
      ])
    );
  }).value;
}
