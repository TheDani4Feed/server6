import { MongoClient, ServerApiVersion } from "mongodb";
// ������� URL ��� ����������� � MongoDB � �������� ���� ������ ��������
const { MONGODB_URI, MONGODB_DATABASE } = process.env;
// �������� ������� MongoDB
const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    // ���������� ������ � �������
    await client.connect();

    // ���������� ping ��� ������������� ��������� �����������
    await client.db().command({ ping: 1 });
    console.log("Подключение к MongoDB успешно!");
} catch (err) {
    console.error("������ ��� ����������� � MongoDB:", err);
}

// ������� ������� ���� ������
export const db = client.db(MONGODB_DATABASE);
