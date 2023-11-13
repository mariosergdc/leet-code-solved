let num = 0,
  res = "";
const s =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

for (let i = 0; i < s.length; i++) {
  switch (s[i]) {
    case "#":
      num++;
      break;
    case "@":
      num--;
      break;
    case "*":
      num *= num;
      break;
    case "&":
      res += num;
      break;
    default:
      break;
  }
}
console.log(res);
