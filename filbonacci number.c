  #include<stdio.h>
main()
{
	int i,a=1,b=0,c,o;
	printf("enter the value of o ");
	scanf("%d",&o);
	  for(i=0;i<o;i++)
	  {
	  
	  	 c=a+b;
	  	 a=b;
	     printf("\n%d",c);
	  
	  	 b=c;
	  }
}
