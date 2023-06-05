import { BookModel } from "@/prisma/zod";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { handleUpload } from "../actions";
import { SubmitButton } from "../_components/form/Submit";

export default async function Upload() {
    return (
        <div className="flex self-center w-full ">
            <form className="h-full w-full " action={handleUpload}>
                <InputField id="author-input" name="Author" label="Author" pattern="^[A-Z][a-zA-Z]* [A-Z][a-zA-Z]*$" placeholder="Steve Klabnik" />
                <InputField id="title-input" name="title" label="Title" placeholder="The Rust Programming Language" />
                <InputField id="publishedDate-input" name="publishedDate" label="Published Date" type="date" />
                <InputField
                    id="description-input"
                    name="description"
                    label="Description"
                    placeholder="This version of the text assumes you’re using Rust 1.67.1 (released 2023-02-09) or later. See the “Installation” section of Chapter 1 to install or update Rust."
                />
                <SelectField id="subject-input" name="subject" label="Genre" />
                <SubmitButton />
            </form>
        </div>
    );
}

type InputFieldProps = { name: string; id: string; label: string } & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputField = ({ id, name, label, ...props }: InputFieldProps) => {
    return (
        <div className="my-2 grid w-full grid-cols-2 max-md:grid-cols-1">
            <label htmlFor={id}>{label}:</label>
            <input {...props} name={name} id={id} className="border border-black outline-none px-2" />
        </div>
    );
};

type SelectFieldProps = { name: string; id: string; label: string };
const SelectField = ({ id, name, label }: SelectFieldProps) => {
    return (
        <div className="my-2 grid w-full grid-cols-2 max-md:grid-cols-1">
            <label htmlFor={id}>{label}:</label>
            <select name={name} id={id} className="border border-black px-1" required>
                {Object.keys(BookModel.shape.subject.enum).map((sub, idx) => (
                    <option value={sub} key={`pick-subject-${sub}-${idx}`}>
                        {sub}
                    </option>
                ))}
            </select>
        </div>
    );
};
