import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        int num = Integer.parseInt(a);
        num += 2;
        System.out.print(num);
    }
}