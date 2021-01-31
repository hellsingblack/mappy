import { fizzbuzz, getNbOccurence } from '../../utils';

/**
 * rule 1: all multiples of int1 are replaced by str1
 * rule 2: all multiples of int2 are replaced by str2
 * rule 3: all multiples of int1 and int2 are replaced by str1 str2.
 */
test('fizzbuzz function', () => {
  const result = [1, 2, "hello", 4, 5, "hello", 7, 8, "hello", 10, 11, "hello", 13, 14, "helloworld", 16, 17, "hello", 19, 20, "hello", 22, 23, "hello", 25, 26, "hello", 28, 29, "helloworld"];
  const data = fizzbuzz(3, 15, 30, 'hello', 'world');
  expect(data).toEqual(result);
});

test('getNbOccurence function should return n° occurence', () => {
  const data = [1, 2, "hello", 4, 5, "hello", 7, 8, "hello", 10, 11, "hello", 13, 14, "helloworld", 16, 17, "hello", 19, 20]
  const result = [
    {name: "1", value: 1},
    {name: "2", value: 1},
    {name: "4", value: 1},
    {name: "5", value: 1},
    {name: "7", value: 1},
    {name: "8", value: 1},
    {name: "10", value: 1},
    {name: "11", value: 1},
    {name: "13", value: 1},
    {name: "14", value: 1},
    {name: "16", value: 1},
    {name: "17", value: 1},
    {name: "19", value: 1},
    {name: "20", value: 1},
    {name: "hello", value: 5},
    {name: "helloworld", value: 1}
  ]

  const nbOccurence = getNbOccurence(data);

  expect(nbOccurence).toEqual(result);
});
