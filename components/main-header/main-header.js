'use client';

import Link from "next/link";
import Image from "next/image";

import MainHeaderBackgound from "@/components/main-header/main-header-backgound";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader() {

    return (
        <>
            <MainHeaderBackgound />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A plat with food on it" priority/>
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Brows Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
