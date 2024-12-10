import { Table } from "@mantine/core";
import TableComponent from "@/components/table";
import IconDelete from "@/assets/trashIcon";
import IconEdit from "@/assets/editIcon";

export default function Table1() {
  const thead = (
    <Table.Tr>
      <Table.Th>T/r</Table.Th>
      <Table.Th>Nomi</Table.Th>
      <Table.Th>2000-02</Table.Th>
      <Table.Th>2001-03</Table.Th>
      <Table.Th>2002-04</Table.Th>
      <Table.Th>2003-05</Table.Th>
      <Table.Th>2004-06</Table.Th>
      <Table.Th>2005-07</Table.Th>
      <Table.Th>2006-08</Table.Th>
      <Table.Th>2007-09</Table.Th>
      <Table.Th>2009-10</Table.Th>
      <Table.Th>2010-11</Table.Th>
      <Table.Th>2011-12</Table.Th>
      <Table.Th>2012-13</Table.Th>
      <Table.Th>2013-14</Table.Th>
      <Table.Th>2014-15</Table.Th>
      <Table.Th>2015-16</Table.Th>
      <Table.Th>2016-17</Table.Th>
      <Table.Th>2017-18</Table.Th>
      <Table.Th>2018-19</Table.Th>
      <Table.Th>2019-20</Table.Th>
      <Table.Th>2020-21</Table.Th>
      <Table.Th>Amallar</Table.Th>
    </Table.Tr>
  );

  const rows = (
    <>
      <Table.Tr>
        <Table.Td>1</Table.Td>
        <Table.Td>Markaziy Osiyo</Table.Td>
        <Table.Td>12</Table.Td>
        <Table.Td>13</Table.Td>
        <Table.Td>14</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <IconEdit />
          </button>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <IconDelete />
          </button>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>1</Table.Td>
        <Table.Td>O'zbekiston</Table.Td>
        <Table.Td>12</Table.Td>
        <Table.Td>13</Table.Td>
        <Table.Td>14</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td>15</Table.Td>
        <Table.Td style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <IconEdit />
          </button>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <IconDelete />
          </button>
        </Table.Td>
      </Table.Tr>
    </>
  );
  return <TableComponent rows={rows} thead={thead} />;
}
