import { useEffect, useState } from "react";
import { PhoneInputGroup } from "./group";

const $PhoneInputGroup = () => {
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
            <PhoneInputGroup
                error={error}
                formDataKey="phoneInputGroup"
                label="Phone Input Label"
                onChange={(_formDataKey: string, value: string): void => {
                    setValue(value);
                }}
                sublabel="Phone Input Sublabel"
                value={value}
            />
        </div>
    );
};

export default {
    title: "component/input/phone",
};

export { $PhoneInputGroup };
