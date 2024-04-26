var numero1 , resto2 , resto3 , resto5 , mensaje
            numero1 = Number(prompt("Dime un número:"));
            resto2 = numero1 % 2;
            resto3 = numero1 % 3;
            resto5 = numero1 % 5;
            if (resto2==0) 
            {
                mensaje = "El número "+numero1+" es par, ";
            }
            else
            {
                mensaje = "El número "+numero1+" es impar, ";
            }

            if (resto3==0) 
            {
                mensaje = mensaje+"múltiplo de 3";
            }
            else
            {
                mensaje = mensaje+"no es múltiplo de 3";
            }
            
            if (resto5==0) 
            {
                mensaje = mensaje+" y múltiplo de 5";
            }
            else
            {
                mensaje = mensaje+" y no es múltiplo de 5";
            }
            
            alert(mensaje);
