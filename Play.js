
const person = {


    Sex: 'Male',
    name: 'Umer',
    age: 23,
    greet(){
        console.log('Hi i am ' + this.name)

    },
    match(){
        console.log('My Age is ' + this.age)
    },
    Gender(){
        console.log('My Gender is ' + this.Sex)
    }
}
person.greet();
person.match();
person.Gender();

const hobbies = ['Running','Swimming'];
for (let hobby of hobbies){
    console.log(hobby);
}
    console.log(hobbies);
    console.log(hobbies.map);
    console.log(hobbies.push);

