public class LinearSearch {
    public static void main(final String[] args) {
        int[] data = new int[] { 2, 44, 56, 71, 19 };
        int result = findIndex(data, 99);
        System.out.println(result);
    }

    public static int findIndex(int[] arr, int val) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == val)
                return i;
        }
        return -1;
    }
}