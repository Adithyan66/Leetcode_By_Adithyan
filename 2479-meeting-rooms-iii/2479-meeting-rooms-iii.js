/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */

 class MinHeap {
  constructor(cmp = (a, b) => a - b) {
    this.data = [];
    this.compare = cmp;
  }

  push(val) {
    this.data.push(val);
    this.data.sort(this.compare);
  }

  pop() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

function mostBooked(n, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);

  const idle = new MinHeap();          // stores available room indices
  for (let i = 0; i < n; i++) idle.push(i);

  const busy = new MinHeap((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });  // stores [endTime, roomIndex]

  const count = Array(n).fill(0);

  for (const [s, e] of meetings) {
    // free up rooms
    while (!busy.isEmpty() && busy.peek()[0] <= s) {
      const [_, room] = busy.pop();
      idle.push(room);
    }

    let room, startTime, endTime;
    if (!idle.isEmpty()) {
      room = idle.pop();
      startTime = s;
      endTime = e;
    } else {
      const [availTime, r] = busy.pop();
      room = r;
      const duration = e - s;
      startTime = availTime;
      endTime = availTime + duration;
    }

    busy.push([endTime, room]);
    count[room]++;
  }

  let best = 0;
  for (let i = 1; i < n; i++) {
    if (count[i] > count[best]) best = i;
  }
  return best;
}
