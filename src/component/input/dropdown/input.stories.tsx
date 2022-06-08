import { DropdownInput, DropdownItem } from "./input";

const $DropdownInput = () => {
    const dropdownItems: DropdownItem[] = [
        {
            itemText: "Item one",
            onClick: () => console.info("Item one clicked"),
        },
        {
            itemText: "Item two",
            onClick: () => console.info("Item two clicked"),
        },
    ];

    return (
        <>
            <div
                style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "calc(100vh)",
                    justifyContent: "center",
                }}
            >
                <DropdownInput id="example" buttonText="Dropdown" items={dropdownItems} />
            </div>
        </>
    );
};

export default {
    title: "component/input/dropdown",
};

export { $DropdownInput };
