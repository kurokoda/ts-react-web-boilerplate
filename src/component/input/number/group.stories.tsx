import { useEffect, useState } from "react";
import { NumberInputGroup } from "./group";

const $NumberInputGroup = () => {
    const [value, setValue] = useState<number | undefined>();
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        if (!value) {
            setError("A value is required");
        } else {
            setError(undefined);
        }
    }, [value]);

    return (
        <div className="d-flex justify-content-center align-content-center w-100">
            <NumberInputGroup
                error={error}
                formDataKey="numberInputGroup"
                label="Number Input Label"
                onChange={(_formDataKey: any, value: number) => {
                    setValue(value);
                }}
                value={value}
                sublabel="Number Input Sublabel"
            />
        </div>
    );
};

export default {
    title: "component/input/number",
};

export { $NumberInputGroup };
