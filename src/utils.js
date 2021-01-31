export const fizzbuzz = (int1, int2, limit, str1, str2) => {
  if (!int1 || !int2 || !limit || !str1 || !str2) return [];

  return Array
    .apply(null, { length: limit })
    .map((val, index) => {
      index++;
      if (index % int1 === 0 && index % int2 === 0){ return str1+str2; }
      if (index % int1 === 0){ return str1; }
      if (index % int2 === 0){ return str2; }
      return index;
    });
}

export const getNbOccurence = (arr) => {
  const count =  arr.reduce((acc, curr) => (!acc[curr] ? acc[curr] = 1 : acc[curr]++, acc), {});

  // format data for rechartjs data: [{...}, {...}]
  return Object.entries(count).reduce((acc,[key, value]) => [...acc, { name: key, value }], []);
}
