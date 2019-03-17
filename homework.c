#include<stdio.h>
main()
{
	int	math,english,japanese,cprogramming,html,total,average;
	printf("enter the value for math");
	scanf("%d",&math);
	printf("enter the value for english");
	scanf("%d",&english);
	printf("enter the value for japanese");
	scanf("%d",&japanese);
	printf("enter the value for cprogramming");
	scanf("%d",&cprogramming);
	printf("enter the value for html");
	scanf("%d",&html);
	total=math+english+japanese+cprogramming+html;
	printf("the value of total is %d", total);
	average=(math+english+japanese+cprogramming+html)/5;
	printf("the score of the month is %d\n",total);
	printf("the average of this month is %d",average);
}
