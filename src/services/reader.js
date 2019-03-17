export default class Reader {
  constructor() {
    this.readerAPI = new FileReader()
  }

  getText(file) {
    return new Promise((resolve, reject) => {
      this.readerAPI.onerror = () => {
        this.readerAPI.abort();
        reject(new Error('Problem with parsing file.'))
      };

      this.readerAPI.onload = () => {
        resolve(this.readerAPI.result);
      };
      this.readerAPI.readAsText(file);
    });
  }
}