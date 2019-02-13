
#include<stdio.h>

//(a) //use to find the value of b and c if a =300 but this one fault cuz 300can not >//
	/*main( ) 
	{  
	int   a = 500, b, c ;  
	if ( a >= 400 )  
	b = 300 ; //no curly bracket it execute only one line after if//   
	c = 200 ;   printf ( "\n%d %d", b, c ) ; 
	}*/
	/*(b)main( ) //a=500>=400 condition is true so so it print true number b=300,c=200// 
	{  
	int   a = 500, b, c ;  
	if ( a >= 400 ) 
	b = 300 ;   
	c = 200 ;   
	printf ( "\n%d %d", b, c ) ; 
	}  */
/*(c)//
	main( ) 
	{  
	int   x = 10, y = 20 ;  
	if ( x == y );//buz of semi column it execute 10 20 as simple//but if we clear semi column it won't show anything//
	printf ( "\n%d %d", x, y ) ; 
	}  */
/*(d)
	 main( ) 
	{  
	int   x = 3, 
	y = 5 ;  
	if ( x == 3 )   
	printf ( "\n%d", x ) ;  
	else //cuz of semicolumn it execute so result is 3 &5 it is false//  
	printf ( "\n%d", y ) ; 
	}*/  //output is 3 and 5 cuz it is false condition if it true it will show only 3//
/*(e)
	main( ) 
	{  
	int   x = 3 ;  
	float   y = 3.0 ;  
 	if ( x == y )   
	printf ( "\nx and y are equal" ) ;  //output x and y are equal// it is true//
	else   
	printf ( "\nx and y are not equal" ) ; }*/
/*(f)
	main( ) 
	{  
	int   x = 3, y, z ;  
	y = x = 10 ;  
	z = x < 10 ;  
	printf ( "\nx = %d y = %d z = %d", x, y, z ) ;//x=10 y=10 z=0//z is fault cuz z=10 can not<10// 
	} */
/*(g)
	main( ) 
	{  
	int  k = 35 ;  
	printf ( "\n%d %d %d", k == 35, k = 50, k > 40 ) ;//execute from right to left k>40 is false //
	//k=50 assignt new value so it is true //and k==35 it is not true cuz new value of k is 50 so 50 can not equal 35 so it is false//
	 //output is 0 50 0//
	}  */
/*(h) 
	main( ) 
	{  int i = 65 ;  
	char j = 'A' ;  
	if ( i == j )   
	printf ( "C is WOW" ) ; //output is c is wow //so it is true that i=j//  
	else   
	printf( "C is a headache" ) ; 
	}  */
/*(i) 
	main( ) 
	{  
	int   a = 5, b, c ;  
	b = a = 15 ;  
	c = a < 15 ;  
	printf ( "\na = %d b = %d c = %d", a, b, c ) ; //output a=15 b=15 c=0 //c=0 cuz c=a=5 so 15 can not<15 so it is false//
	 
	}  */
/*(j) 
	main( ) 
	{  
	int  x = 15 ;  
	printf ( "\n%d %d %d", x != 15, x = 20, x < 30 ) ; //output is 1 20 1 cuz it execute from right to left//
	
	}  */
//[B] Point out the errors, if any, in the following programs:  
/*(a) main( ) 
	{  float   a = 12.25, b = 12.52 ;  
	if ( a = b )//error cuz wrong"="it has to == that can true and the true one the output didn't show
	printf ( "\na and b are equal" ) ; //output is a n b are equal//false 
    }*/
/*(b) 
	main( ) 
	{  
	int   j = 10, 
	k = 12 ;  
	if ( k >= j )  
	{   
	{   
	k = j ;    
	j = k ;   //has a lot of curly bracket//
	}  
	} 
	}  */
//(c)
	/*main( ) 
	{  
	if ( 'X' < 'x' )   
	printf ( "\nascii value of X is smaller than that of x" ) ;// no error cuz ascii value of 'X'<'x'// 
	}   */
/*(d) 
	main( ) 
	{  int  x = 10 ;  
	if ( x >= 2 ) 
	then   //error cuz of then //
	printf ( "\n%d", x ) ; 
	} */ 
/*(e) 
	main( ) 
	{  int  x = 10 ;  
	if x >= 2//no bracket()//so it is error//  
	printf ( "\n%d", x ) ; 
	}  */
/*(f) 
	main( ) 
	{  int  x = 10, y = 15 ;  
	if ( x % 2 = y % 3 )// error cuz '=' it has to have '=='//
	printf ( "\nCarpathians" ) ; 
	}*/  
