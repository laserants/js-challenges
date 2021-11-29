import Benchmark from "benchmark";

var suite = new Benchmark.Suite();

suite
  .add("Alterando el último dígito", function () {
    function plusOne(d) {
      let i = d.length - 1;
      while (i >= 0) {
        d[i]++;
        if (d[i] < 10) return d;
        d[i] = 0;

        if (i === 0) {
          d.unshift(1);
        }
        i--;
      }
      return d;
    }

    plusOne([
      4, 3, 2, 1, 5, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    ]);
  })
  .add("Mutando los datos", function () {
    function plusOne(digits) {
      return ("" + (BigInt(digits.join("")) + BigInt(1))).split("");
    }

    plusOne([
      4, 3, 2, 1, 5, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    ]);
  })
  .add("Recursión", function () {
    function plusOne(digits) {
      function addOne(digits, n) {
        if (n == 0 && digits[n] == 9) {
          digits[n] = 0;
          digits.unshift(1);
          return digits;
        }
        if (digits[n] == 9) {
          digits[n] = 0;
          return addOne(digits, n - 1);
        }
        digits[n] += 1;
        return digits;
      }
      return addOne(digits, digits.length - 1);
    }

    plusOne([
      4, 3, 2, 1, 5, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    ]);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("El más rápido es " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
