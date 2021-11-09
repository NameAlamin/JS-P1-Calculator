 var sumBtn = document.getElementById("sum");
      var subBtn = document.getElementById("sub");
      var mulBtn = document.getElementById("mul");
      var divBtn = document.getElementById("div");
      var clearBtn = document.getElementById("clear");

      sumBtn.onclick = function () {
        var num1 = document.getElementById("first-number").value;

        var num2 = document.getElementById("second-number").value;

        var result = parseFloat(num1) + parseFloat(num2);

        document.getElementById("id-result").value = result;
      };

      subBtn.onclick = function () {
        var num1 = document.getElementById("first-number").value;

        var num2 = document.getElementById("second-number").value;

        var result = parseFloat(num1) - parseFloat(num2);

        document.getElementById("id-result").value = result;
      };

      mulBtn.onclick = function () {
        var num1 = document.getElementById("first-number").value;

        var num2 = document.getElementById("second-number").value;

        var result = parseFloat(num1) * parseFloat(num2);

        document.getElementById("id-result").value = result;
      };

      divBtn.onclick = function () {
        var num1 = document.getElementById("first-number").value;

        var num2 = document.getElementById("second-number").value;

        var result = parseFloat(num1) / parseFloat(num2);

        document.getElementById("id-result").value = result;
      };

      clearBtn.onclick = function () {
        document.getElementById("first-number").value = "";
        document.getElementById("second-number").value = "";
        document.getElementById("id-result").value = "";
      };