/*(g) 
	main( ) 
	{  
	int x = 30 , y = 40 ;  
	if ( x == y )   
	printf( "x is equal to y" ) ;  
	elseif ( x > y )  //error cuz of else if//
	printf( "x is greater than y" ) ;  
	elseif ( x < y )   
	printf( "x is less than y" ) ; 
	}*/
/*(h) 
	main( ) 
	{  int  x = 10 ;  
	if ( x >= 2 ) 
	then   //error cuz of then//
	printf ( "\n%d", x ) ; 
	}  */
/*(i) 
	main( ) 
	{  
	int a, b ;  
	scanf ( "%d %d",a, b ) ;  
	if ( a > b ) ;//cuz of semi column//if don't have it no error; 
	printf ( "This is a game" ) ;  
	else   
	printf ( "You have to play it" ) ; 
	}*/
//[C] What would be the output of the following programs:  
/*(a) 
	main( ) 
	{
	int   i = 4, z = 12 ;  
	if ( i =5 || z > 50 ) //new value so it always true  
	printf ( "\nDean of students affairs" ) ;  
	else   
	printf ( "\nDosa" ) ; //output is dean of student affair//
	}  */
/*(b) 
	main( ) 
	{  
	int   i = 4, z = 12 ;  
	if ( i = 5 && z > 5 )   
	printf ( "\nC Programming" ) ;  
	else   printf ( "\nWish C was Easy !" ) ; //output is c programming//
	} */ 
/*(c) 
	main( ) 
	{  
	int   i = 4, 
	j = -1, k = 0, w, x, y, z ;  
	w = i || j || k ;  
	x = i && j && k ;  
	y = i || j && k ;  
	z = i && j || k ;  
	printf ( "\nw = %d x = %d y = %d z = %d", w, x, y, z ) ; //output is w=1 x=0 y=1 z=1 follow binary//
	//condition is not true in x//
	}  */
/*(d) 
	main( ) 
	{  
	int   i = 4, j = -1, k = 0, y, z ;  
	y = i + 5 && j + 1 || k + 2 ;  
	z = i + 5 || j + 1 && k + 2 ;  
	printf ( "\ny = %d z = %d", y, z ) ; //output is x=1 y=1 no condition false//
	} */ 
/*(e) 	main( ) 
	{  
	int   i = -3, j = 3 ;  
	if ( !i + !j * 1 )   //output is bennarivo cuz condition false//it execute
	printf ( "\nMassaro" ) ;  
	else   
	printf ( "\nBennarivo" ) ; 
	} */ 
/*(f) 
	main( ) 
	{  
	int  a = 40 ;  
	if ( a > 40 && a < 45 )   
	printf ( "a is greater than 40 and less than 45" ) ;
	else   printf ( "%d", a ) ; //output is 40 so it show else not show print it mean that condition is false//
	
	}  */
/*(g) main( ) 
	{  
	int   p = 8, q = 20 ;  
	if ( p == 5 && q > 5 )   
	printf ( "\nWhy not C" ) ;  
	else   
	printf ( "\nDefinitely C !" ) ; //output is definitely c//cuz condtion is false//p=8 can not print p==5
	} */ 
/*(h) 
	main( ) 
	{  
	int i = -1, j = 1, k ,l ;  
	k = i && j ;  l = i || j ;  //just make us confused//
	printf ( "%d %d", i, j ) ; //output is i=-1 and j=1//
	} */ 
/*(i) 
	main( ) 
	{  
	int x = 20 , y = 40 , 	z = 45 ;  
	if ( x > y && x > z )   
	printf( "x is big" ) ;  
	else if ( y > x && y > z )    
	printf( "y is big" ) ;  
	else if ( z > x && z > y )    
	printf( "z is big" ) ; //output is z is big cuz condition is false//
	}  */
/*(j)
	main( ) 
	{  
	int i = -1, j = 1, k ,l ;  
	k = !i && j ;  l = !i  ||  j ;//just make us confused//  
	printf ( "%d %d", i, j ) ;//output is -1 and 1 //
	} */  
/*(k)
	main( ) 
	{  
	int   j = 4, k ;  
	k = !5 && j ;  
	printf ( "\nk = %d", k ) ;//output k=0 cuz false&true=false// 	
	} */ 
//[D] Point out the errors, if any, in the following programs:  
/*(a) /* This program /* is an example of /* using Logical operators */ 
	/*main( ) 
	{  
	int   i = 2, j = 5 ;  
	if ( i == 2 && j == 5 )   
	printf ( "\nSatisfied at last" ) ; //no error output is satisfied at last//
	}  */
