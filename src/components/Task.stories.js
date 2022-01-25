import React from 'react';

import { Task } from './Task';

// Storybookにコンポーネントを認識させるには、以下の内容を含むdefault exportを記述する。
export default {
    component: Task, // Component自体
    title: 'Task', // Storybookのサイドバーにあるコンポーネントを参照する方法
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});  //TODO:bindメソッドについて知る
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2018, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};
