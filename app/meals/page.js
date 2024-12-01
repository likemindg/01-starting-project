import classes from './page.module.css'
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import db from "better-sqlite3/lib/database";
import {getMeals} from "@/lib/meal";
import {Suspense} from "react";

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />

}
export default function MealsPage() {

    return <>
        <header className={classes.header}>
            <h1>
                Delicious meals, create{' '}
                <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share Your Favorite Recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Fetching meal page...</p>}>
                <Meals/>
            </Suspense>
        </main>
    </>;


}