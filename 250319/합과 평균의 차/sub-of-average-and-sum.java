import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        int add = a + b + c; 
        int avg = add / 3;
        int rmV = add - avg;

        System.out.printf("%d\n%d\n%d", add,avg,rmV);
    }
}