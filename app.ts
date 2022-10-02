const count_letter = (str: string) => {
  let arr = str.split("");
  arr = arr.filter((item) => {
    return item !== " " && item !== "." && isNaN(parseInt(item));
  });

  arr = arr.map((item) => item.toLowerCase());

  let result: any = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    result.push(`${count}${arr[i]}`);
  }

  result = [...new Set(result)];

  return result.join(", ");
};

console.log(count_letter("My Hyze 47y 7."));
