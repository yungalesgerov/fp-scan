import React from "react";
import { useSelector } from "react-redux";
import { selectHistograms } from "../../jsAdditions/histogramsSlice";
import { Table } from "antd";

function ResultPageSlider() {
  const data = useSelector(selectHistograms);
  const totalDocs = data[0];
  const totalDocsData = totalDocs.data;
  const riskFactors = data[1];
  const riskFactorsData = riskFactors.data;

  const dateArr = totalDocsData.map((item) => {
    const date = new Date(item.date);
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .split("/")
      .join(".");

    return formattedDate;
  });
  const totalDocsArr = totalDocsData.map((value) => value);
  const riskFactorsArr = riskFactorsData.map((value) => value);

  const columnNames = ["Период", ...dateArr];
  const columns = columnNames.map((columnName, idx) => {
    return {
      title: columnName,
      width: 50,
      dataIndex: columnName,
      key: idx,
      ...(idx === 0 && { fixed: 'left'})
    };
  });

  const tableData = [
    {
      key: 1,
      ["Период"]: "Всего",
    },
    {
      key: 2,
      ["Период"]: "Риски",
    },
  ];

  dateArr.forEach((date, idx) => {
    tableData[0][date] = totalDocsArr[idx].value;
    tableData[1][date] = riskFactorsArr[idx].value;
  });

  return (
    <div>
      <Table
        pagination={false}
        columns={columns}
        dataSource={tableData}
        scroll={{
          x: tableData.length * 100,
        }}
      />
    </div>
  );
}

export default ResultPageSlider;