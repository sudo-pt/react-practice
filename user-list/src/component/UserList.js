import React, { useState } from 'react';
import { Table, Modal } from 'antd';
import User from "./User";
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        showSorterTooltip: {
            target: 'full-header',
        },
        sorter: (a, b) => a.name.length - b.name.length,
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
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        email: 'Person1@test.com',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        email: 'Person2@test.com',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        email: 'Person3@test.com',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        email: 'Person4@test.com',
    },
];

const UserList = () => {
    const [userRecord, setUserRecord] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const clickRow = async (record) => {
        setUserRecord(record);
        setIsModalOpen(true);
    }
    return <>
        <Table
            columns={columns}
            dataSource={data}
            onRow={record => ({
                onClick: () => clickRow(record)
            })}
        />

        <Modal title={userRecord ? `${userRecord.name}'s Profile` : 'Unknown'} open={isModalOpen}
               onOk={() => setIsModalOpen(false)}
               onCancel={() => setIsModalOpen(false)}>
            <User userRecord={userRecord}/>
        </Modal>
    </>
};

export default UserList;