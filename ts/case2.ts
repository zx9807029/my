interface LabelledValue {
    label: string;
    width: number;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
    return 0;
}

let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);