import DataTable, { COL_TYPES } from "react-native-datatable-component";

const SomeCom = () => {
  //You can pass COL_TYPES.CHECK_BOX Column's value in true/false, by default it will be false means checkBox will be uncheck!

  const data = [
    { menu: "Chicken Biryani", select: false }, //If user select this row then this whole object will return to you with select true in this case
    { menu: "Chiken koofta", select: true },
    { menu: "Chicken sharwma", select: false },
  ];

  const nameOfCols = ["menu", "select"];

  return (
    <DataTable
      onRowSelect={(row) => {
        console.log("ROW => ", row);
      }}
      data={data}
      colNames={nameOfCols}
      colSettings={[{ name: "select", type: COL_TYPES.CHECK_BOX }]}
    />
  );
};

export default SomeCom;
