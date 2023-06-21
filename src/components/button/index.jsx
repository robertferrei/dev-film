import { ButtonRed, ButtonWhite, } from "./styles"

function Button({ children, red, ...rest }) {


    return (
        <>

            {
                red ? (<ButtonWhite {...rest}>{children}</ButtonWhite>) :
                    (<ButtonRed {...rest}>{children}</ButtonRed>)
            }





        </>
    )
}

export default Button