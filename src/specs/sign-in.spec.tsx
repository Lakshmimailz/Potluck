import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { UserSignIn, verifyUsername } from "../api/user-access-request"
import { HomePage } from "../components/pages/home-page";
import { SignInPage } from "../components/pages/sign-in-page";



jest.mock('@reach/router', () => ({
    navigate: jest.fn(),
  }))

test("Sign-In Succeeds", async () =>{

    render(<>
        <BrowserRouter>
            <SignInPage/>
        </BrowserRouter>
    </>
    )
    
   const usernameInput = await screen.findByPlaceholderText("username");
   const passwordInput = await screen.findByPlaceholderText("password");
   const button = await screen.findByText(/SIGN IN/)
   userEvent.type(usernameInput,"EdwardDee");
   userEvent.type(passwordInput,"edward2edward")
   userEvent.click(button)

   expect(location.pathname).toBe("/home")



    

    

})


// test("Sign-In Fails User", async () =>{

//     render(<>
//     <BrowserRouter>
//         <SignInPage/>
//     </BrowserRouter>
//     </>
//     )
//     const spy = await jest.spyOn(window, 'alert').mockImplementation();
//     const usernameInput = await screen.findByPlaceholderText("username");
//     const passwordInput = await screen.findByPlaceholderText("password");
//     const button = await screen.findByText(/SIGN IN/)
//     userEvent.type(usernameInput,"DoesntExist");
//     userEvent.type(passwordInput,"password")
//     userEvent.click(button)

//     expect(spy).toHaveBeenCalledWith('Incorrect Sign-In.\nUsername does not exist.')

// })