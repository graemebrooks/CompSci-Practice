package sorting;

import java.util.Arrays;

public class BubbleSort {
    public static void main(final String[] args) {
        int[] array = new int[] { 5, 6, 7, 2, 4, 1, 7 };
        sort(array);

        System.out.println(Arrays.toString(array));
    }

    public static void sort(int[] arr) {
        Boolean isSorted;
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            isSorted = true;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // swap arr[j+1] and arr[i]
                    swap(arr, j, j + 1);
                    isSorted = false;
                }
            }

            // if a pass completes without swapping, break loop
            if (isSorted) {
                break;
            }
        }
    }

    public static void swap(int[] arr, int firstIdx, int secondIdx) {
        int temp = arr[firstIdx];
        arr[firstIdx] = arr[secondIdx];
        arr[secondIdx] = temp;
    }
}