import { Divider, Flex } from "@mantine/core";
import FiveLineTable from "../../five-line-table";
import useHook from "./useHook";

export default function CreateTable() {
  const { form } = useHook();
  return (
    <Flex direction="column" gap="24px" py="24px">
      <FiveLineTable
        statNum={21}
        addition={0}
        distance={2}
        form={form}
        text="O'rtacha oziqlanish energiya ta'minoti yetarliligi"
      />

      <Divider my="md" />
      <FiveLineTable
        statNum={19}
        addition={0}
        distance={2}
        text="Don, ildiz va ildiz mevalaridan olingan oziqlanish energiya ta'minoti ulushi"
        form={form}
      />
      <Divider my="md" />
      <FiveLineTable
        statNum={19}
        addition={0}
        distance={2}
        text="O'rtacha oqsil ta'minoti"
        form={form}
      />
      <Divider my="md" />
      <FiveLineTable
        statNum={19}
        addition={0}
        distance={2}
        text="Hayvonlardan olingan oqsilning o'rtacha ta'minoti"
        form={form}
      />
    </Flex>
  );
}
