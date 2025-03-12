interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLInputElement> {
    label?: string;  // Optional label
    labelClassName: string;
    name: string;
    disabled?: boolean; // If input should be disabled
    error?: any
    register?: any
}


export const TextArea = ({ id, name, label, labelClassName, required, className, placeholder, value, error, register }: TextAreaProps) => {
    return (
        <>
            <div>
                <label htmlFor={id} className={labelClassName}>
                    {label}
                </label>
                <textarea
                    id={id}
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