/*(b) 
	main( ) 
	{  
	int   code, flag ;//output is nothing cuz conditon is false//cuz flag and code is not declare in num
	  
	if ( code == 1 & flag == 0 )   
	printf ( "\nThe eagle has landed" ) ; 
	}*/  
/*(c) 
	main( ) 
	{  
	char   spy = 'a', password = 'z' ;  
	if ( spy == 'a' or password == 'z' ) //error is cuz of 'or' it has to use &&//  
	printf ( "\nAll the birds are safe in the nest" ) ; 
	}*/  
/*(d)
	main( ) 
	{ 
 	int   i = 10, j = 20 ;  
	if ( i = 5 )  && if ( j = 10 )//error cuz of &&//   
	printf ( "\nHave a nice day" ) ; 
	}*/  
/*(a) 
	main( ) 
	{  
	int  x = 10 , y = 20;  
	if ( x >= 2 and y <=50 )//it error cuz of and it has to use '&'//
	printf ( "\n%d", x ) ; 
	} */ 
/*(b) 
	main( ) 
	{  int   a, b ;  
	if ( a == 1 & b == 0 )   
	printf ( "\nGod is Great" ) ; //no error but function is false//
	}  */
/*(c) 
	main( ) 
	{  int x = 2;  
	if ( x == 2 && x != 0 ) ;//cuz of semicolumn// 
	{   
	printf ( "\nHi" ) ;   
	printf( "\nHello" ) ;  
	}  
	else   
	printf( "Bye" ) ; 
	} */ 
/*(d) 
	main( ) 
	{  int   i = 10, j = 10 ;  
	if ( i &&( j == 10 ) ) //no error cuz condition true//i have a value so it is true and j have a value
	//it is true too so it execute and if j false conditioln will false//
	printf ( "\nHave a nice day" ) ;           
	}*/  
//[E] What would be the output of the following programs:  
/*(a) 
	main( ) 
	{  
	int   i = -4, j, num ;  
	j = ( num < 0 ? 0 : num * num ) ; //this row like if(?) and else(:) if (if) false it woll execute else 
	printf ( "\n%d", j ) ; //output=1//
	}*/  
/*(b) 
	main( ) 
	{  int   k, 
	num = 30 ;  
	k = ( num > 5 ? ( num <= 10 ? 100 : 200 ) : 500 ) ;//it just make us confuse//  
	printf ( "\n%d", num ) ; //output is 30//
	} */ 
/*(c) 
	main( ) 
	{  
	int   j = 4 ;  ( !j != 1 ? printf ( "\nWelcome") : printf ( "\nGood Bye") ) ;//output is welcome
	//cuz condition is true//   
	}*/  
//[F] Point out the errors, if any, in the following programs:  
/*(a) 
	main( ) 
	{  
	int   tag = 0, code = 1 ;  
	if ( tag == 0 )   ( code > 1 ? printf ( "\nHello" ) ? printf ( "\nHi" ) ) ;//error cuz of ? 2 time//
	//if true have to use only ?  and : one
	else   printf ( "\nHello Hi !!" ) ; 
	} */ 
/*(b) 
	main( ) 
	{  
	int ji = 68   ;  
	printf ( "\nji >= 65 ? %d : %c", ji ) ;//error output//if dun want output error use one more ,ji
	//for (%d: %c,ji,ji)out put will true// 
	}*/  
/*(c) 
	main( ) 
	{  
	int   i = 10, j ;  i >= 5 ? ( j = 10 ) : ( j = 15 ) ;  
	printf ( "\n%d %d", i, j ) ; //no error //
	}*/  
/*(d) 
	main( ) 
	{  int a = 5 , b = 6 ; a == b ; printf ( "%d",a);
	}*/ 
/*(e) 
	main( ) 
	{  
	int n = 9 ;  ( n == 9 ? printf( "You are correct" )  : printf( "You are wrong" ) ) ; 
	}*/ //no error//condition true//
/*(f) 
	main( ) 
	{  
	int   kk = 65 ,ll ;  
	ll = ( kk == 65 : printf ( "\n kk is equal to 65" ) : printf ( "\n kk is not equal to 65" ) ) ;  
	printf( "%d", ll ) ; //error cuz of : we dun have to use : in front we have to use ? instead//
	}*/  
/*(g) 
	main( ) 
	{  
	int   x = 10, y = 20 ;  
	x == 20 && y != 10 ? printf( "True" ) : printf( "False" ) ;//no error//output false // 
	}*/  
	
