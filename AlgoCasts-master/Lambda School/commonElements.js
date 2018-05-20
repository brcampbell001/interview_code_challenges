function commonElements(arr1, arr2) {
  const matches = [];
  arr1.forEach(element => {
    if (arr2.includes(element)) {
      if (!matches.includes(element)) {
        matches.push(element);
      }
    }
  });
  return matches;
}
