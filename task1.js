const func = (arr = []) => {
  const [a = 0, b = 0, c = 0] = arr;
  const inParam = `Входящий параметр: ${a}, ${b}, ${c}`;
  const expr = `${a}*x^2+${b}+${c}=0`;

  const discr = b**2 - 4 * a * c;

  console.log(inParam);
  console.log('Условие: ' + expr)
  console.log('Дискриминант: ' + discr);

  if (discr < 0) {
    console.log('Нет корней');
  } else if (discr === 0) {
    console.log('Корень: ' + (-b / 2 * a));
  } else if (discr > 0) {
    console.log('Корень 1: ' + ((-b + Math.sqrt(discr)) / 2 * a));
    console.log('Корень 2: ' + ((-b - Math.sqrt(discr)) / 2 * a));
  } else {
    console.log('Не верные данные');
  }
}

func([1, 0, -4])
func([1, -8, 12])
func([1, -6, 9])