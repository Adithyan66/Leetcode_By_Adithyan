// var TimeLimitedCache = function() {

// };

// /** 
//  * @param {number} key
//  * @param {number} value
//  * @param {number} duration time until expiration in ms
//  * @return {boolean} if un-expired key already existed
//  */
// TimeLimitedCache.prototype.set = function(key, value, duration) {

// };

// /** 
//  * @param {number} key
//  * @return {number} value associated with key
//  */
// TimeLimitedCache.prototype.get = function(key) {

// };

// /** 
//  * @return {number} count of non-expired keys
//  */
// TimeLimitedCache.prototype.count = function() {

// };

// /**
//  * const timeLimitedCache = new TimeLimitedCache()
//  * timeLimitedCache.set(1, 42, 1000); // false
//  * timeLimitedCache.get(1) // 42
//  * timeLimitedCache.count() // 1
//  */

class TimeLimitedCache {
    constructor() {
        this.cache = new Map()
    }

   
  set(key, value, duration) {
    const now = Date.now();
    const expiration = now + duration;
    const exists = this.cache.has(key) && this.cache.get(key).expiration > now;

    this.cache.set(key, { value, expiration });
    return exists;
  }

   get(key) {
    const now = Date.now();
    if (this.cache.has(key)) {
      const entry = this.cache.get(key);
      if (entry.expiration > now) {
        return entry.value;
      } else {
        this.cache.delete(key);
      }
    }
    return -1;
  }

  count() {
    const now = Date.now();
    let count = 0;
    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiration > now) {
        count++;
      } else {
        this.cache.delete(key);
      }
    }
    return count;
  }

}