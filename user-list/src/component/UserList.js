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
        sorter: (a, b) => a.name.localeCompare(b.name)
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

const UserList = (props) => {
    const [userRecord, setUserRecord] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const clickRow = async (record) => {
        setUserRecord(record);
        setIsModalOpen(true);
    }
    const data = props.dataSource;
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