// 'use client'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;  // Optional label
    labelClassName: string;
    name: string;
    type?: "text" | "number" | "email" | "password"; // Allowed input types
    disabled?: boolean; // If input should be disabled
    error?: any
    register?: any
}


export const Input = ({ id, type = "text", name, label, labelClassName, required, className, placeholder, value, error, register }: InputProps) => {
    console.log(error, 'error')
    return (
        <>
            <div>
                <label htmlFor={id} className={labelClassName}>
                    {label}
                </label>
                <input
                    id={id}
                    type={type}
                    {...register}
                    name={name}
                    className={className}
                    placeholder={placeholder}
                />
                {error && <p className="text-red-500">{error.message}</p>}
            </div>
        </>
    )
}