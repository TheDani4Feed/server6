import 'dotenv/config';
import { db } from './lib/dbConnect.js';
const users = [
    {
        username: 'nathan121',
        email: 'nathan@mail.com',
        password: '$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae',
        avatar: 'https://g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        username: 'jane78',
        email: 'jane@mail.com',
        password: '$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae',
        avatar: 'https://g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];
const tasks = [
    {
        name: '��������� ����� "Atomic Habits"',
        description: '��������� ������ ����� "Atomic Habits" ������� �����',
        priority: '�� ������',
        due: new Date().toISOString(),
        status: '�������',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        name: '������� ���� MERN',
        description: '������� ���� MERN � ������� � ��� ������� �����������������������������',
priority: '������',
        due: new Date().toISOString(),
        status: '�������',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
];
try {
    // ���������� �������������
    let collection = db.collection('users');
    console.log('[seed]', '��������� �������������...');
    const result = await collection.insertMany(users);
    console.log(result.insertedIds);
    console.log('[seed]', '���������� ������������� ���������');
    // ���������� �����
    tasks[0].owner = result.insertedIds[0];
    tasks[1].owner = result.insertedIds[1];
    collection = db.collection('tasks');
    console.log('[seed]', '��������� ������...');
    await collection.insertMany(tasks);
    console.log('[seed]', '���������� ����� ���������');
    console.log('[seed]', '��� ���������');
} catch (error) {
    console.log('[seed]', '������: ', error);
}
process.exit();
