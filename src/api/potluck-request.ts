export type UserSignIn = {
    username: string
    password: string
}

export type LukkerUserInfo = {
    userId: number
    username: string
    fname: string
    lname: string
    allergies: [Allergen]
}

export type LukkerUserCreation = {
    username: string
    password: string
    fname: string
    lname: string
    allergies: Allergen[]
}

export enum Allergen {
    MILK = "MILK" ,
    EGG = "EGG",
    FISH = "FISH",
    SHELLFISH = "SHELLFISH",
    SOY = "SOY",
    WHEAT = "WHEAT",
    TREENUT = "TREENUT"
}



export async function createLukker():Promise<LukkerUserInfo>{
    console.log("Hello")

    const testLukker: LukkerUserCreation = {
        username: "EdwardDee",
        password:"password",
        fname: "Edward",
        lname: "Dee",
        allergies: [Allergen.MILK, Allergen.EGG]
    }
    const httpResponse = await fetch("http://127.0.0.1:8000/lukkers", {
        method: "POST",
        body:JSON.stringify(testLukker),
        headers:{
            "Content-Type":"application/json"
        }
    });

    const createdLukker:LukkerUserInfo = await httpResponse.json();
    return createdLukker;
}
  



// export async function verifyUsername(user:UserSignIn):Promise<LukkerUserInfo> {

//     return 
    
// }