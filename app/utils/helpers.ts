export const tryCatch = (func: () => void) => {
  try {
    func();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
