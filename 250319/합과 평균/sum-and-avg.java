import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

         int a = sc.nextInt();
         int b = sc.nextInt();
         int add = a + b;
         double avg = add / 2f;

         System.out.printf("%d %.1f", add,avg);
    }
}