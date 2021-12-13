function reverse(string) {
    const myArray = string.split("");
    let start =0;
    let end = myArray.length - 1;
    while (start < end) {
       let temp = 0;

       temp = myArray[end];
       myArray[end] = myArray[start];
       myArray[start]=temp;
   
        start++;
        end--;
    }
    console.log(myArray);
}
reverse("Jitesh")
