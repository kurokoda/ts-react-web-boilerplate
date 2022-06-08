import { useEffect, useState } from "react";
import { CheckboxInputGroup } from "./group";

const $CheckboxInputGroup = () => {
    const [checked, setChecked] = useState<boolean | undefined>();
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        if ((!checked) || !setChecked) {
            setError("A value is required");
        } else {
            setError(undefined);
        }
    }, [checked]);

    return (
        <div className="d-flex justify-content-center align-content-center w-100">
            <CheckboxInputGroup
                error={error}
                formDataKey="checkboxInputGroup"
                label="Checkbox Input Label"
                onChange={ (_formDataKey: any, checked: boolean): void => {
                    setChecked(checked);
                }}
                checked={checked}
                sublabel="Checkbox Input Sublabel"
            />
        </div>
    );
};

export default {
    title: "component/input/checkbox",
};

export { $CheckboxInputGroup };
