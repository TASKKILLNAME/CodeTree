import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        float result = Float.parseFloat(a);
        System.out.printf("%.2f", result);
    }
}