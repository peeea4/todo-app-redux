import InputWrapper from "@/components/FC/Input/styled";

export const Input = ({ value, setValue }) => {
    return (
        <InputWrapper
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};
