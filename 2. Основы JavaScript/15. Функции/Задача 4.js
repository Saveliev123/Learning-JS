<!DOCTYPE html>
<body>
  <script>
    x = +prompt("Введите основание степени х");
    n = +prompt("Введите степень n");
    function pow(x, n)
    {
        let result = 1;
        if (n >= 1 && Number.isInteger(n))
        {
            if (n == 1)
            {
                return x;
            }
            for (let i = 0; i < n; i++)
            {
                result *= x;
            }
            return result;
        }
        else
        {
            return "n должно быть натуральным числом!";
        }
    }
    alert(pow(x, n));
  </script>
</body>
