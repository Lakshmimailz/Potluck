import { UserSignIn, verifyUsername } from "../api/potluck-request"


test("Sign-In Succeeds", async () =>{
    const testUser:UserSignIn = {
        username:"EdwardDee",
        password: "password"
    }

    const verification = await verifyUsername(testUser);
    expect(verification).not.toBe(String)

})