/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;

    if (functions.length === 0) {
      resolve([]);
      return;
    }

    functions.forEach((fn, index) => {
      fn()
        .then((value) => {
          results[index] = value;
          resolvedCount += 1;
          if (resolvedCount === functions.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }); 
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */