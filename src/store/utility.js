export const updateObject = (oldObj, updatedProps) => {
  return {
    ...oldObj,
    ...updatedProps
  }
}