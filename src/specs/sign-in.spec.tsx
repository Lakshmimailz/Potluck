import { UserSignIn, verifyUsername } from "../api/user-access-request"
//import { handleUsernameVerification } from "../components/pages/sign-in-page"


test("Sign-In Succeeds", async () =>{
    const testUser:UserSignIn = {
        username:"EdwardDee",
        password: "password"
    }

    const verification = await verifyUsername(testUser);
    expect(verification).not.toBe(String)

})

/*
test("Sign-In Fails User", async () =>{
    const testUser:UserSignIn = {
        username:"DoesntExist",
        password: "password"
    }

    const verification = await handleUsernameVerification(testUser);
    expect(window.alert).toBeCalledWith('Incorrect Sign-In.\nUsername does not exist.')

})*/