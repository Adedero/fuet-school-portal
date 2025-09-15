export default defineEventHandler(async (event) => {
  const { applicationId } = getRouterParams(event);

  return {
    success: true,
    message: "Application deleted."
  };
});
