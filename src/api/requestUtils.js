class RequestUtils {
  convertParam(data) {
    let s = '';
    for (const k in data) {
      if ({}.hasOwnProperty.call(data, k)) {
        s += `${k}=${data[k]}&`;
      }
    }
    if (s === '') {
      return '';
    }
    s = s.substring(0, s.length - 1);
    return `?${s}`;
  }
}
const toPromise = (asyncObj) => {
  return new Promise((resolve, reject) => {
    asyncObj.then((r) => {
      return resolve(r.data);
    }).catch((e) => {
      return reject(e);
    });
  });
};
export {toPromise};

export default new RequestUtils();
