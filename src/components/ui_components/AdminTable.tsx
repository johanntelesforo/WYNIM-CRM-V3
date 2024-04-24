import {
    Button,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';
import { DeleteDialog } from './DeleteDialog'

const data = [
    {
        adminID: 'Viola Amherd',
        adminName: 'Federal Councillor',
        departement:
            'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
        status: 'active',
    },
    {
        adminID: 'Albert Rösti',
        adminName: 'Federal Councillor',
        departement:
            'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
        status: 'active',
    },
    {
        adminID: 'Beat Jans',
        adminName: 'Federal Councillor',
        departement: 'The Federal Department of Justice and Police (FDJP)',
        status: 'active',
    },
    {
        adminID: 'Ignazio Cassis',
        adminName: 'Federal Councillor',
        departement: 'The Federal Department of Foreign Affairs (FDFA)',
        status: 'active',
    },
    {
        adminID: 'Karin Keller-Sutter',
        adminName: 'Federal Councillor',
        departement: 'The Federal Department of Finance (FDF)',
        status: 'active',
    },
    {
        adminID: 'Guy Parmelin',
        adminName: 'Federal Councillor',
        departement:
            'The Federal Department of Economic Affairs, Education and Research (EAER)',
        status: 'active',
    },
    {
        adminID: 'Elisabeth Baume-Schneider',
        adminName: 'Federal Councillor',
        departement: 'The Federal Department of Home Affairs (FDHA)',
        status: 'active',
    },
];

export function AdminTable() {
    return (
        <Card
            className="w-full max-h-full bg-base-100 shadow-md p-12 my-6 mt-12"
            decoration="top"
            decorationColor="indigo">
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">WYNIM CRM Admins</h3>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Position</TableHeaderCell>
                        <TableHeaderCell>Department</TableHeaderCell>
                        <TableHeaderCell>Actions</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.adminID}>
                            <TableCell>{item.adminID}</TableCell>
                            <TableCell>
                                {item.adminName}
                            </TableCell>
                            <TableCell>
                                {item.departement}
                            </TableCell>
                            <TableCell className='flex'>
                                <Button color="blue" > Edit </Button>
                                <DeleteDialog>
                                    {({ toggle }) => (
                                        <Button className="mx-2" color='red' onClick={toggle}>Delete</Button>
                                    )}
                                </DeleteDialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}