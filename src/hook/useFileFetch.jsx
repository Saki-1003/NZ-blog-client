const useFileFetch = (article) => {
  const filePathsArry = article && article.file.split(",");
  const urlArray = [];

  const storageBucket = "image-uploader-edadb.appspot.com";

  function getImageUrl(filePath) {
    const encodedFilePath = encodeURIComponent(filePath);
    return `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/${encodedFilePath}?alt=media`;
  }

  article &&
    filePathsArry.map((filePath) => {
      const url = getImageUrl(filePath);
      urlArray.push(url);
    });

  return urlArray;
};

export default useFileFetch;
