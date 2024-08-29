import { Table } from "@mantine/core";
import EditIcon from "../../../../assets/editIcon";
import TrashIcon from "../../../../assets/trashIcon";
import TableComponent from "@/components/table";

export default function TableData({ openDelete }: { openDelete?: () => void }) {
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
        <Table.Th>1</Table.Th>
        <Table.Th>Markaziy Osiyo</Table.Th>
        <Table.Th>12</Table.Th>
        <Table.Th>13</Table.Th>
        <Table.Th>14</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={openDelete}
          >
            <EditIcon />
          </button>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={openDelete}
          >
            <TrashIcon />
          </button>
        </Table.Th>
      </Table.Tr>
      <Table.Tr>
        <Table.Th>1</Table.Th>
        <Table.Th>O'zbekiston</Table.Th>
        <Table.Th>12</Table.Th>
        <Table.Th>13</Table.Th>
        <Table.Th>14</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th>15</Table.Th>
        <Table.Th style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={openDelete}
          >
            <EditIcon />
          </button>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={openDelete}
          >
            <TrashIcon />
          </button>
        </Table.Th>
      </Table.Tr>
    </>
  );
  return <TableComponent rows={rows} thead={thead} />;
}
