// recursion problems

public class Recursion {
    public static void main(String[] args) {

        int powerTest = power(10, 3);

        int factorialTest = factorial(5);

    }

    public static int power(int base, int exponent) {
        if (exponent == 0) {
            return 1;
        }
        return base * power(base, exponent - 1);
    }

    public static int factorial(int num) {
        if (num == 1) {
            return 1;
        }
        return num * factorial(num - 1);
    }

    public static int productOfArray(int[] arr) {
        if (arr.length == 1) {
            return arr[0];
        }
        int lastElement = arr.pop
    }

}