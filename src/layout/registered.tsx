import styled from "@/layout/style.module.scss";
import { HocPrivate } from "./hoc";
import { Button, Modal, ScrollArea, Table } from "@mantine/core";
import Sidebar from "@/components/layout/sidebar";
import { Suspense, useState } from "react";
import Navbar from "@/components/layout/navbar";
import { Outlet } from "react-router-dom";
import TableComponent from "@/components/table";
import { useDisclosure } from "@mantine/hooks";
import EditIcon from "../assets/editIcon";
import TrashIcon from "../assets/trashIcon";
import { useForm } from "react-hook-form";
import { Input } from "@/components/forms/input";
import { Select } from "@/components/forms/select";

export default function PrivateRoute() {
  const [show, setShow] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);

  const thead = (
    <Table.Tr>
      <Table.Th>T/r</Table.Th>
      <Table.Th>Tashkilot nomi</Table.Th>
      <Table.Th>Tashkilot nomi</Table.Th>
      <Table.Th>Lavozim</Table.Th>
      <Table.Th>Login</Table.Th>
      <Table.Th>Parol</Table.Th>
      <Table.Th>Amallar</Table.Th>
    </Table.Tr>
  );

  const rows = (
    <>
      <Table.Tr>
        <Table.Th>1</Table.Th>
        <Table.Th>Jumayev Otabek Tolibovich</Table.Th>
        <Table.Th>Oziq ovqat xavfsizligi bo’limi</Table.Th>
        <Table.Th>Vazir o’rin bosari Raqamlashtirishbo’yicha</Table.Th>
        <Table.Th>nazarov_87</Table.Th>
        <Table.Th>02032008</Table.Th>
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
        <Table.Th>Jumayev Otabek Tolibovich</Table.Th>
        <Table.Th>Oziq ovqat xavfsizligi bo’limi</Table.Th>
        <Table.Th>Vazir o’rin bosari Raqamlashtirishbo’yicha</Table.Th>
        <Table.Th>nazarov_87</Table.Th>
        <Table.Th>02032008</Table.Th>
        <Table.Th style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
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

  const form = useForm();

  function toggleSidebar() {
    setShow(!show);
  }
  return (
    <HocPrivate>
      <div className={styled.wrapper}>
        <Sidebar show={show} toggleSidebar={toggleSidebar} />
        <div className={styled.inner}>
          <ScrollArea
            h={"100vh"}
            offsetScrollbars
            scrollbarSize={0}
            scrollHideDelay={1500}
            scrollbars="y"
          >
            <Navbar show={show} toggleSidebar={toggleSidebar} />
            <Suspense fallback={"loading..."}>
              <div className={styled.container}>
                <div className={styled.title}>
                  <h3>Foydalanuvchilar</h3>
                  <Button onClick={open}>+ Foydalanuvchi qo’shish</Button>
                </div>
                <TableComponent thead={thead} rows={rows} />

                <Modal
                  size="xs"
                  padding={24}
                  opened={opened}
                  onClose={close}
                  title="Foydalanuvchi qo’shish"
                  centered
                >
                  <div className={styled.formContainer}>
                    <Input
                      required
                      name="Test1"
                      control={form.control}
                      label="F.I.Sh"
                      placeholder="F.I.Sh"
                    />
                    <Input
                      required
                      name="Test2"
                      control={form.control}
                      label="Tashkilot nomi"
                      placeholder="Tashkilot nomi"
                    />
                    <Input
                      required
                      name="Test3"
                      control={form.control}
                      label="Lavozimi"
                      placeholder="F.I.Sh"
                    />
                    <Input
                      required
                      name="Test4"
                      control={form.control}
                      label="Login"
                      placeholder="Login"
                    />
                    <Input
                      required
                      name="Test5"
                      control={form.control}
                      label="Parol"
                      placeholder="Parol"
                    />
                    <Select
                      required
                      name="Test6"
                      control={form.control}
                      label="Rollar"
                      data={[
                        {
                          label: "Admin",
                          value: "Admin",
                        },
                        {
                          label: "Owner",
                          value: "Owner",
                        },
                      ]}
                      placeholder="Admin"
                    />
                    <Button className={styled.saveButton}>Saqlash</Button>
                  </div>
                </Modal>

                <Modal
                  size="xs"
                  padding={24}
                  opened={openedDelete}
                  onClose={closeDelete}
                  title="Siz rostdanham o'chirishni hohlayysizmi?"
                  centered
                >
                  <div className={styled.buttons}>
                    <Button w={100}>Ha</Button>
                    <Button w={100} bg="red" onClick={closeDelete}>
                      Yo'q
                    </Button>
                  </div>
                </Modal>
              </div>
              <Outlet />
            </Suspense>
            {/* <Footer /> */}
          </ScrollArea>
        </div>
      </div>
    </HocPrivate>
  );
}
