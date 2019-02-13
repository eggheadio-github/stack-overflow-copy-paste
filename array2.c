//#include<stdio.h>
//main()
//{
//	int a[5],i,large;
//	printf("the value of a");
//	scanf("%d",&a);
//	for (i=0;i<5;i++)
//	{
//		scanf("%d",&a[i]);
//		if (i==0)
//		{
//			smallest>a[i];
//		}
//		else
//		{
//		if(a[i]<smallest)
//			{
//				smallest=a[i];
//			}
//		}
//	}printf("smallest:%d\n",smallest);
//}
////////////////////////////////
//smallest number

//#include<stdio.h>//LARGEST NUMBER//
//main()
//{
//	int a[5],i,large;
//	printf("the value of a");
//	scanf("%d",&a);
//	for (i=0;i<5;i++)
//	{
//		scanf("%d",&a[i]);
//		if (i==0)
//		{
//			
//			large>a[i];
//		}
//		else
//		{
//		if(a[i]>large)
//			{
//				large=a[i];
//			}
//		}
//	}printf("largest:%d\n",large);
//}
/////////////////////////////////////fibonaci
//#include<stdio.h>
//main()
//{
//	int a,b=0,s=1,i,c;
//	printf("enter the value of a ");
//	scanf("%d",&a);
//	for(i=1;i<=a;i++)
//	{
//		printf("%d\n",b);
//		c=b+s;
//		b=s;
//		s=c;
//	}
//}
////////////reverse number
//#include<stdio.h>
//main()
//{
//int n,r;
//printf("enter the value of a");
//scanf("%d",&n);
//while(n>0)
//{
//	r=n%10;
//	printf("%d",r);
//	n=n/10;
//}
//}
///////////////////////////palindrome or not
//#include<stdio.h>
//main()
//{
//	int a,b,c=0,d,e;
//	printf("enter the value of a");
//	scanf("%d",&a);
//	d=a;
//	e=d;
//	while(e!=0)
//	{
//		b=e%10;
//		c=c*10+b;
//		e=e/10;
//	}printf("%d",c);
//	if(d==c)
//	{
//		printf("palindrom");
//	}
//	else{
//	
//	printf("not palindrom");
//}
//}
//////////////////////armstrong numbe
#include<stdio.h>
#include<math.h>
main()
//{
//	int a,b,sum;
//	printf("enter the value of a");
//	scanf("%d",&a);
//	while(a!=0)
//	{
//		b=a%10;
//		a=b;
//		a=a/10;
//		sum=sum+a;
//	}
//	if(a==sum)
//	{
//	printf("armstong");
//	}
//	else
//	printf("not armstrong");
//}
	{
	
	int a,b,c,d,e,f,g;
	scanf("%d",&a);
	c=a;
	d=c;
	g=a;
	while(a!=0)
	{
		b++;
		a=a/10;
	}
	
	while(d!=0)
	{
		e=d%10;
		d=d/10;
		f=f+pow(e,b);
	}
	printf("%d\n",f);
	
	if(f==g)
	{
		printf("armstrong number");
		
	}
	else
	{
		printf("not armstrong number");
		
	}
}
	
	
	

//
//#include<stdio.h>//digit number
//main()
//{
//	int a,b,c;
//	scanf("%d",&a);
//	while(a!=0)
//	{
//		b++;
//		
//		a=a/10;
//		
//	}
//	printf("the digit of a is %d",b);
//}
//
//#include<stdio.h>
//main()
//{
//	int a,b;
//	scanf("%d",&a);
//	while(a!=0)
//	{
//		b=a%10;
//		printf("%d",b);
//		a=a/10;
//		
//	}
//
//}
/////////////////////palindrom
#include<stdio.h>
/*main()
{
	int a,b,c;
	scanf("%d",&a);
	while(a!=0)
	{
		b=a%10;
		a=a/10;
		c=c*10+b;
	}printf("%d",c);
}
*/
//main()
//{
//	int num,rev=0,mod,store;
//	printf("Enter a number: ");
//	scanf("%d",&num);
//	store = num;
//	while(num!=0)
//	{
//		mod = num%10;
//		rev = rev*10  + mod;
//		num = num/10;
//		
//	}printf("%d",rev);
//	if(rev==store)
//	{
//		printf("Palindrome");
//	}
//	else
//	{
//		printf("Not Palindrome");
//	}
//
//}

//main()
//{
//	int sum = 0,num,remainder;
//	printf("Enter a number: ");
//	scanf("%d",&num);
//	while(num!=0)
//	{
//		remainder = num%10;
//		sum = sum + remainder;
//		num = num/10;
//	}
//	printf("The sum of all digits is: %d",sum);
//}

/////////the greatest number
/*#include<stdio.h>
main()
{
	int greatest,arr[5],i;
	printf("enter the number :");
	for(i=0;i<5;i++)
	{
		scanf("%d",&arr[i]);
		if(i==0)
		{
		greatest=arr[i];
		}
		else 
		{
			if(greatest<arr[i])
			{
				greatest=arr[i];
			}
			
		}
	}printf("the greatest is:%d",greatest);
}*/

//#include<stdio.h>//LARGEST NUMBER//
//main()
//{
//	int a[5],i,large;
//	printf("the value of a");
//	scanf("%d",&a);
//	for (i=0;i<5;i++)
//	{
//		scanf("%d",&a[i]);
//		if (i==0)
//		{
//			
//			large>a[i];
//		}
//		else
//		{
//		if(a[i]>large)
//			{
//				large=a[i];
//			}
//		}
//	}printf("largest:%d\n",large);
//}








