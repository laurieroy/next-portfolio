import searchIndex from "@content/search/index.json";

const getLocalSearchIndex = () => {
  return searchIndex;
}

const shortify = (text:string, maxLength = 75) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
}

export { getLocalSearchIndex, shortify }