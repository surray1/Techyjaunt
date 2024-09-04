// const student1 = {
//     name: 'Shola',
//      age: 15,
//      grade: 'Sixty',

// };

// const student2 = {
//     name: 'Maleek',
//      age: 20,
//      grade: 'Seventy',

// };
// const student3 = {
//     name: 'Kabeer',
//      age: 21,
//      grade: 'Seventy five',

// };
// const student4 = {
//     name: 'Ade',
//      age: 22,
//      grade: 'Fifty five',

// };
// // const student5 = {
// //     name: 'Blessing',
// //      age: 16,
// //      grade: 'Fifty',

// // };
// // const student6 = {
// //     name: 'Khaleed',
// //      age: 17,
// //      grade: 'Ninety'

// // };

// const filterByGrade = (student)=> {
//        if(student.grade==='Sixty'){
//         console.log(student1.name +" scores "+ student1.grade)
//        }
//          else if(student.grade==='Seventy'){
//             console.log(student2.name +" scores "+ student2.grade)
//            }
//         else if(student.grade==='Seventy five'){
//             console.log(student3.name +" scores "+ student3.grade)
//            }

//         else if(student.grade==='Fifty five'){
//             console.log(student4.name +" scores "+ student4.grade)
//            }    
           
//         // else if(student.grade==='Fifty'){
//         //     console.log(student5.name +" scores "+ student5.grade)
//         //    }
     
//         //    else if(student.grade==='Ninety'){
//         //     console.log(student6.name +" scores "+ student6.grade)
//         //    }

// };
      

//          filterByGrade(student1)
//          filterByGrade(student2)
//          filterByGrade(student3)
//          filterByGrade(student4)
//         //  filterByGrade(student5)
//         //  filterByGrade(student6)

        const numbers = [20, 30 ,40, 15, 13, 45, 60 ];
         const averageAge= (numbers) =>{
        let sum = 0;
        for( const i = 0; i < numbers.length; i++){
             sum += numbers[i];
             
        }
           return (sum / numbers.length);
    }      
        console.log(averageAge(numbers));
           
             
        