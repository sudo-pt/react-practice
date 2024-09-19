import React, { useState } from 'react';
import { Table, Modal } from 'antd';
import User from "./User";

// Define columns for the table, including sorting by name
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        showSorterTooltip: {
            target: 'full-header',
        },
        sorter: (a, b) => a.name.localeCompare(b.name) // Sort by name alphabetically
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];

const UserTable = (props) => {
    const [userRecord, setUserRecord] = useState(null); // Store the currently selected user record
    const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility state

    // Handle row click to open modal with user details
    const clickRow = async (record) => {
        setUserRecord(record);
        setIsModalOpen(true);
    }

    const data = props.dataSource; // Table data passed via props

    return <>
        <Table
            columns={columns}
            dataSource={data}
            onRow={record => ({
                onClick: () => clickRow(record) // Click on row to trigger modal with user data
            })}
        />

        {/* Display modal with user details */}
        <Modal title={userRecord ? `${userRecord.name}'s Profile` : 'Unknown'} open={isModalOpen}
               onOk={() => setIsModalOpen(false)}
               onCancel={() => setIsModalOpen(false)}>
            <User userRecord={userRecord}/>
        </Modal>
    </>
};

export default UserTable;