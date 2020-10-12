// Calculator

/* TO DO: 
          -Alle knoppen opvangen in variabelen (splitten op nodelist of singles, kan met id)
          -GETAL opvangen, doe met .getAttribute("data-num")  data-num zit in html
          -OPERATOR opvangen: huidige cijfer moet naar oude cijfer en huidige cijfer resetten
          doe operator opvangen met .getAttribute("data-ops");
          -2E GETAL opvangen: 2e rekenwaarde gaat naar variabele huidig cijfer (mischien in operator opvangen doen)
          -BEREKENING uitvoeren: gebruik data-ops in switch
          -RESULTAAT UITVOEREN naar screen 
          -HUIDIGE WAARDE VERVANGEN MET RESULTAAT (voor doorrekenen met resultaat: denk aan 1 + 1 = 2 + 3 = 5)
          -CLEAR KNOP laten werken: alles resetten


*/
 /* voor berekenen doe:
      calculate.onclick = function() {
        oldNumber = parseFloat(oldNumber);
        currentNumber = parseFloat(currentNumber);
*/

(function() {
  // Split elements in  single elements or nodelist
  var x = function(element) {
    if (element.charAt(0) === "#") { 
      return document.querySelector(element); 
    }
    return document.querySelectorAll(element); 
  };

  // VARIABELEN
  var screen = x("#screen"), 
    calculate = x("#calculate"), 
    clear = x("#clear"),
    nums = x(".num"), 
    ops = x(".ops"),
    currentNumber = "", 
    oldNumber = "", 
    resultNumber, 
    operator; 

  // NUMMERS OPVANGEN
  var catchNumber = function() {
    if (resultNumber) { 
      currentNumber = this.getAttribute("data-num"); // reset nummer in var currentNumber
      resultNumber = "";
    } else {  
      currentNumber += this.getAttribute("data-num"); // of voeg getal toe aan nummer in currentNumber (LET OP: IS STRING!)
    }
    screen.innerHTML = currentNumber; 
  };

  // CLICK EVENTS GETALLEN
  for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = catchNumber;
  }

  // OPERATOR OPVANGEN
  var catchOperator = function() {
    oldNumber = currentNumber; // currentNumber gaat naar oldNumber
    currentNumber = "";  // currentNumber is nu vrij om een 2e getal op te vangen 
    operator = this.getAttribute("data-ops");
  };

  // CLICK EVENTS OPERATORS
    for (var i = 0, l = ops.length; i < l; i++) {
      ops[i].onclick = catchOperator;
    }

  // RESULTAAT BEREKENEN
  calculate.onclick =  function() {
    oldNumber = parseFloat(oldNumber);
    currentNumber = parseFloat(currentNumber);

    // BEREKENING MAKEN OBV GEKOZEN OPERATOR
    switch (operator) {
      case "plus":
        resultNumber = oldNumber + currentNumber;
        break;
      case "minus":
        resultNumber = oldNumber - currentNumber;
        break;
      case "times":
        resultNumber = oldNumber * currentNumber;
        break;
      case "divided by":
        resultNumber = oldNumber / currentNumber;
        break;
      default:
        resultNumber = currentNumber;
    }
    // Als geen operator geselecteerd, maar wel op = wordt gedrukt, verandert er niks, default is dus.... 

    // UITKOMST BEREKENING TONEN + AANPASSINGEN VARIABELEN
    screen.innerHTML = resultNumber;
    oldNumber = "";  // oldNumber wordt betekenisloos, dus kan gereset worden
    currentNumber = resultNumber; // om verder te rekenen met een uitkomst wordt het resultaat de huidige waarde
  };

 // EVENTUELE KLIK OP CLEAR RESET ALLES OP 0 OF LEEG
  clear.onclick = function() {
    oldNumber = "";
    currentNumber = "";
    screen.innerHTML = "0";
  };
 
}()); // 1 zichzelf oproepende functie
