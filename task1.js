const func = (arr = []) => {
  const [a = 0, b = 0, c = 0] = arr;

  const discr = b**2 - 4 * a * c;

  if (discr < 0) {
    console.log('Нет корней');
  } else if (discr === 0) {
    console.log(-b / 2 * a + '');
  } else if (discr > 0) {
    console.log((-b + Math.sqrt(discr)) / 2 * a + '');
    console.log((-b - Math.sqrt(discr)) / 2 * a + '');
  } else {
    console.log('Не верные данные');
  }
}

func([1, 0, 4])