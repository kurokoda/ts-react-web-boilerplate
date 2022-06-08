import { useEffect, useState } from "react";
import { TextAreaInputGroup } from "./group";

const $TextInputGroup = () => {
    const [value, setValue] = useState<string | undefined>();
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        if ((value && !value.length) || !value) {
            setError("A value is required");
        } else {
            setError(undefined);
        }
    }, [value]);

    return (
        <div className="d-flex justify-content-center align-content-center w-100">
            <TextAreaInputGroup
                error={error}
                formDataKey="textInputGroup"
                label="Text Input Label"
                onChange={(_formDataKey: string, value: string): void => {
                    setValue(value);
                }}
                value={value}
                sublabel="Text Input Sublabel"
            />
        </div>
    );
};

export default {
    title: "component/input/textArea",
};

export { $TextInputGroup };
