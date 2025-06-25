/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
// var kthSmallestProduct = function (nums1, nums2, k) {
//     let arr = []

//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             arr.push(nums1[i] * nums2[j])
//         }
//     }
//     let sor = arr.sort((a, b) => a - b)
//     console.log(sor)
//     return sor[k-1]
// };


function kthSmallestProduct(nums1, nums2, k) {
    const m = nums1.length;
    const n = nums2.length;

    function countPairsLessThanOrEqual(x) {
        let count = 0;
        for (let num of nums1) {
            if (num === 0) {
                if (x >= 0) count += nums2.length;
            } else if (num > 0) {
                // binary search for max y in nums2 such that num * y <= x
                let l = 0, r = nums2.length;
                while (l < r) {
                    let mid = Math.floor((l + r) / 2);
                    if (num * nums2[mid] <= x) l = mid + 1;
                    else r = mid;
                }
                count += l;
            } else {
                // num < 0
                let l = 0, r = nums2.length;
                while (l < r) {
                    let mid = Math.floor((l + r) / 2);
                    if (num * nums2[mid] <= x) r = mid;
                    else l = mid + 1;
                }
                count += nums2.length - l;
            }
        }
        return count;
    }

    let left = -1e10, right = 1e10;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (countPairsLessThanOrEqual(mid) >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
