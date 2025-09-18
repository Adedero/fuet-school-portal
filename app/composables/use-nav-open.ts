export default function useNavOpen(key: string) {
  const isOpen = ref<boolean>(false);

  const setIsOpen = (value: boolean) => {
    if (globalThis.localStorage) {
      globalThis.localStorage.setItem(key, `${value}`);
      isOpen.value = value;
    }
  };

  onMounted(() => {
    const saved =
      globalThis.localStorage?.getItem(key) === "true" ? true : false;
    isOpen.value = saved;
  });

  return { isOpen, setIsOpen };
}
