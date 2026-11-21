"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links=[["About","/about"],["Services","/services"],["Technologies","/technologies"],["Portfolio","/portfolio"],["Insights","/blog"]];
export default function Header(){
 const [open,setOpen]=useState(false);
 return <><header className="header"><div className="wrap nav"><Link href="/" className="logo" aria-label="CURAKART home" onClick={()=>setOpen(false)}>CURA<span>KART</span><small> DIGITAL STUDIO</small></Link><nav className="navlinks" aria-label="Main navigation">{links.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav><Link className="navcta" href="/contact">Start a project <ArrowUpRight size={15}/></Link><button className="menu" type="button" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}</button></div></header>{open&&<nav className="mobile-links" id="mobile-navigation" aria-label="Mobile navigation">{links.map(([n,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{n}</Link>)}<Link href="/process" onClick={()=>setOpen(false)}>Process</Link><Link href="/pricing" onClick={()=>setOpen(false)}>Pricing</Link><Link href="/contact" onClick={()=>setOpen(false)}>Contact ↗</Link></nav>}</>
}