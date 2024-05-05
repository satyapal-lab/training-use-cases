/*
 * 12, 56, 89, 45, 25, 20, 100, 23, 4, 16
 * 4, 56, 89, 45, 25, 20, 100, 23, 12, 16
 * 4, 12, 89, 45, 25, 20, 100, 23, 56, 16
 * 4, 12, 16, 45, 25, 20, 100, 23, 56, 89
 * 4, 12, 16, 23, 25, 20, 100, 45, 56, 89
 * 4, 12, 16, 23, 20, 25, 100, 45, 56, 89
 * 4, 12, 16, 23, 20, 25, 45, 100, 56, 89
 * 4, 12, 16, 23, 20, 25, 45, 56, 100, 89
 * 4, 12, 16, 23, 20, 25, 45, 56, 89, 100
 */

public class SelectionSort {
    

    static void  print(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println("");
    }

    public static void main(String[] args) {
        int[] heights = { 12, 56, 89, 45, 25, 20, 100, 23, 4, 16 };

        print(heights);
        
        selectionSort(heights);

        print(heights);
    }


    static int[] selectionSort(int[] arr) {
        for(int i = 0; i< arr.length -1; i++) {
            int smallestIndex = i;
            
            for(int j = i+1; j < arr.length; j++) {
                if(arr[smallestIndex] > arr[j]) {
                    smallestIndex = j;
                }
            }

            int temp =  arr[i];
            arr[i] = arr[smallestIndex];
            arr[smallestIndex] = temp;
           
        }

        return arr;
    }

}
