import {NextRequest, NextResponse} from "next/server";
import {Connection} from "mariadb";
import {getConnection} from "@/utilities/connection";

type SaveRequestBody = {
    id: string,
    abstimmung: string
}

const save = async (req: NextRequest) => {

    try {
        const conn: Connection = await getConnection();
        const value: SaveRequestBody = await req.json();

        const updateQuery = `
            UPDATE bvote 
            SET
                abstimmung = ?
            WHERE
                hash = ?
        `;
        await conn.query(updateQuery, [value.abstimmung, value.id]);

        await conn.end();

        return new NextResponse("", { status: 200 });
    } catch (error) {
        console.error("Fehler beim Speichern der Daten:", error);
        return new NextResponse("Fehler beim Speichern der Daten", { status: 500 });
    }
}

export {save as POST};