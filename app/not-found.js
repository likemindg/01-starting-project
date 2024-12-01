"use client"

import {useRouter} from "next/router";
import {useEffect} from "react";

export default function NotFound() {
    return <main className="not-found">
        <h1>Meal Not found</h1>
        <p>Unfortunately, we could not find the requested page or meal data.</p>
    </main>


    // const router = useRouter();
    //
    // useEffect(() => {
    //     // 사용자를 원하는 경로로 리다이렉트합니다. 예: "/home"
    //     router.push("/");
    // }, [router]);
    //
    // return null; // 렌더링할 UI가 없음
}