import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/utilities/connection";
import { Connection } from "mariadb";

const getBVoteByHash = async (req: NextRequest) => {
    try {
        const conn: Connection = await getConnection();
        const {id} = await req.json();

        // Suche den Datensatz anhand des Hash-Werts
        const selectQuery = `
            SELECT * FROM bvote
            where hash = ?
            limit 1
        `;
        conn.debug(true);

        const [row] = await conn.query(selectQuery, [id]);

        await conn.end(); // Schließe die Verbindung zur Datenbank

        if (row) {
            return new NextResponse(JSON.stringify(row), { status: 200 });
        } else {
            return new NextResponse("Datensatz nicht gefunden", { status: 404 });
        }
    } catch (error) {
        console.error("Fehler beim Laden des Datensatzes:", error);
        return new NextResponse("Fehler beim Laden des Datensatzes", { status: 500 });
    }
};

export { getBVoteByHash as POST };
