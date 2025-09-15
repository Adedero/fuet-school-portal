export default async function handlePreviousClick(
  hasUnsavedChanges: boolean,
  link: string
) {
  const { confirmAsync } = useConfirm();

  if (!hasUnsavedChanges) {
    await navigateTo(link);
    return;
  }
  const confirm = await confirmAsync({
    title: "Changes not Saved",
    description:
      "Going back will remove any unsaved changes. Do you want to proceed?"
  });

  if (!confirm) {
    return;
  }

  await navigateTo(link);
}
