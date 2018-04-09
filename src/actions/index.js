export const selectionLibrary = (libraryId) => {
  console.log(libraryId);
  return {
      type: 'select_library',
      payload: libraryId
  };
};
