import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/utilities/connection";
import { Connection } from "mariadb";
import crypto from "crypto";

const save = async (req: NextRequest) => {
    try {
        const conn: Connection = await getConnection();
        const value = await req.json();

        // Generiere einen zufälligen SHA-256 Hash
        const hash = crypto.createHash("sha256").update(Math.random().toString()).digest("hex");

        // Füge die Daten in die Datenbank ein
        const insertQuery = `
            INSERT INTO bvote (name, gender, hash, abstimmung)
            VALUES (?, ?, ?, ?)
        `;
        await conn.query(insertQuery, [value.name, value.gender, hash, null]);

        await conn.end(); // Schließe die Verbindung zur Datenbank

        return new NextResponse("", { status: 200 });
    } catch (error) {
        console.error("Fehler beim Speichern der Daten:", error);
        return new NextResponse("Fehler beim Speichern der Daten", { status: 500 });
    }
};

export { save as POST };