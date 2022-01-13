interface Picture {
    large:string
    medium:string
    thumbnail:string
}
interface Location {
    city:string
    country:string
    postcode:number
}
interface UserName {
    title:string
    first:string
    last:string
}
interface Login {
    username:string
    password:string
}
interface DOB {
    date:string
}
export interface User {
    name:UserName
    phone:string
    email:string
    password:string
    birthDay:string
    location:Location
    picture:Picture,
    login:Login,
    dob:DOB
}