//[F] Rewrite the following programs using conditional operators.  
/*(a) 
	main( ) 
	{  
	int   x, min, max ;  
	scanf ( "\n%d %d", &max, &x ) ;
	if ( x > max )   max = x ;  
	else   min = x ;   
	//rewrite/////////x>max||max==x?printf("true"):printf("false");
	} */  
/*(b)  
	main( ) 
	{  int   code ;  scanf ( "%d", &code ) ;  
	if ( code > 1 )   
	printf ( "\nJerusalem" ) ;  
	else   if ( code < 1 )    
	printf ( "\nEddie" ) ;   
	else    printf ( "\nC Brain" ) ;
	//rewrite///(code>1?printf("true"):(code<1?printf("false"):printf("unavailable")));
	}  */ 
/*(c) 
	main( )  
	{  
	float sal ;  
	printf ("Enter the salary" ) ;  
	scanf ( "%f", &sal ) ;
	if ( sal < 40000 && sal > 25000 )  
	printf ( "Manager" ) ;  
	else   if ( sal < 25000 && sal > 15000 )    
	printf ( "Accountant" ) ;   
	else    printf ( "Clerk" ) ;  
	//rewrite////sal<40000&&sal>25000?printf("true"):(sal<25000&&sal>15000?printf("false"):printf("unavailable"));
	
	}*/ 	

	

/*#include<math.h>
main()
{
	float a,b,c;
	float d,root1,root2;
	printf("enter the value of a");
	scanf("%f",&a);
	printf("enter the value of b");
	scanf("%f",&b);
	printf("enter the value of c");
	scanf("%f",&c);
	d=b*b-4*a*c;
	if(d>0)
	{
		printf("root1 and 2 are real number");
		root1=(-b+sqrt(d)/2*a);
		printf("root1 is %.2f",root1);
		root2=(-b-sqrt(d)/2*a);
		printf("root2 is %.2f",root2);
	}
	else if (d==0)
	{
	root1=root2=(-b/2*a);
	printf("root1=root2 is %.2f",root1);
	}
	else
	printf("root1 and 2 are complex number");
	
}*/
/*main()
{
	int a;
	printf("enter the number ");
	scanf("%d",&a);
	if(a<0)
	printf("number is negative");
	else if(a==0)
		printf("number = 0");
	else
	printf("number is positive");
}*/
/*main()
{
	int a;
	printf("enter the years");
	scanf("%d",&a);
	if(a%4==0)
	{
		if(a%100==0&&a%400==0)
		printf("this year is leap year");
		else
		printf("this is common year");
	}
}*/

/*main()
{
	int a,b,c;
	printf("enter the value of a");
	scanf("%d",&a);
	printf("enter the value of b");
	scanf("%d",&b);
	printf("enter the value of c");
	scanf("%d",&c);
	if(a>=b && a>=c)
	printf("Greates is %d",&a);
	else if(b>=a && b>=c)
	printf("Greates is %d",&b);
	else if(c>=a && c>=b)
	printf("Greates is %d",&c);
	

	
}*/

/*main()
{
	char sa;
	printf("enter the character");
	scanf("%c",&sa);
	if(sa=='a'||sa=='e'||sa=='i'||sa=='o'||sa=='u')
	{
		printf("the character is vowel");
	}
	else
	{
		printf("the character is consonnent");
	}
}*/
/*main()
{
	int a;
	printf("enter the value of a");
	scanf("%d",&a);
	if(a%2==0)
	{
		printf("the number is even number");
	}
	else
	{
		printf("the number is odd number");
	}
}*/
/* main()
{
	int a,b,c;
	printf("enter the value of a");
	scanf ("%d",&a);
	printf("enter the value of b");
	scanf("%d",&b);
	c=a;
	a=b;
	b=c;
	printf("after swaping is %d",a);
	printf("after swaping is %d",b);
}*/
/*main()
{
   int a,b,c;
   printf("enter the value of a");
   scanf ("%d",&a);
   printf("enter the value of b");
   scanf ("%d",&b);
   c=a*b;
   printf("the area of rectangle is %d",c);
   
}*/
//	#include <stdio.h>
//	
//	main()
//	{
//	//char c;
//   float celcius, Fahrenheit;
//   printf ("enter the value of celcius\n");
//      scanf ("%f",&celcius);
//   Fahrenheit=(celcius*9/5)+32;
//  printf ("%f deg celcius is fahrenheit %f",celcius,Fahrenheit);
   
//    printf("Enter a character: ");
//
//    scanf("%c", &c);  
//    
//    // %d displays the integer value of a character
//    // %c displays the actual character
//    printf("ASCII value of %c = %d",c,c);
//    return 0;

