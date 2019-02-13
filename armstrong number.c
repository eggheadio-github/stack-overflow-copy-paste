     #include<stdio.h>
#include <math.h>
main()
{
	int a,b,c=0,d,e=0,o,f;
	printf("enter value for a");
	scanf("%d",&a);
	b=a;
	o=b;
	while(o!=0)
	{
		o=o/10;
		c++;
	}
	printf("%d\n",c);
    f=a;
	while(f!=0)
	{
		d=f%10;
		f=f/10;
		e=e+pow(d,c);
		
	}
	
	printf("\n%d",e);
}
