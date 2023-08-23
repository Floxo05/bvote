import {NextRequest, NextResponse} from "next/server";


const save = async (req: NextRequest) => {

    const value = await req.json();

    console.log(value.selectedOption)

    return new NextResponse("", {status: 200});
}

export {save as POST};