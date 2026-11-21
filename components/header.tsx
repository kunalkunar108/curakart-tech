"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const links=[["About","/about"],["Services","/services"],["Work","/work"],["Process","/process"],["Pricing","/pricing"]];
export default function Header(){const [open,setOpen]=useState(false);return <><header className="header"><div className="wrap nav"><Link href="/" className="logo">CURA<span>KART</span></Link><nav className="navlinks">{links.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav><Link className="navcta" href="/contact">Let’s talk <span> ↗</span></Link><button className="menu" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>{open&&<nav className="mobile-links">{links.map(([n,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{n}</Link>)}<Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link></nav>}</>}