
// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import UserListTable from "views/admin/qabul/components/UserListTable";
import {
    columnsDataUserTable,
} from "views/admin/qabul/variables/columnsData";
import tableDataComplex from "views/admin/qabul/variables/tableDataUser.json";
import React from "react";

export default function Settings() {
  // Chakra Color Mode

    return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ base:1, sm: 1, md: 1, xl:1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <UserListTable
          columnsData={columnsDataUserTable}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </Box>
  );
}
