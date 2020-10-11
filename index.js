// 21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 90

// function sum(arr){
//     var sum = 0;
//     for(var i = 0;i<arr.length;i++){
//         sum = sum + arr[i];
//     }
//     console.log(sum);
// }
// var arr = [1,2,4,5,3];
// sum(arr);
// ===============================================================================

// 22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 9, 1, 5
// function timmax(arr){
//     var max =arr[0]
//     for(var i = 1;i<arr.length;i++){
//         if(max < arr[i]){
//             max = arr[i]
//         }

//     }
//     console.log("max la:", max)
// }
// function timmin(arr){
//     var min = arr[0]
//     for(var i=1 ;i<arr.length;i++){
//         if(min > arr[i]){
//             min = arr[i];
//         }
//     }
//     console.log("min la:", min)
// }
// function timtrungbinh(arr){
//     var sum = 0
//     var result
//     for(var i =0;i<arr.length;i++){
//         sum = sum + arr[i]

//     }
//     result = sum/arr.length
//     console.log("trungbinh :",result)
// }
// var a = [1,2,3,4,5]
// timmax(a);
// timmin(a);
// timtrungbinh(a);
// ===============================================================================

// 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 3
// var arr = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
// function max(arr){
//     var max = 0
//     var count =1
//     for( var i=0;i<arr.length;i++){
//         if(arr[i] == arr[i+1]){
//             count++;
//             if(count > max){
//                 max = count;
//             }
//         }else{
//             count =1;
//         }

//     }
//     return max
// }
// var result = max(arr)
// console.log("result:",result)

// ===============================================================================

// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]
// var arr = [1,2,3,2,3,4,6,7]
// function sngto(number){
//     if(number<2){
//         return false;
//     }else{
//         for(var i = 2;i<=Math.sqrt(number);i++){
//             if(number%i==0){
//                 return false;
//             }
//         }
//         return true;
//     }
//     return true;
// }
// var result = arr.filter(function(num){
//     return sngto(num)
// })
// console.log(result)
// ===============================================================================

// 25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[1,4,9,4,9,16,36,49]
// var  a = [1,2,3,2,3,4,6,7] 
// var aa = a.map(a => a*a)
// console.log("a:",aa)
// ===============================================================================

// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]
// var a =[1,2,3,4,6,7]  
// var k =5
// var result = []
// for(var i = 0 ;i<a.length;i++){
//     if(a[i]==(k-1)||a[i]==(k+1)){
//         result.push(a[i]);
//     }
// }
// console.log(result)
// ===============================================================================

// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.
// var students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// for(var i = 0 ;i<students.length;i++){
//     students[i].firstName = students[i].firstName.charAt(0).toUpperCase() + students[i].firstName.substr(1).toLowerCase()
// }
// for(var i =0 ;i<students.length;i++){
//     if((students[i].firstName.includes('a')||students[i].firstName.includes('A'))&&(students[i].firstName.length >= 3)){
//         console.log(students[i])
//     }
// }
// ===============================================================================

// 28. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.
// var students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// for( var i=0;i<students.length;i++){
//     if(students[i].lastName.includes('Do')){
//         console.log(students[i])
//     }
// }
// ===============================================================================

// 29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy sắp xếp danh sách học viên theo tên (firstName).
// var students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// var temp 
// for(var i =0;i<students.length;i++){
//     for(var j=i+1;j<students.length;j++){
//         if(students[i].firstName > students[j].firstName){
//             temp = students[i];
//             students[i] = students[j];
//             students[j] = temp;
//         }
//     }
// }
// console.log(students)
// ===============================================================================

// 30. Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 8
// VD: a = [1,1,1,1,1,1,1,1,1,1], output: -1
// var a=[1,1,1,1,1,1,1,1]
// a.sort();
// console.log(a)
// var max = a[a.length-1]
// for(var i = a.length-1;i>=0;i--){
//     if(a[i]==max){
//         a.pop();
//     }
// }
// if(a.length ==0){
//     console.log(-1)
// }else{
//     console.log("ket qua:")
//     console.log(a[a.length-1])
// }
// ===============================================================================



// ===============================================================================
// 33. [Extra]Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, sắp xếp mảng mà không dùng hàm sort() cho sẵn?
// VD: a = [9,8,7,6,4,5,3,2,1];  .Output: [1,2,3,4,5,6,7,8,9]
// var a = [9,8,7,6,4,5,3,2,1]
// var temp
// for (var i=0;i<a.length;i++){
//     for(var j=i+1;j<a.length;j++){
//         if(a[i]>a[j]){
//             temp=a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
// }
// console.log(a)



