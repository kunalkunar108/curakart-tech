"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const links=[["About","/about"],["Services","/services"],["Work","/work"],["Process","/process"],["Pricing","/pricing"]];
export default function Header(){
 const [open,setOpen]=useState(false);
 return <><header className="header"><div className="wrap nav"><Link href="/" className="logo" aria-label="CURAKART home" onClick={()=>setOpen(false)}>CURA<span>KART</span></Link><nav className="navlinks" aria-label="Main navigation">{links.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav><Link className="navcta" href="/contact">Let’s talk <span> ↗</span></Link><button className="menu" type="button" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}</button></div></header>{open&&<nav className="mobile-links" id="mobile-navigation" aria-label="Mobile navigation">{links.map(([n,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{n}</Link>)}<Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link></nav>}</>
}