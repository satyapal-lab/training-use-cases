/*
 * 12, 56, 89, 45, 25, 20, 100, 23, 4, 16
 * 
 * 12, 56, 89, 45, 25  |  20, 100, 23, 4, 16
 * 
 * 12, 56 |  89, 45, 25  | 20, 100, | 23, 4, 16
 * 
 * 12 | 56 | 89 | 45, 25 | 20 | 100 | 23 | 4, 16
 * 
 * 12 | 56 | 89 | 45 | 25 | 20 | 100 | 23 | 4 | 16
 * 
 * 12, 56 | 45 , 89 | 20, 25 | 23, 100 | 4, 16
 * 
 * 12, 45, 56, 89 | 20, 23, 25, 100 | 4, 16
 * 
 * 12, 20, 23, 25, 45, 56, 89, 100 | 4, 16
 * 
 * 4, 12, 16, 20, 23, 25, 45, 56, 89, 100 
 * 
 * 
 */

public class MergeSort {

    static void print(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println("");
    }

    public static void main(String[] args) {
        int[] heights = { 12, 56, 89, 45, 25, 20, 100, 23, 4, 16 };

        print(heights);

        MergeSort mergeSort = new MergeSort();

        mergeSort.sort(heights, 0, heights.length - 1);

        print(heights);
    }

    void sort(int[] arr, int left, int right) {

        if (left < right) {
            int mid = (left + right) / 2;

            sort(arr, left, mid);

            sort(arr, mid + 1, right);

            merge(arr, left, mid, right);
        }

    }

    void merge(int[] arr, int left, int mid, int right) {
        int leftArraySize = mid - left + 1;
        int righArraySize = right - mid;

        int leftArr[]  = new int[leftArraySize];
        int rightArr[] = new int [righArraySize];

        for(int i = 0; i < leftArraySize; i++) {
            leftArr[i] = arr[left + i];
        }

        for(int i = 0; i < righArraySize; i++) {
            rightArr[i] = arr[mid + 1 + i];
        }



        int i = 0; 
        int j = 0; 
        int k = left;

        while(i < leftArraySize && j < righArraySize) {
            if(leftArr[i] < rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            }
            else {
                arr[k] = rightArr[j];
                j++;
            }
            k++;
        }

        while(i < leftArraySize) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }

        while( j < righArraySize) {
            arr[k] = rightArr[j];
            j++;
            k++;
        }


    }

}
