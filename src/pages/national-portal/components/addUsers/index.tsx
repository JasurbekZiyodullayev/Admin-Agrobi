import { Divider, Flex, SegmentedControl } from "@mantine/core";
import styled from "./style.module.scss";
import { useState } from "react";
import useHook from "../create/useHook";
import RailCreate from "../create/access/rail";
import PercentCreate from "../create/access/percent";
import PrevalenceCreate from "../create/access/prevalence";
import DomesticCreate from "../create/access/domestic";
import CerealCreate from "../create/stability/cereal";
import LandCreate from "../create/stability/land";
import FoodCreate from "../create/stability/food";
import PoliticalCreate from "../create/stability/political";
import ProductionCreate from "../create/stability/production";
import VariabilityCreate from "../create/stability/variability";
import HouseholdsCreate from "../create/utilization/households";
import SafelyCreate from "../create/utilization/safely";
import BasicCreate from "../create/utilization/basic";
import AdditionalProductCreate from "../create/additional/product";
import AdditionalPopulationCreate from "../create/additional/population";
import ExesCreate from "../create/additional/exes";
import RealCreate from "../create/additional/real";
import FiveLineTable from "../five-line-table";
import OneLineTable from "../one-line-table";

export default function AddUsers() {
  const [value, setValue] = useState("item1");
  const { form } = useHook();

  return (
    <div className={styled.formContainer}>
      <SegmentedControl
        w="auto"
        value={value}
        onChange={setValue}
        data={[
          { label: "Oziq-ovqat mahsulotlari mavjudligi", value: "item1" },
          {
            label: "Oziq-ovqat mahsulotlariga erisha olish imkoniyati",
            value: "item2",
          },
          { label: "Barqarorlik", value: "item3" },
          { label: "Organizmda o'zlashtish", value: "item4" },
          { label: "Qo’shimcha foydali statistika", value: "item5" },
        ]}
      />
      {value === "item1" ? (
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
      ) : value === "item2" ? (
        <Flex direction="column" gap="24px" py="24px">
          <RailCreate
            form={form}
            text="100 kvadrat kilometr er maydoniga temir yo'l liniyalarini "
          />
          <Divider my="md" />
          <PercentCreate
            form={form}
            text="Qattiq qoplamali yo'llarning ulushi"
          />
          <Divider my="md" />
          <OneLineTable
            statNum={8}
            addition={14}
            distance={2}
            form={form}
            text="Umumiy aholida o'rtacha yoki og'ir oziq-ovqat xavfsizligining tarqalishi, o'rtacha 3 yil"
          />
          <Divider my="md" />
          <OneLineTable
            statNum={7}
            addition={14}
            distance={2}
            form={form}
            text="Aholi umumiy sonida og'ir oziq-ovqat xavfsizligining tarqalishi, o'rtacha 3 yil"
          />
          <Divider my="md" />
          <PrevalenceCreate
            form={form}
            text="Kam ovqatlanishning tarqalishi, 3 yillik o'rtacha ko'rsatkichlar"
          />
          <Divider my="md" />
          <DomesticCreate
            form={form}
            text="Mahalliy oziq-ovqat narxlari indeksi (%)"
          />
        </Flex>
      ) : value === "item3" ? (
        <Flex direction="column" gap="24px" py="24px">
          <CerealCreate
            form={form}
            text="Donli ekinlar importiga qaramlilik koeffitsienti, o'rtacha 3 yillik"
          />
          <Divider my="md" />
          <LandCreate
            form={form}
            text="Sug'orish uchun jihozlangan ekin maydonlarining foizi"
          />
          <Divider my="md" />
          <FoodCreate
            form={form}
            text="Oziq-ovqat importining umumiy tovar eksportiga nisbatan qiymati"
          />
          <Divider my="md" />
          <PoliticalCreate
            form={form}
            text="Siyosiy barqarorlik va zo'ravonlik/terrorizmning mavjud e'masligi"
          />
          <Divider my="md" />
          <ProductionCreate
            form={form}
            text="Aholi jon boshiga oziq-ovqat ishlab chiqarishning o'zgaruvchanligi (1000 $)"
          />
          <Divider my="md" />
          <VariabilityCreate
            form={form}
            text="Aholi jon boshiga oziq-ovqat ta'minotining o'zgaruvchanligi"
          />
        </Flex>
      ) : value === "item4" ? (
        <Flex direction="column" gap="24px" py="24px">
          <HouseholdsCreate
            form={form}
            text="Kamida asosiy ichimlik suvi xizmatlaridan foydalanadigan uy xo'jaliklari"
          />
          <Divider my="md" />
          <SafelyCreate
            form={form}
            text="Xavfsiz ichimlik suvi xizmatlaridan foydalanadigan uy xo'jaliklari"
          />
          <Divider my="md" />
          <BasicCreate
            form={form}
            text="Xavfsiz sanitariya xizmatlaridan foydalanadigan aholi"
          />
        </Flex>
      ) : (
        <Flex direction="column" gap="24px" py="24px">
          <AdditionalProductCreate
            form={form}
            text="Oziq-ovqat uchun oylik o'rtacha chakana narxlar"
          />
          <Divider my="md" />
          <AdditionalPopulationCreate
            form={form}
            text="Aholining yoshi va jinsi bo'yicha taqsimlanishi"
          />
          <Divider my="md" />
          <ExesCreate form={form} text="Oziq-ovqat xarajatlarining ulushi" />
          <Divider my="md" />
          <RealCreate
            statNum={14}
            addition={10}
            form={form}
            text="Aholi jon boshiga real umumiy daromad (yiliga ming so‘m)"
          />
        </Flex>
      )}
    </div>
  );
}
