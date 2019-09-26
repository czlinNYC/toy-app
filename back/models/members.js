const { db, pgp } = require('../config/connection');

module.exports= {
    async getMembers() {
        try {
            return await db.manyOrNone(`
            SELECT * 
            from members
            `)
        }
        catch(e) {
            throw e;
        }
    },

    async getMemberById(id) {
        try {
            return await db.oneOrNone(`
            SELECT * 
            from members 
            WHERE id = ${id}
            `)
        }
        catch(e) {
            throw e;
        }
    },

    async insertMember(data) {
        try {
            return await db.one(`
            INSERT INTO members (first_name, last_name, email, github)
            VALUES ($1,$2,$3,$4) RETURNING *`,
            [data.first_name, data.last_name, data.email, data.github]);
        }
        catch(e) {
            throw e;
        }
    },
    async updateMember(data) {
        try {
            return await db.one(`
            UPDATE members
            SET
            first_name=$1,
            last_name=$2,
            email=$3,
            github=$4
            RETURNING *`,
            [data.first_name,  data.last_name, data.email, data.github]);
        }
        catch(e) {
            throw e;
        }
    },
    async deleteMember(id){
        try {
            return await db.none(`
            DELETE FROM members
            WHERE id = ${id}`)
        }
        catch(e) {
            throw e;
        }
    }
}