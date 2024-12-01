import sql from 'better-sqlite3'

const db = sql('meals.db')

/**
 * 5초 대기 후 데이터베이스에서 모든 식사를 조회합니다.
 * @returns {Promise<Array>} 식사 객체 배열로 해결되는 프로미스를 반환합니다.
 */
export async function getMeals() {
    // 5초 대기 후 SQL 데이터베이스에서 식사 데이터를 조회
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
    })
    return db.prepare('SELECT * FROM meals').all();
}

// SQL 쿼리를 준비하고 특정 슬러그에 해당하는 식사를 조회합니다
export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}





