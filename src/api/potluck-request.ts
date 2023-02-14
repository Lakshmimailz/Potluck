export type UserSignIn = {
    username: string
    password: string
}

export type LukkerUserInfo = {
    userId: number
    username: string
    fname: string
    lname: string
    allergies: Allergen[]
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
    TREENUT = "TREE_NUT"
}



export async function getAllUsernames():Promise<UserSignIn[]>{
    const query = `query FindAllUsernames{
        lukkers{
          username
        }
      }`;

      const body = JSON.stringify({query:query});

      const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body, headers:{"Content-Type":"application/json"}});
      const responseBody = await httpResponse.json();
      const userList:UserSignIn[] = responseBody.data.username;
      return userList;
}



export async function createLukker(newLukker: LukkerUserCreation):Promise<LukkerUserInfo>{

    const httpResponse = await fetch("http://127.0.0.1:8000/lukkers", {
        method: "POST",
        body:JSON.stringify(newLukker),
        headers:{
            "Content-Type":"application/json"
        }
    });

    const createdLukker:LukkerUserInfo = await httpResponse.json();
    return createdLukker;
}

export async function verifyUsername(user:UserSignIn):Promise<LukkerUserInfo | {detail:string}> {

    const httpResponse = await fetch("http://127.0.0.1:8000/verify", {
        method: "POST",
        body:JSON.stringify(user),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const checkedUser:LukkerUserInfo = await httpResponse.json();
    return checkedUser;    

}