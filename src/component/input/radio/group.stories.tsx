import { useEffect, useState } from "react";
import { RadioInputGroup } from "./group";

const $RadioInputGroup = () => {
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
            <RadioInputGroup
                error={error}
                formDataKey="radioInputGroup"
                label="Radio Input Label"
                onChange={function (_formDataKey: any, value: string): void {
                    setValue(value);
                }}
                options={[
                    { label: "option one", value: "option_one" },
                    { label: "option two", value: "option_two" },
                ]}
                sublabel="Radio Input Sublabel"
                value={value}
            />
        </div>
    );
};

export default {
    title: "component/input/radio",
};

export { $RadioInputGroup };
