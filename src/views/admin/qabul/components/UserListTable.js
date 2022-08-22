import {
    Flex,
    Table,
    Progress,
    Icon,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    useColorModeValue,
    Grid,
    Box,
    useColorMode,
    Link,
    Tooltip,
    IconButton,
    NumberInput,
    NumberInputField,
    NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Select,
} from "@chakra-ui/react";
import {useForm} from 'react-hook-form'


import React, {useMemo} from "react";
import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";

// Assets
import {
    MdOutlinePhone,
    MdOutlineBook, MdOutlinePerson
} from "react-icons/md";
import {ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

export default function UserListTable(props) {
    const {columnsData, tableData} = props;

    const columns = useMemo(() => columnsData, [columnsData]);
    const data = useMemo(() => tableData, [tableData]);
    const { colorMode } = useColorMode();
    const tableInstance = useTable(
        {
            columns,
            data,
            initialState: {pageIndex: 0}
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize}
    } = tableInstance;

    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    const {
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm()

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }

    function getUserInfo(id) {
        console.log("this id =>  "+id)
        return undefined;
    }

    return (
        <>
            <Card
                direction='column'
                w='100%'
                px='10px'
                overflowX={{sm: "scroll", lg: "hidden"}}>
                <Box pt={{base: "10px", md: "10px", xl: "10px"}}>
                    {/* Main Fields */}
                    <Grid
                        templateColumns={{
                            base: "1fr",
                            lg: "1fr",
                        }}
                        templateRows={{
                            base: "repeat(1, 1fr)",
                            lg: "1fr",
                        }}
                        gap={{base: "10px", xl: "10px"}}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Flex px='25px' justify='space-between' align='center'>
                                <FormControl >
                                    <FormLabel htmlFor='tel'><Icon as={MdOutlinePhone} h='16px' w='16px' me='8px' /> Telefon</FormLabel>
                                    <Input

                                        id='tel'
                                        placeholder='telefon'
                                    />
                                </FormControl>
                                <FormControl style={{margin: "10px"}} >
                                    <FormLabel htmlFor='passport'><Icon as={MdOutlineBook} h='16px' w='16px' me='8px' /> Passport</FormLabel>
                                    <Input
                                        id='passport'
                                        placeholder='passport'
                                    />
                                </FormControl>
                                <FormControl style={{margin: "10px"}} >
                                    <FormLabel htmlFor='id'><Icon as={MdOutlinePerson} h='16px' w='16px' me='8px' /> ID</FormLabel>
                                    <Input
                                        id='id'
                                        placeholder='id'
                                    />
                                </FormControl>
                            </Flex>
                            <Button ml={5} mt={4} colorScheme='blue' isLoading={isSubmitting} type='submit'>
                                Yuborish
                            </Button>
                        </form>
                    </Grid>
                </Box>
            </Card>
            <Card
                direction='column'
                w='100%'
                px='0px'
                overflowX={{sm: "scroll", lg: "hidden"}}>
                <Flex px='25px' justify='space-between' mb='20px' align='center'>
                    <Text
                        color={textColor}
                        fontSize='22px'
                        fontWeight='700'
                        lineHeight='100%'>
                        Qabul Ro'yxati
                    </Text>
                    <Menu/>
                </Flex>
                <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
                    <Thead>
                        {headerGroups.map((headerGroup, index) => (
                            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                                {headerGroup.headers.map((column, index) => (
                                    <Th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        pe='10px'
                                        key={index}
                                        borderColor={borderColor}>
                                        <Flex
                                            justify='space-between'
                                            align='center'
                                            fontSize={{sm: "10px", lg: "12px"}}
                                            color='gray.400'>
                                            {column.render("Header")}
                                        </Flex>
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody {...getTableBodyProps()}>
                        {page.map((row, index) => {
                            prepareRow(row);
                            return (
                                <Tr _hover={{bg: colorMode === "light" ? "blue.100":"blue.700", color: "white"}} {...row.getRowProps()} key={index}>
                                    {row.cells.map((cell, index) => {
                                        let data = "";
                                        if (cell.column.Header === "ID") {
                                            data = (
                                                <Flex align='center'>
                                                    {/*<Checkbox*/}
                                                    {/*  defaultChecked={cell.value[1]}*/}
                                                    {/*  colorScheme='brandScheme'*/}
                                                    {/*  me='10px'*/}
                                                    {/*/>*/}
                                                    <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                        {cell.value}
                                                    </Text>
                                                </Flex>
                                            );
                                        } else if (cell.column.Header === "FIO") {
                                            data = (
                                                <Flex align='center'>
                                                        <Text _hover={{color: "blue" }} onClick={()=>getUserInfo(cell.value[2])} color={textColor} fontSize='sm' fontWeight='700'>
                                                            {cell.value[0]}
                                                        </Text>
                                                </Flex>
                                            );
                                        } else if (cell.column.Header === "TELEFON") {
                                            data = (
                                                <Flex align='center'>
                                                    <Text
                                                        me='10px'
                                                        color={textColor}
                                                        fontSize='sm'
                                                        fontWeight='700'>
                                                        {cell.value}
                                                    </Text>
                                                </Flex>
                                            );
                                        } else if (cell.column.Header === "TOPSHIRGAN VAQTI") {
                                            data = (
                                                <Text color={textColor} fontSize='sm' fontWeight='700'>
                                                    {cell.value}
                                                </Text>
                                            );
                                        } else if (cell.column.Header === "TO'LOV") {
                                            data = (
                                                <Text color={cell.value === "To'landi"
                                                    ? "green.500"
                                                    : cell.value === "To'lanmadi"
                                                        ? "red.500"
                                                        : cell.value === "Kantrakt"
                                                            ? "orange.500"
                                                            : null} fontSize='sm' fontWeight='700'>
                                                    {cell.value}
                                                </Text>
                                            );
                                        }
                                        return (
                                            <Td
                                                {...cell.getCellProps()}
                                                key={index}
                                                fontSize={{sm: "14px"}}
                                                minW={{sm: "150px", md: "200px", lg: "auto"}}
                                                borderColor='transparent'>
                                                {data}
                                            </Td>
                                        );
                                    })}
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
                <Flex justifyContent="space-between" m={4} alignItems="center">
                    <Flex>
                        <Tooltip label="First Page">
                            <IconButton
                                onClick={() => gotoPage(0)}
                                isDisabled={!canPreviousPage}
                                icon={<ArrowLeftIcon h={3} w={3}/>}
                                mr={4}
                            />
                        </Tooltip>
                        <Tooltip label="Previous Page">
                            <IconButton
                                onClick={previousPage}
                                isDisabled={!canPreviousPage}
                                icon={<ChevronLeftIcon h={6} w={6}/>}
                            />
                        </Tooltip>
                    </Flex>

                    <Flex alignItems="center">
                        <Text flexShrink="0" mr={8}>
                            Page{" "}
                            <Text fontWeight="bold" as="span">
                                {pageIndex + 1}
                            </Text>{" "}
                            of{" "}
                            <Text fontWeight="bold" as="span">
                                {pageOptions.length}
                            </Text>
                        </Text>
                        <Text flexShrink="0">Go to page:</Text>{" "}
                        <NumberInput
                            ml={2}
                            mr={8}
                            w={28}
                            min={1}
                            max={pageOptions.length}
                            onChange={(value) => {
                                const page = value ? value - 1 : 0;
                                gotoPage(page);
                            }}
                            defaultValue={pageIndex + 1}
                        >
                            <NumberInputField/>
                            <NumberInputStepper>
                                <NumberIncrementStepper/>
                                <NumberDecrementStepper/>
                            </NumberInputStepper>
                        </NumberInput>
                        <Select
                            w={32}
                            value={pageSize}
                            onChange={(e) => {
                                setPageSize(Number(e.target.value));
                            }}
                        >
                            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </Select>
                    </Flex>

                    <Flex>
                        <Tooltip label="Next Page">
                            <IconButton
                                onClick={nextPage}
                                isDisabled={!canNextPage}
                                icon={<ChevronRightIcon h={6} w={6}/>}
                            />
                        </Tooltip>
                        <Tooltip label="Last Page">
                            <IconButton
                                onClick={() => gotoPage(pageCount - 1)}
                                isDisabled={!canNextPage}
                                icon={<ArrowRightIcon h={3} w={3}/>}
                                ml={4}
                            />
                        </Tooltip>
                    </Flex>
                </Flex>
            </Card>
        </>
    );
}
