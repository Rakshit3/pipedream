package class_pratical;

import java.util.Scanner;

public class Factorial
{
	  
     
//      System.out.println("enter the number");
//      Scanner sc = new Scanner(System.in);
//      num = sc.nextInt();
      
	public static void main(String[] args) {
		int i;
	      int facto=1;
	      int num;
	      
		System.out.println("enter the number");
	      Scanner sc = new Scanner(System.in);
	      num = sc.nextInt();
		       for(i=1;i<=num;i++)
		       {
		    	   facto=facto*i;
		    	   
		       }
				System.out.print("factorial of n is:"+facto);

			}
}
