// let sayi1=10
// sayi1="rüveyha"
// console.log(sayi1)
// let student={id:1, name:"rüveyha"}
// console.log(student)

function save(puan=10,ogrenci) {
    console.log(ogrenci.name+": "+puan)
}
//save(15)
//save(undefined,student)
//save(student,100)

let student={id:1, name:"rüveyha"}
let students=["Rüveyha Rüzgar","xxx","yyy"]
console.log(students)

let students2=[student,{id:2,name:"Rüveyha "},students[1],"Ankara",{city:"Mersin"}]
console.log(students2)

