const quickSort = document.querySelector('#quicksort');
const bubbleSort = document.querySelector('#bubblesort');
const mergeSort = document.querySelector('#mergesort');
const insertionSort = document.querySelector('#insertionsort');

quickSort.addEventListener('click', function (){
   quickSort.classList.add('button-selected');
   bubbleSort.classList.remove('button-selected');
   mergeSort.classList.remove('button-selected');
   insertionSort.classList.remove('button-selected');
});

bubbleSort.addEventListener('click', function (){
   quickSort.classList.remove('button-selected');
   bubbleSort.classList.add('button-selected');
   mergeSort.classList.remove('button-selected');
   insertionSort.classList.remove('button-selected');
});

mergeSort.addEventListener('click', function (){
   quickSort.classList.remove('button-selected');
   bubbleSort.classList.remove('button-selected');
   mergeSort.classList.add('button-selected');
   insertionSort.classList.remove('button-selected');
});

insertionSort.addEventListener('click', function (){
   quickSort.classList.remove('button-selected');
   bubbleSort.classList.remove('button-selected');
   mergeSort.classList.remove('button-selected');
   insertionSort.classList.add('button-selected');
});