// recursion problems

public class Recursion {
    public static void main(String[] args) {
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
        int last = arr[arr.length - 1];
        int[] tempArr = new int[arr.length - 1];
        for (int i = 0; i < tempArr.length; i++) {
            tempArr[i] = arr[i];
        }
        return last * productOfArray(tempArr);
    }

    public static int recursiveRange(int num) {
        if (num == 1)
            return 1;
        return num + recursiveRange(num - 1);
    }

    public static int fib(int num) {
        if (num <= 2)
            return 1;
        return fib(num - 1) + fib(num - 2);
    }

}