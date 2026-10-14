import React from 'react';
import {AbsoluteFill,interpolate,spring,useCurrentFrame,useVideoConfig} from 'remotion';
const NAVY='#243f56',INK='#182c3c',MUTED='#627788';
const scenes=[
{from:0,to:170,eyebrow:'ENSEIGNER, C’EST DÉJÀ BEAUCOUP.',title:'Planifier. Organiser. Évaluer.',sub:'Et si tout devenait plus simple?'},
{from:170,to:330,eyebrow:'PRÉSENTATION',title:'Voici Henri.',sub:'Votre espace de travail en éducation physique.'},
{from:330,to:540,eyebrow:'01 / PLANIFICATION',title:'Une année. Une vision.',sub:'Planification annuelle, séquences et séances au même endroit.'},
{from:540,to:750,eyebrow:'02 / CALENDRIER',title:'Chaque cours, à sa place.',sub:'Retrouvez vos groupes et vos séances dans votre calendrier.'},
{from:750,to:960,eyebrow:'03 / GROUPES',title:'Vos groupes. Simplifiés.',sub:'Élèves, équipes et organisation à portée de main.'},
{from:960,to:1170,eyebrow:'04 / ÉVALUATIONS',title:'Évaluer. Sans s’éparpiller.',sub:'Des grilles liées aux cours et aux élèves.'},
{from:1170,to:1500,eyebrow:'HENRI',title:'Plus de temps pour enseigner.',sub:'Moins de gestion. Plus d’essentiel.'}
];
const fade=(f:number,a:number,b:number)=>Math.min(1,Math.max(0,(f-a)/18),Math.max(0,(b-f)/22));
export const HenriPromo:React.FC=()=>{const frame=useCurrentFrame();const {fps}=useVideoConfig();return <AbsoluteFill style={{background:'#f7f9fa',fontFamily:'Inter,Arial,sans-serif',color:INK,overflow:'hidden'}}>
<div style={{position:'absolute',width:820,height:820,borderRadius:'50%',background:'radial-gradient(circle,rgba(86,132,166,.14),transparent 70%)',top:-280,right:-200,transform:`translateY(${Math.sin(frame/45)*28}px)`}}/>
{scenes.map((s,i)=>{if(frame<s.from||frame>=s.to)return null;const local=frame-s.from;const opacity=fade(frame,s.from,s.to);const shift=interpolate(local,[0,30],[55,0],{extrapolateRight:'clamp'});return <AbsoluteFill key={i} style={{justifyContent:'center',padding:'0 170px',opacity,transform:`translateY(${shift}px)`}}><div style={{fontSize:25,letterSpacing:7,color:MUTED,fontWeight:650,marginBottom:30}}>{s.eyebrow}</div><div style={{fontSize:i===6?105:112,fontWeight:750,letterSpacing:-5,lineHeight:1.06,maxWidth:1580}}>{s.title}</div><div style={{fontSize:37,color:MUTED,marginTop:37,maxWidth:1320,lineHeight:1.35}}>{s.sub}</div><div style={{marginTop:80,width:140,height:5,background:NAVY,borderRadius:8,transform:`scaleX(${Math.min(1,local/35)})`,transformOrigin:'left'}}/></AbsoluteFill>})}
<div style={{position:'absolute',bottom:68,left:170,fontSize:26,fontWeight:800,letterSpacing:2,color:NAVY}}>H<span style={{fontWeight:400,marginLeft:12}}>HENRI</span></div><div style={{position:'absolute',bottom:70,right:170,fontSize:20,color:MUTED}}>L’ÉDUCATION PHYSIQUE, SIMPLIFIÉE.</div>
</AbsoluteFill>};
