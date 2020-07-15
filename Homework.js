
            var str = 'javascript';
            alert("Задание 1 - " + str.substr(0,1).toUpperCase() + str.substr(1));


            var scc = '123456';
            scc = scc.split('');
            alert("Задание 2 - " + scc.reverse());
         

            var str = 'http://helloo';
            var str2 = 'http://';
            str = str.substr(0, [7]);
                if (str == str2) {
                    alert("Задание 3 - " +(true));
                } else {
                    alert("Задание 3 - " +(false));
                }

    
            var str = 'helloo.html';
            var str2 = '.html';
            str = str.substr(10);
                if (str == str2) {
                    alert("Задание 4 - " +(true));
                } else {
                    alert("Задание 4 - " +(false));
                }


            var arr = [];
            var str = "x";
                for (var i = 0; i < 10; i++) {
                arr.push(str);
                str += "x";
                }
            alert("Задание 5 - " + arr);


            var ss1 = 1;
            var  ss2 = "1";
            var array = [];
                for (var i = 0; i < 10; i++) {
                array.push(ss2);
                ss1+=1;
                ss2=ss1.toString();
                for (var j = 0; j <= i; j++) {
                ss2+=ss1;
                }
                }               
            alert("Задание 6 - " + array);


            function arrayFill(el, numEl) {
            var array = [];
                for (var i = 0; i < numEl; i++) {
                array.push(el);
                }
                return array;
                }
            alert("Задание 7 - " + arrayFill('y', 10)); 
            

            function arraySumm (array) {
            var summ = 0;
                for (var i = 0; i < array.length; i++) {
                summ += array[i];
                if (summ > 10) {
                return i + 1;
                }
                }
                }
            alert("Задание 8 - " + arraySumm([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
            
            
            var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            function reverseArray(array) {
                var res = [];
                for (var i = array.length - 1; i >= 0; i--) {
                res.push(array[i]);
                }
                return res;
                }
            alert("Задание 9 - " +reverseArray(array));


            var array = [[5, 81, 10], [65, 88], [8]];
            var summ = 0;
                for (var i = 0; i < array.length; i ++) {
                for (var p = 0; p < array[i].length; p++) {
                summ += array[i][p];
                }
                }
            alert("Задание 10 - " + summ);

            var array = [[[6, 56], [66, 45]], [[23, 454], [65, 76]]];
            var summm = 0;
                for (var i = 0; i < array.length; i++) {
                for (var p = 0; p < array[i].length; p++) {
                for (var g = 0; g < array[i][p].length; g++) {
                summ += array[i][p][g];
                }
                }
                }
            alert("Задание 11 - " + summ);


            function getDigitsSum(numb) {
            var array = String(numb).split("");
            var summ = 0;
                for (var i = 0; i < array.length; i++) {
                summ += Number(array[i]);
                }
                return summ;
                }
            alert("Задание 12 - " + (getDigitsSum("1545")));


            var str = 'var_text_hello';
            var ar = str.split('_');
            var array = [];
                for (i = 1; i < ar.length; i++) {
                ar[0].toLowerCase();
                array.push(firstSymUp(ar[i]));
                }
            function firstSymUp(word) {
            var resu = word.slice(0,1).toUpperCase() + word.slice(1);
                return resu;
                }
            alert("Задание 13 - " + ar[0] + array.join(''));
                
            
            function Array(text, array) {
                for (var i = 0; i < array.length; i++) {
                  if (array[i] === text) return true;
                }
                return false;
                }
            alert("Задание 14 - " + Array('meow', ['hello', 'js', 'cat', 'dog']));
              

            var arr = [1, 2, 3, 4, 5];
            elemArrRecursion(arr);
            function elemArrRecursion(arr) {
                alert("Задание 15 - " + (arr.shift()));
                if (arr.length > 0) {
                elemArrRecursion(arr);
                }
            }


            var num = 365;
            function Nine(num){
            var flag = 0;
            var sum = 0;
            var str = String(num);
                for(var i = 0; i < str.length; i++){
                sum += Number(str[i]);
            };
                if(sum <= 9){return sum} else {
                return Nine(sum)};
            }
            alert("Задание 16 - " + Nine(num));    