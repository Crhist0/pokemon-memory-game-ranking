import { getConnection } from "../database/connection";
export class PlayerController {
    async create(name: string, count: number, time: number, date: string, difficulty: number) {
        await getConnection().manager.query(
            `
        
        INSERT INTO public.ranking (name, count, time, date, difficulty) VALUES ($1, $2, $3, $4, $5)
        
        `,
            [name, count, time, date, difficulty]
        );
    }
    async listByPlays() {
        const player = await getConnection().manager.query("SELECT * FROM public.ranking ORDER BY count ASC, time ASC");
        return player;
    }
    async listByTime() {
        const player = await getConnection().manager.query("SELECT * FROM public.ranking ORDER BY time ASC, count ASC");
        return player;
    }
}
