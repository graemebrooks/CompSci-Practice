data = [ 5, 10, 11, 3, 4, 18, 7, 21 ];

def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range (0, (len(arr))-i-1):
            if arr[j] > arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
    return arr

print(bubble_sort(data))



