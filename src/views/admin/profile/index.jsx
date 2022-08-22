// Chakra imports
import {Box, Button, Flex, Grid, Text, useColorModeValue} from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import PermissionList from "views/admin/profile/components/PermissionList";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatarSimmmple.png";
import React from "react";
import AdminListTable from "./components/AdminListTable";
import tableDataTopCreators from "./variables/tableDataTopCreators.json";
import {tableColumnsTopCreators} from "./variables/tableColumnsTopCreators";

export default function Overview() {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    return (
        <Box pt={{base: "130px", md: "80px", xl: "80px"}}>
            {/* Main Fields */}
            <Grid
                templateColumns={{
                    base: "1fr",
                    lg: "1fr 1fr ",
                }}
                templateRows={{
                    base: "repeat(2, 1fr)",
                    lg: "1fr",
                }}
                gap={{base: "20px", xl: "20px"}}>
                <Banner
                    gridArea='1 / 1 / 2 / 2'
                    banner={banner}
                    avatar={avatar}
                    name='Asadbek Kushakov'
                    job='System  Admin'
                    tel='+998 97 949 77 71'
                    location='Toshkent shaxat Chilanzor tumani'
                    following='274'
                />
                <AdminListTable
                    tableData={tableDataTopCreators}
                    columnsData={tableColumnsTopCreators}
                    gridArea={{
                        base: "3 / 1 / 4 / 2",
                        lg: "2 / 1 / 3 / 3",
                        "2xl": "1 / 3 / 2 / 4",
                    }}
                />

                <PermissionList
                    used={25.6}
                    total={50}

                />
            </Grid>
        </Box>
    );
}
