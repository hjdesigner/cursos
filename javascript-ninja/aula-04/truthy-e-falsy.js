var teste;

if ( 1 ){ teste = true}else{teste = false};
//true

if ( 0 ){ teste = true}else{teste = false};
//false

if ( ' ' ){ teste = true}else{teste = false};
//false

if ( '0' ){ teste = true}else{teste = false};
//true
if ( 'herique' ){ teste = true}else{teste = false};
//true

if ( undefined ){ teste = true}else{teste = false};
//false

if ( null ){ teste = true}else{teste = false};
//false

if ( {} ){ teste = true}else{teste = false};
if ( [] ){ teste = true}else{teste = false};
//true

if ( NaN ){ teste = true}else{teste = false};
if ( -0 ){ teste = true}else{teste = false};
if ( false ){ teste = true}else{teste = false};
//false

//INVETE O VALOR
!true //false
!1 //false
!false //true


!!2 // TRUE
!!false //true


/*
FALSY

- undefined = 0;
- null = -0;
- NaN = "ou"

*/

/*
TRUTHY

- Todos os outros valores são true

*/