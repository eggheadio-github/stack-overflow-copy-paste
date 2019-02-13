#include<stdio.h>
int factorial(int n);
main()
{
	int n;   
	printf("Enter a positive integer:");
	scanf( "%d",&n);
	printf("Factorial of %d=%1d",n,factorial(n));
	return 0;
}
int factorial(int n)
{
	if(n!=1)
	return n*factorial(n-1);
}
