/**
 * Minimum Swaps 2 - HACKERRANK
 * 
i   arr                     swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]   //result = 5
 */


function minimumSwaps(arr) {
    let nSwap = 0
    for (let i=0; i<arr.length; i++){
        let swapIdx
        if (arr[i] != i+1){
            for (let j=i+1; j<arr.length; j++){   
                if (arr[j] === i+1){
                   swapIdx = j 
                }
            }
            let temp = arr[i]
            arr[i] = arr[swapIdx]
            arr[swapIdx] = temp
            nSwap++
        }
    }
    return nSwap

}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]))