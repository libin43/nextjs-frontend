interface ButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: "button" | "reset" | "submit" ; // Allowed input types
}



export const Button = ({type, name, className}: ButtonProps) => {
    return(
        <>
        <div>
            <button type={type} className={className}>{name}</button>
        </div>
        </>
    )
}