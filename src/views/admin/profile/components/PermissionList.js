// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import SwitchField from "components/fields/SwitchField";
import Menu from "components/menu/MainMenu";

export default function PermissionList(props) {

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card mb='20px' >
      <Flex align='center' w='100%' justify='space-between' mb='30px'>
        <Text
          color={textColorPrimary}
          fontWeight='bold'
          fontSize='2xl'
          mb='4px'>
          Vazifalari
        </Text>
        <Menu />
      </Flex>
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='1'
        label="Student ma'lumotlarini ko'rish"
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='2'
        label="Studentni ma'lumotlarini tahrirlash"
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='3'
        label="Qabul ro'yxatini ko'ra olish"
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='4'
        label="Qabul ro'yxatini tahrirlash"
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='5'
        label="Imtihon javoblarini ko'ra olish"
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='6'
        label="Imtihon javoblarini joylash"
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='7'
        label="Yangi admin qo'shish"
      />
        <SwitchField
            reversed={true}
            fontSize='sm'
            mb='20px'
            id='9'
            label="Adminlar ro'yxatini ko'ra olish"
        />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='8'
        label="Ma'umotlarni yuklab olish"
      />

      {/*<SwitchField*/}
      {/*  reversed={true}*/}
      {/*  fontSize='sm'*/}
      {/*  mb='20px'*/}
      {/*  id='10'*/}
      {/*  label='Email me when someone follows me'*/}
      {/*/>*/}
    </Card>
  );
}
