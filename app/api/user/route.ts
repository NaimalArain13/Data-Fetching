import { data } from "@/app/lib/data";

export async function GET(){
    return new Response(JSON.stringify(data))
}